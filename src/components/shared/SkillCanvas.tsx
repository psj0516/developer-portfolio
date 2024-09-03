import { useEffect, useRef, useState } from 'react';
import {
  Engine,
  Render,
  Runner,
  Mouse,
  MouseConstraint,
  Composite,
  Bodies,
  Events,
} from 'matter-js';
import styled from '@emotion/styled';
import { colors } from '@/styles/colorPalette';

import IconCSS from '@/assets/skills/CSS.png';
import IconHTML from '@/assets/skills/HTML.png';
import IconJS from '@/assets/skills/JavaScript.png';
import IconTs from '@/assets/skills/TypeScript.png';
import IconJquery from '@/assets/skills/JQuery.png';

import Text from './Text';
import Paragraph from './Paragraph';

interface SkillItem {
  label: string;
  title: string;
}

interface SkillCategory {
  items: Record<string, SkillItem>;
}

const data: Record<string, SkillCategory> = {
  tech: {
    items: {
      HTML: { label: 'HTML', title: 'HTML' },
      CSS: { label: 'CSS', title: 'CSS' },
      JS: { label: 'JS', title: 'Javascript' },
      TS: { label: 'TS', title: 'Typescript' },
      JQUERY: { label: 'JQUERY', title: 'Jquery' },
    },
  },
  tools: {
    items: {
      GITHUB: { label: 'Github', title: 'Github' },
      FIGMA: { label: 'Figma', title: 'Figma' },
      NOTION: { label: 'Notion', title: 'Notion' },
    },
  },
  others: {
    items: {
      JAVA: { label: 'Java', title: 'Java' },
      SQL: { label: 'SQL', title: 'SQL' },
      FIREBASE: { label: 'Firebase', title: 'Firebase' },
    },
  },
};

const SkillCanvas = () => {
  const [selected, setSelected] = useState<SkillItem>(data.tech.items.HTML);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const cw = 1000;
    const ch = 1000;

    const garvityPower = 0.5;
    let gravityDeg = 0;
    let engine: Engine,
      render: Render,
      runner: Runner,
      mouse: Mouse,
      mouseConstraint: MouseConstraint;
    let observer: IntersectionObserver;

    initScene();
    initMouse();
    initIntersectionObserver();
    initGround();
    initImageBoxes();

    function initScene() {
      engine = Engine.create();
      render = Render.create({
        canvas: canvas!,
        engine: engine,
        options: {
          width: cw,
          height: ch,
          wireframes: false,
          background: '#01080e',
        },
      });
      runner = Runner.create();

      Render.run(render);
      Runner.run(runner, engine);

      Events.on(runner, 'tick', () => {
        gravityDeg += 1;
        engine.world.gravity.x =
          garvityPower * Math.cos((Math.PI / 180) * gravityDeg);
        engine.world.gravity.y =
          garvityPower * Math.sin((Math.PI / 180) * gravityDeg);
      });
    }

    function initMouse() {
      mouse = Mouse.create(canvas!);
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
      });
      Composite.add(engine.world, mouseConstraint);

      Events.on(mouseConstraint, 'mousedown', () => {
        const bodyLabel = mouseConstraint.body?.label;

        if (bodyLabel) {
          let newSelected: SkillItem | null = null;

          Object.keys(data).forEach((categoryKey) => {
            const foundItem = Object.keys(data[categoryKey].items).find(
              (key) => data[categoryKey].items[key].label === bodyLabel,
            );
            if (foundItem) {
              newSelected = data[categoryKey].items[foundItem];
            }
          });
          newSelected && setSelected(newSelected);
        }
      });
    }

    function initIntersectionObserver() {
      const options = {
        threshold: 0.1,
      };
      observer = new IntersectionObserver((entries) => {
        const canvasEntry = entries[0];
        if (canvasEntry.isIntersecting) {
          runner.enabled = true;
          Render.run(render);
        } else {
          runner.enabled = false;
          Render.stop(render);
        }
      }, options);

      observer.observe(canvas!);
    }

    function initGround() {
      const segments = 32;
      const deg = (Math.PI * 2) / segments;
      const width = 50;
      const radius = cw / 2 + width / 2;
      const height = radius * Math.tan(deg / 2) * 2;

      for (let i = 0; i < segments; i++) {
        const theta = deg * i;
        const x = radius * Math.cos(theta) + cw / 2;
        const y = radius * Math.sin(theta) + ch / 2;
        addRect(x, y, width, height, { isStatic: true, angle: theta });
      }
    }

    function initImageBoxes() {
      const scale = 0.7;
      const t = { w: 250 * scale, h: 250 * scale };

      addRect(cw / 2 + t.w, ch / 2, t.w, t.h, {
        label: 'HTML',
        chamfer: { radius: 20 },
        render: {
          sprite: { texture: IconHTML.src, xScale: scale, yScale: scale },
        },
      });
      addRect(cw / 2 - t.w, ch / 2, t.w, t.h, {
        label: 'CSS',
        chamfer: { radius: 20 },
        render: {
          sprite: { texture: IconCSS.src, xScale: scale, yScale: scale },
        },
      });
      addRect(cw / 2, ch / 2, t.w, t.h, {
        label: 'JS',
        chamfer: { radius: 20 },
        render: {
          sprite: { texture: IconJS.src, xScale: scale, yScale: scale },
        },
      });
      addRect(cw / 2 + t.w, ch / 2 + t.h, t.w, t.h, {
        label: 'TS',
        chamfer: { radius: 20 },
        render: {
          sprite: { texture: IconTs.src, xScale: scale, yScale: scale },
        },
      });
      addRect(cw / 2 + t.w, ch / 2 + t.h, t.w, t.h, {
        label: 'JQUERY',
        chamfer: { radius: 20 },
        render: {
          sprite: { texture: IconJquery.src, xScale: scale, yScale: scale },
        },
      });
    }

    function addRect(x: number, y: number, w: number, h: number, options: any) {
      const rect = Bodies.rectangle(x, y, w, h, options);
      Composite.add(engine.world, rect);
    }

    return () => {
      if (observer) observer.unobserve(canvas!);

      Composite.clear(engine.world, false);
      Mouse.clearSourceEvents(mouse);
      Runner.stop(runner);
      Render.stop(render);
      Engine.clear(engine);
    };
  }, []);

  return (
    <SkillCanvasWrapper>
      <canvas ref={canvasRef}></canvas>
      <aside>
        <SkillContainer>
          <Paragraph typography="t2" bold={true} color="accentMint">
            Skills
          </Paragraph>
          {['tech'].map((categoryKey) => (
            <div key={categoryKey}>
              {Object.keys(data[categoryKey].items).map((key, index, array) => (
                <div key={key} style={{ display: 'inline-block' }}>
                  <Text
                    color={
                      selected.label === data[categoryKey].items[key].label
                        ? 'accentPink'
                        : 'white'
                    }
                    bold={selected.label === data[categoryKey].items[key].label}
                    typography="t3"
                  >
                    {data[categoryKey].items[key].title}
                  </Text>
                  {index < array.length - 1 && (
                    <Text typography="t3" color="white">
                      &nbsp;/&nbsp;
                    </Text>
                  )}
                </div>
              ))}
            </div>
          ))}
        </SkillContainer>
        <SkillContainer>
          <Paragraph typography="t2" bold={true} color="accentMint">
            Tools
          </Paragraph>
          {Object.keys(data.tools.items).map((key, index, array) => (
            <div key={key} style={{ display: 'inline-block' }}>
              <Text
                color={
                  selected.label === data.tools.items[key].label
                    ? 'accentPink'
                    : 'white'
                }
                bold={selected.label === data.tools.items[key].label}
                typography="t3"
              >
                {data.tools.items[key].title}
              </Text>
              {index < array.length - 1 && (
                <Text typography="t3" color="white">
                  &nbsp;/&nbsp;
                </Text>
              )}
            </div>
          ))}
        </SkillContainer>
        <SkillContainer>
          <Paragraph typography="t2" bold={true} color="accentMint">
            ETC.
          </Paragraph>
          {Object.keys(data.others.items).map((key, index, array) => (
            <div key={key} style={{ display: 'inline-block' }}>
              <Text
                color={
                  selected.label === data.others.items[key].label
                    ? 'accentPink'
                    : 'white'
                }
                bold={selected.label === data.others.items[key].label}
                typography="t3"
              >
                {data.others.items[key].title}
              </Text>
              {index < array.length - 1 && (
                <Text typography="t3" color="white">
                  &nbsp;/&nbsp;
                </Text>
              )}
            </div>
          ))}
        </SkillContainer>
      </aside>
    </SkillCanvasWrapper>
  );
};

export default SkillCanvas;

const SkillCanvasWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
  }

  canvas {
    width: 50vmin;
    height: 50vmin;
    min-width: 400px;
    min-height: 400px;
    border-radius: 50%;
    border: 1px solid ${colors.line};
  }

  aside {
    width: 50vmin;

    @media (max-width: 480px) {
      width: 100%;
    }
  }
  aside > h1 {
    font-size: 4rem;
    margin-bottom: 0.5rem;
  }
  aside > h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  aside > p {
    font-size: 1.2rem;
    line-height: 1.4;
  }
`;

const SkillContainer = styled.div`
  min-width: 450px;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    min-width: 0px;
    width: 100%;
  }
`;
