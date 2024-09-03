import styled from '@emotion/styled';
import Text from '../shared/Text';
import { css } from '@emotion/react';
import { colors } from '@/styles/colorPalette';

import Paragraph from '../shared/Paragraph';
import CompanyInfo from '../shared/CampanyInfo';
import CareerInfo from '../shared/CareerInfo';

const Career = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>
          <Text color="subGray" typography="t5">
            career.tsx
          </Text>
          <Text color="subGray" typography="t5">
            X
          </Text>
        </HeaderTitle>
      </Header>
      <InfoContainer>
        <CompanyInfo name="Company Name" period="2020.08 - 2024.08">
          <Text color="accentMint" lang="kr" bold={true}>
            Job Title
          </Text>
          <CareerInfo period="2023.12 - 2024.08" title="Project Name">
            <Paragraph color="white">
              - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />- Pellentesque magna orci, porta nec scelerisque quis,
              interdum rhoncus ante.
              <br />- Sed dignissim augue eget neque scelerisque, eu maximus
              diam lacinia.
            </Paragraph>
          </CareerInfo>
          <CareerInfo period="2020.08 - 2023.11" title="Project Name">
            <Paragraph color="white">
              - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />- Pellentesque magna orci, porta nec scelerisque quis,
              interdum rhoncus ante.
              <br />- Sed dignissim augue eget neque scelerisque, eu maximus
              diam lacinia.
            </Paragraph>
          </CareerInfo>
        </CompanyInfo>
        <CompanyInfo name="Company Name" period="2018.07 - 2020.07">
          <Text color="accentMint" lang="kr" bold={true}>
            Job Title
          </Text>
          <CareerInfo period="2020.01 - 2020.07" title="Project Name">
            <Paragraph color="white">
              - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />- Pellentesque magna orci, porta nec scelerisque quis,
              interdum rhoncus ante.
              <br />- Sed dignissim augue eget neque scelerisque, eu maximus
              diam lacinia.
            </Paragraph>
          </CareerInfo>
          <CareerInfo period="2018.07 - 2020.01" title="Project Name">
            <Paragraph color="white">
              - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />- Pellentesque magna orci, porta nec scelerisque quis,
              interdum rhoncus ante.
              <br />- Sed dignissim augue eget neque scelerisque, eu maximus
              diam lacinia.
            </Paragraph>
          </CareerInfo>
        </CompanyInfo>
        <CompanyInfo name="Company Name" period="2018.01 - 2018.06">
          <Text color="accentMint" lang="kr" bold={true}>
            Job Title
          </Text>
          <CareerInfo period="2018.01 - 2018.06" title="Project Name">
            <Paragraph color="white">
              - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />- Pellentesque magna orci, porta nec scelerisque quis,
              interdum rhoncus ante.
              <br />- Sed dignissim augue eget neque scelerisque, eu maximus
              diam lacinia.
            </Paragraph>
          </CareerInfo>
          <CareerInfo period="2018.01 - 2018.01" title="Project Name">
            <Paragraph color="white">
              - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />- Pellentesque magna orci, porta nec scelerisque quis,
              interdum rhoncus ante.
              <br />- Sed dignissim augue eget neque scelerisque, eu maximus
              diam lacinia.
            </Paragraph>
          </CareerInfo>
        </CompanyInfo>
      </InfoContainer>
    </Container>
  );
};

export default Career;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1px solid ${colors.line};
  background-color: ${colors.main};
`;

const InfoContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    padding: 20px;
  }
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
