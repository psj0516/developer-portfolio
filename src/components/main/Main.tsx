import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';
import { useRef } from 'react';
import Header from '../common/Header';
import TopSection from '../sections/TopSection';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Career from '../sections/Career';
import Portfolio from '../sections/Portfolio';
import Footer from '../common/Footer';

const Main = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const careerRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const sections = { aboutRef, skillsRef, careerRef, portfolioRef, contactRef };

  return (
    <Container>
      <Header sections={sections} />
      <ContentWrapper>
        <TopSection />
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={careerRef}>
          <Career />
        </div>
        <div ref={portfolioRef}>
          <Portfolio />
        </div>
        <Footer />
      </ContentWrapper>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.main2};
`;

const ContentWrapper = styled.div`
  padding-top: 50px;
`;
