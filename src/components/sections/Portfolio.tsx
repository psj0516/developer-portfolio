import styled from '@emotion/styled';
import Text from '../shared/Text';
import { css } from '@emotion/react';
import { colors } from '@/styles/colorPalette';
import Card from '../shared/Card';

const Portfolio = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>
          <Text color="subGray" typography="t5">
            portfolio.tsx
          </Text>
          <Text color="subGray" typography="t5">
            X
          </Text>
        </HeaderTitle>
      </Header>
      <CardContainer>
        <TextContainer>
          <Text color="subGray" typography="t4">
            &#47;&#47;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </Text>
          <Text color="subGray" typography="t4">
            &#47;&#47;&nbsp;Nullam non tincidunt augue.
          </Text>
          <Text color="subGray" typography="t4">
            &#47;&#47;&nbsp;Sed eu eros pharetra, tristique diam et,
            sollicitudin elit.
          </Text>
        </TextContainer>
        <Card
          title="project name"
          subText="personal project"
          date="2024.04"
          imgUrl={'/images/test-image1.jpg'}
          skill="HTML, CSS, Javascript"
          githubUrl="https://github.com/"
          projectUrl="https://www.google.com/"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet
          euismod velit. Aliquam ultricies vulputate venenatis. Vivamus vitae
          magna erat. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Pellentesque porttitor scelerisque
          sodales. Aenean tincidunt lectus ac varius facilisis.
        </Card>
        <Card
          title="project name"
          subText="team project"
          date="2022.01"
          imgUrl={'/images/test-image2.jpg'}
          skill="React.js"
          githubUrl="https://github.com/"
          projectUrl="https://www.google.com/"
          noteUrl="https://www.notion.so/"
        >
          Mauris nunc nisi, suscipit ut nibh ut, fermentum vehicula elit.
          Aliquam semper pharetra justo. Proin aliquet tellus gravida sagittis
          venenatis. Vestibulum eu euismod justo. Duis vel urna vitae lorem
          commodo fringilla. Mauris vehicula, diam nec luctus aliquet, ligula
          elit pulvinar felis, id mattis ligula augue fermentum urna.
        </Card>
      </CardContainer>
    </Container>
  );
};

export default Portfolio;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1px solid ${colors.line};
  background-color: ${colors.main2};
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

const closeButtonStyle = css`
  display: flex;
  align-items: center;
`;

const CardContainer = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
