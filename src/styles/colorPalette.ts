import { css } from '@emotion/react';

export const colorPalette = css`
  :root {
    --main-color-1: #01080e;
    --main-color-2: #011627;
    --main-color-3: #011221;
    --sub-color-1: #607b96;
    --sub-color-2: #1c2b3a;
    --sub-color-3: #3c9d93;
    --sub-color-4: #4d5bce;
    --accent-color-1: #fea55f;
    --accent-color-2: #43d9ad;
    --accent-color-3: #e99287;
    --accent-color-4: #c98bdf;
    --line-color: #1e2d3d;
    --gradients-1: #4d5bce;
    --gradients-2: #43d9ad;
    --weak-color-1: #263b50;
    --white: #ffffff;
  }
`;

export const colors = {
  main: 'var(--main-color-1)',
  main2: 'var(--main-color-2)',
  main3: 'var(--main-color-3)',
  subGray: 'var(--sub-color-1)',
  subDarkGray: 'var(--sub-color-2)',
  subMint: 'var(--sub-color-3)',
  subPurple: 'var(--sub-color-4)',
  accentAmber: 'var(--accent-color-1)',
  accentMint: 'var(--accent-color-2)',
  accentPink: 'var(--accent-color-3)',
  accentPurple: 'var(--accent-color-4)',
  line: 'var(--line-color)',
  gradients1: 'var(--gradients-1)',
  gradients2: 'var(--gradients-2)',
  weakDarkGray: 'var(--weak-color-1)',
  white: 'var(--white)',
};

export type Colors = keyof typeof colors;
