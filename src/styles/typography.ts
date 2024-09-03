import { css } from '@emotion/react';

export const typographyMap = {
  t1: css`
    font-size: 62px;
    line-height: 1.5;

    @media (max-width: 480px) {
      font-size: 48px;
      line-height: 1.5;
    }
  `,
  t2: css`
    font-size: 32px;
    line-height: 1.34;

    @media (max-width: 480px) {
      font-size: 24px;
      line-height: 1.3;
    }
  `,
  t3: css`
    font-size: 18px;
    line-height: 1.4;

    @media (max-width: 480px) {
      font-size: 16px;
      line-height: 1.2;
    }
  `,
  t4: css`
    font-size: 16px;
    line-height: 1.45;

    @media (max-width: 480px) {
      font-size: 12px;
    }
  `,
  t5: css`
    font-size: 14px;
    line-height: 1.5;
    @media (max-width: 480px) {
      font-size: 10px;
    }
  `,
  t6: css`
    font-size: 12px;
    line-height: 1.5;
    @media (max-width: 480px) {
      font-size: 8px;
    }
  `,
};

export type Typography = keyof typeof typographyMap;
