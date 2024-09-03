import { useEffect, useState } from 'react';
import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';
import Text from '../shared/Text';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Spacing from '../shared/Spacing';

const Info = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [text] = useTypewriter({
    words: ['Jane Doe'],
    loop: true,
  });

  useEffect(() => {
    const handleResize = () => {
      const clientWidth = document.documentElement.clientWidth;
      setIsMobile(clientWidth <= 480);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return (
    <Container>
      <TextWrapper>
        <Text color="white" typography="t3">
          Hi, I am
        </Text>
        <br />
        <Text color="white" typography="t1">
          {text}
          <Cursor cursorStyle="_" cursorColor="white" />
        </Text>
        <br />
        <Text color="subPurple" typography="t2">
          &gt; Front-end developer
        </Text>
        <br />
        {!isMobile ? (
          <>
            <Spacing size={80} />
            <Text color="subGray" typography="t4">
              &#47;&#47;&nbsp;Try the game on the right side
            </Text>
            <br />
          </>
        ) : (
          <>
            <Spacing size={40} />
            <Text color="subGray" typography="t4">
              &#47;&#47;&nbsp;You can play a memory game on a wider screen
            </Text>
            <br />
          </>
        )}
        <Text color="subGray" typography="t4">
          &#47;&#47;&nbsp;Below is my GitHub link
        </Text>
        <br />
        <Text color="subPurple" typography="t4">
          const&nbsp;
        </Text>
        <Text color="accentMint" typography="t4">
          githubLink&nbsp;
        </Text>
        <Text color="white" typography="t4">
          =&nbsp;
        </Text>
        <StyledLink
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text color="accentPink" typography="t4">
            &quot;https://github.com/&quot;;
          </Text>
        </StyledLink>
      </TextWrapper>
    </Container>
  );
};

export default Info;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  height: 100%;
  line-height: 2rem;
  padding: 50px;

  @media (max-width: 480px) {
    width: 100%;
    padding: 0px;
    justify-content: center;
  }
`;

const TextWrapper = styled.div`
  text-align: left;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration-line: underline;
    text-decoration-color: ${colors.accentPink};
  }

  &:focus,
  &:active {
    outline: none;
    text-decoration: none;
  }
`;
