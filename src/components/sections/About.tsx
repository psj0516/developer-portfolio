import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { colors } from '@/styles/colorPalette';
import Text from '@/components/shared/Text';
import Paragraph from '@/components/shared/Paragraph';

const About: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [lineNumbers, setLineNumbers] = useState<number[]>([]);

  useEffect(() => {
    const handleResize = () => {
      const clientWidth = document.documentElement.clientWidth;
      setIsMobile(clientWidth <= 480);

      const linesCount = clientWidth <= 480 ? 20 : 14;
      setLineNumbers(Array.from({ length: linesCount }, (_, i) => i + 1));
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const codeVariables = [
    {
      name: 'languages',
      value: ['"Korean"', '"English"', '"Spanish"'],
    },
    {
      name: 'Values',
      value: ['"User Experience"', '"Collaboration"', '"Growth"'],
    },
  ];

  const isKorean = (text: string) => {
    const koreanPattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    return koreanPattern.test(text);
  };

  const renderArray = (arr: string[]) =>
    arr.map((item, index) => (
      <span key={index}>
        <Text color="accentMint" typography="t4">
          {item}
        </Text>
        {index < arr.length - 1 && (
          <Text typography="t4" color="white">
            ,
          </Text>
        )}
      </span>
    ));

  return (
    <Container>
      <MainSection>
        <MainSectionStyle>
          <InfoSectionStyle>
            <Header>
              <HeaderTitle>
                <Text color="subGray" typography="t5">
                  about.tsx
                </Text>
                <Text typography="t5" color="subGray">
                  X
                </Text>
              </HeaderTitle>
            </Header>
            <SnippetAreaStyle>
              <SnippetContainerStyle>
                <LineNumberColumnStyle>
                  {lineNumbers.map((num) => (
                    <Text typography="t4" color="subGray" key={num}>
                      {num}
                    </Text>
                  ))}
                </LineNumberColumnStyle>
                <CodeColumnStyle>
                  <Paragraph color="subGray" typography="t4">
                    &#47;&#42;&#42; <br />
                    &nbsp;&nbsp;&#42;&nbsp;Write here your information.
                    <br />
                    &nbsp;&nbsp;&#42;&nbsp;Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    <br />
                    &nbsp;&nbsp;&#42;&nbsp;Suspendisse consequat volutpat orci,
                    et finibus tellus ornare vitae.
                    <br />
                    &nbsp;&nbsp;&#42;&nbsp;Quisque lacinia aliquet magna, eget
                    gravida tortor faucibus sed.
                    <br />
                    &#42;&#42;&#47;
                  </Paragraph>
                  <br />
                  <Paragraph>
                    <Text color="accentPink" typography="t4">
                      const&nbsp;
                    </Text>
                    <Text color="subPurple" typography="t4">
                      location&nbsp;
                    </Text>
                    <Text color="white" typography="t4">
                      =&nbsp;
                    </Text>
                    <Text color="accentMint" typography="t4">
                      &quot;Seoul, Korea&quot;;
                    </Text>
                  </Paragraph>
                  <Paragraph color="white">
                    <Text color="accentPink" typography="t4">
                      const&nbsp;
                    </Text>
                    <Text color="subPurple" typography="t4">
                      {codeVariables[0].name}&nbsp;
                    </Text>
                    <Text color="white" typography="t4">
                      =&nbsp;
                    </Text>
                    <Text typography="t4" color="white">
                      &#91;
                    </Text>
                    {renderArray(codeVariables[0].value)}
                    <Text typography="t4" color="white">
                      &#93;;
                    </Text>
                  </Paragraph>
                  <Paragraph color="white">
                    <Text color="accentPink" typography="t4">
                      const&nbsp;
                    </Text>
                    <Text color="subPurple" typography="t4">
                      {codeVariables[1].name}&nbsp;
                    </Text>
                    <Text typography="t4" color="white">
                      =&nbsp;
                    </Text>
                    <Text typography="t4" color="white">
                      &#91;
                    </Text>
                    {renderArray(codeVariables[1].value)}
                    <Text typography="t4" color="white">
                      &#93;;
                    </Text>
                  </Paragraph>
                </CodeColumnStyle>
              </SnippetContainerStyle>
            </SnippetAreaStyle>
          </InfoSectionStyle>
        </MainSectionStyle>
      </MainSection>
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: ${colors.main};
  border-top: 1px solid ${colors.line};
`;

const MainSection = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
`;

const MainSectionStyle = styled.div`
  flex: 1;
  position: relative;
  display: flex;
`;

const InfoSectionStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.line};
`;

const HeaderTitle = styled.div`
  width: 160px;
  padding: 10px;
  display: flex;
  align-items: center;
  border-right: 1px solid ${colors.line};
  justify-content: space-between;
`;

const SnippetAreaStyle = styled.div`
  padding-top: 10px;
`;

const SnippetContainerStyle = styled.div`
  display: flex;
`;

const LineNumberColumnStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px 10px 20px;
  text-align: right;
`;

const CodeColumnStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;
