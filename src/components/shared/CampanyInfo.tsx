import styled from '@emotion/styled';
import Text from '../shared/Text';
import { colors } from '../../styles/colorPalette';

interface CompanyInfoProps {
  name: string;
  period: string;
  children: React.ReactNode;
}

const CompanyInfo = ({ name, period, children }: CompanyInfoProps) => {
  return (
    <Container>
      <Title>
        <Text color="subPurple" typography="t4" lang="kr" bold={true}>
          {name}
        </Text>
        <Text color="subGray" typography="t6">
          {period}
        </Text>
      </Title>
      <SnippetBox>{children}</SnippetBox>
    </Container>
  );
};

export default CompanyInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
`;

const SnippetBox = styled.div`
  padding: 20px;
  border-radius: 15px;
  background-color: ${colors.main3};
  border: 1px solid ${colors.line};
  min-width: 600px;
  display: flex;
  flex-direction: column;
  margin: 10px 0px 40px;

  @media (max-width: 480px) {
    min-width: 0px;
    width: 100%;
    padding: 10px;
  }
`;
