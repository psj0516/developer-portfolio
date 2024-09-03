import styled from '@emotion/styled';
import Text from '../shared/Text';
import { colors } from '@/styles/colorPalette';
import { lazy, Suspense } from 'react';

const SkillCanvas = lazy(() => import('../shared/SkillCanvas'));

const Skills = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>
          <Text color="subGray" typography="t5">
            skills.tsx
          </Text>
          <Text color="subGray" typography="t5">
            X
          </Text>
        </HeaderTitle>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <SkillCanvas />
      </Suspense>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1px solid ${colors.line};
  background-color: ${colors.main3};
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
