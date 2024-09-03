import styled from '@emotion/styled';
import Text from '../shared/Text';

interface CareerInfoProps {
  title: string;
  period: string;
  children: React.ReactNode;
}

const CareerInfo = ({ title, period, children }: CareerInfoProps) => {
  return (
    <InfoDiv>
      <InfoTable>
        <DateSection>
          <Text color="subGray" typography="t6">
            {period}
          </Text>
        </DateSection>
        <InfoSection>
          <Text color="accentPink" lang="kr" bold={true}>
            {title}
          </Text>
          {children}
        </InfoSection>
      </InfoTable>
    </InfoDiv>
  );
};

export default CareerInfo;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const InfoTable = styled.div`
  display: flex;
`;

const DateSection = styled.div`
  min-width: 125px;
  margin-right: 15px;
  line-height: 12px;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;
