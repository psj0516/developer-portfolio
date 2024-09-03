import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  ButtonColor,
  buttonColorMap,
  ButtonSize,
  buttonSizeMap,
} from '@/styles/button';

interface ButtonProps {
  color?: ButtonColor;
  size?: ButtonSize;
  bold?: boolean;
  full?: boolean;
  disabled?: boolean;
}

const BaseButton = styled.button<ButtonProps>(
  {
    cursor: 'pointer',
    borderRadius: '0.5em',
    outline: 'none',
    border: '1px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
  },
  ({ bold }) =>
    bold
      ? css`
          font-weight: bold;
        `
      : undefined,
  ({ color = 'default' }) => buttonColorMap[color],
  ({ size = 'small' }) => buttonSizeMap[size],
  ({ full }) =>
    full
      ? css`
          display: block;
          width: 100%;
          border-radius: 0;
        `
      : undefined,
  ({ disabled }) =>
    disabled
      ? css`
          opacity: 0.26;
          cursor: initial;
        `
      : undefined,
);

const Button = BaseButton as typeof BaseButton;

export default Button;
