import { CSSProperties } from 'react';
import { colors, Colors } from '@/styles/colorPalette';
import { Typography, typographyMap } from '@/styles/typography';

import styled from '@emotion/styled';

interface TextProps {
  typography?: Typography;
  color?: Colors;
  display?: CSSProperties['display'];
  textAlign?: CSSProperties['textAlign'];
  fontWeight?: CSSProperties['fontWeight'];
  bold?: boolean;
  lang?: string;
}

const Text = styled.span<TextProps>(
  ({
    color = 'subGray' as Colors,
    display,
    textAlign,
    fontWeight,
    bold,
    lang,
  }) => ({
    color: colors[color],
    display,
    textAlign,
    fontWeight: bold ? 'bold' : fontWeight ? fontWeight : 300,
    fontFamily: lang === 'kr' ? 'var(--Nanum-Coding)' : undefined,
  }),
  ({ typography = 't5' }) => typographyMap[typography],
);

export default Text;
