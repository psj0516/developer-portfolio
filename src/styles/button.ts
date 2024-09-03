import { css } from '@emotion/react';
import { colors } from './colorPalette';

export const buttonColorMap = {
  primary: css`
    border-color: ${colors.subMint};
    background-color: ${colors.subMint};
    color: ${colors.white};
    &:hover {
      background-color: ${colors.accentMint};
      color: ${colors.white};
    }
  `,
  default: css`
    border-color: ${colors.subDarkGray};
    background-color: ${colors.subDarkGray};
    color: ${colors.white};
    &:hover {
      background-color: ${colors.weakDarkGray};
      color: ${colors.white};
    }
  `,
  ghost: css`
    border-color: ${colors.white};
    border: solid 1px;
    background-color: transparent;
    color: ${colors.white};
    &:hover {
      border-color: ${colors.white};
      color: ${colors.white};
    }
  `,
};

export const buttonSizeMap = {
  small: css`
    font-size: 13px;
    padding: 8px 9px;
  `,
  medium: css`
    font-size: 15px;
    padding: 10px 15px;
  `,
  large: css`
    font-size: 18px;
    padding: 12px 10px;
  `,
};

export type ButtonColor = keyof typeof buttonColorMap;
export type ButtonSize = keyof typeof buttonSizeMap;
