import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { colors } from '@/styles/colorPalette';
import Text from '../shared/Text';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <LeftMenu>
        <Text typography="t5">dev-portfolio&copy;{currentYear}</Text>
      </LeftMenu>
      <RightMenu
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Text typography="t5">github</Text>
        <StyledImage
          src="/icons/icon_github.svg"
          alt="GitHub Icon"
          width={20}
          height={20}
        />
      </RightMenu>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${colors.line};
`;

const LeftMenu = styled.div`
  padding: 15px 20px;
  color: ${colors.subGray};
  border-right: 1px solid ${colors.line};
  text-align: center;

  @media (max-width: 480px) {
    padding: 15px 20px;
  }
`;

const RightMenu = styled.a`
  display: flex;
  align-items: center;
  color: ${colors.subGray};
  border-left: 1px solid ${colors.line};
  margin-right: 0;
  padding: 15px 30px;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 480px) {
    justify-content: center;
    padding: 15px 20px;
  }
`;

const StyledImage = styled(Image)`
  margin-left: 8px;
  fill: ${colors.subGray};
`;
