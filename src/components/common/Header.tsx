/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import styled from '@emotion/styled';
import { colors } from '@/styles/colorPalette';

type SectionRefs = {
  aboutRef: React.RefObject<HTMLElement>;
  skillsRef: React.RefObject<HTMLElement>;
  careerRef: React.RefObject<HTMLElement>;
  portfolioRef: React.RefObject<HTMLElement>;
};

type HeaderProps = {
  sections: SectionRefs;
};

const Header = ({ sections }: HeaderProps) => {
  const { aboutRef, skillsRef, careerRef, portfolioRef } = sections;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    if (sectionRef.current) {
      const offsetTop = sectionRef.current.offsetTop;
      const headerHeight = 50;
      window.scrollTo({
        top: offsetTop - headerHeight,
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <MainHeader>
      <LeftMenu>
        <Name onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          header-name
        </Name>
        <DesktopMenu>
          <MenuItem onClick={() => handleScrollToSection(aboutRef)}>
            _about
          </MenuItem>
          <MenuItem onClick={() => handleScrollToSection(skillsRef)}>
            _skills
          </MenuItem>
          <MenuItem onClick={() => handleScrollToSection(careerRef)}>
            _career
          </MenuItem>
          <MenuItem onClick={() => handleScrollToSection(portfolioRef)}>
            _portfolio
          </MenuItem>
        </DesktopMenu>
        <MenuIcon onClick={handleToggleMenu}>&#9776;</MenuIcon>
      </LeftMenu>

      {isMenuOpen && (
        <MobileMenu>
          <MobileMenuItem onClick={() => handleScrollToSection(aboutRef)}>
            _about
          </MobileMenuItem>
          <MobileMenuItem onClick={() => handleScrollToSection(skillsRef)}>
            _skills
          </MobileMenuItem>
          <MobileMenuItem onClick={() => handleScrollToSection(careerRef)}>
            _career
          </MobileMenuItem>
          <MobileMenuItem onClick={() => handleScrollToSection(portfolioRef)}>
            _portfolio
          </MobileMenuItem>
        </MobileMenu>
      )}
    </MainHeader>
  );
};

export default Header;

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.line};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${colors.main2};
  z-index: 1000;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 480px) {
    position: sticky;
  }
`;

const LeftMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const Name = styled.div`
  color: ${colors.subGray};
  cursor: pointer;
  padding: 15px 20px;
  border-right: 1px solid ${colors.line};

  @media (max-width: 480px) {
    padding: 15px 15px;
  }
`;

const DesktopMenu = styled.div`
  display: flex;

  @media (max-width: 480px) {
    display: none;
  }
`;

const MenuItem = styled.div`
  padding: 15px 30px;
  color: ${colors.subGray};
  cursor: pointer;
  border-left: 1px solid ${colors.line};

  &:hover {
    color: ${colors.white};
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const MenuIcon = styled.div`
  display: none;
  padding: 10px 20px;
  cursor: pointer;
  color: ${colors.subGray};
  font-size: 24px;

  @media (max-width: 480px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: ${colors.main2};
  z-index: 999;

  @media (min-width: 481px) {
    display: none;
  }
`;

const MobileMenuItem = styled.div`
  padding: 15px;
  color: ${colors.subGray};
  cursor: pointer;
  text-align: center;

  border-bottom: 1px solid ${colors.line};

  &:hover {
    color: ${colors.white};
  }
`;
