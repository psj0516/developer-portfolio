/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { colors } from '@/styles/colorPalette';
import Text from '@comp/shared/Text';
import Button from '@comp/shared/Button';
import { css } from '@emotion/react';
import Paragraph from './Paragraph';

interface CardProps {
  title: string;
  subText: string;
  date: string;
  imgUrl: string;
  skill: string;
  noteUrl?: string;
  githubUrl?: string;
  projectUrl?: string;
  children: React.ReactNode;
}

const Card = ({
  title,
  subText,
  date,
  imgUrl,
  skill,
  noteUrl,
  githubUrl,
  projectUrl,
  children,
}: CardProps) => {
  const handleButtonClick = (url: string) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <Container>
      <ImageDiv>
        <Img src={imgUrl} alt="" />
      </ImageDiv>
      <ContentDiv>
        <div>
          <Text typography="t4" color="accentMint" bold={true}>
            {title}
          </Text>
          <Text typography="t6" color="subGray">
            &nbsp;&#40;{subText}&nbsp;&#47;&nbsp;
          </Text>
          <Text typography="t6" color="subGray">
            {date}&#41;
          </Text>
          <br />
          <Text color="accentPink">{skill}</Text>
        </div>
        <Paragraph color="white">{children}</Paragraph>
        <ButtonContainer>
          {noteUrl && (
            <Button size="small" onClick={() => handleButtonClick(noteUrl)}>
              <Icon src="/icons/icon_docs.svg" />
              docs
            </Button>
          )}
          {githubUrl && (
            <Button size="small" onClick={() => handleButtonClick(githubUrl)}>
              <Icon src="/icons/icon_github_white.svg" />
              github-code
            </Button>
          )}
          {projectUrl && (
            <Button
              size="small"
              color="primary"
              onClick={() => handleButtonClick(projectUrl)}
            >
              view-project <Icon src="/icons/icon_link.svg" />
            </Button>
          )}
        </ButtonContainer>
      </ContentDiv>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  max-width: 800px;
  padding: 15px;
  border-radius: 15px;
  border: solid 1px ${colors.line};
  background-color: ${colors.main3};
  gap: 10px;

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

const ImageDiv = styled.div`
  width: 250px;
  height: 200px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

const ContentDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

export default Card;
