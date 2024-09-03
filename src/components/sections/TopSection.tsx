import styled from '@emotion/styled';
import Info from './Info';
import Game from './Game';

const TopSection = () => {
  return (
    <Container>
      <Info />
      <Game />
    </Container>
  );
};

export default TopSection;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 700px;
  display: flex;
  padding: 60px 0px;
`;
