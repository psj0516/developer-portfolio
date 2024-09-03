/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { colors } from '@/styles/colorPalette';
import Text from '../shared/Text';
import Button from '../shared/Button';

const initialCards: string[] = ['🍎', '🍎', '🍌', '🍌', '🍇', '🍇', '🍑', '🍑'];

const Game: React.FC = () => {
  const [cards, setCards] = useState<string[]>([]);
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [matchedIndexes, setMatchedIndexes] = useState<number[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (flippedIndexes.length === 2) {
      const match = cards[flippedIndexes[0]] === cards[flippedIndexes[1]];
      if (match) {
        setMatchedIndexes((prev) => [...prev, ...flippedIndexes]);
      }
      setTimeout(() => setFlippedIndexes([]), 1000);
    }
  }, [flippedIndexes, cards]);

  useEffect(() => {
    if (matchedIndexes.length === cards.length && intervalId) {
      clearInterval(intervalId);
    }
  }, [matchedIndexes, cards.length, intervalId]);

  useEffect(() => {
    if (startTime) {
      const id = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
      setIntervalId(id);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [startTime, intervalId]);

  const shuffleCards = () => {
    setCards(shuffleArray(initialCards));
    setFlippedIndexes([]);
    setMatchedIndexes([]);
    setElapsedTime(0);
    if (intervalId) {
      clearInterval(intervalId);
    }
    setStartTime(null); // Reset startTime to wait for the first click
  };

  const handleCardClick = (index: number) => {
    if (!startTime) {
      setStartTime(Date.now()); // Start timer on the first card click
    }

    if (
      flippedIndexes.length < 2 &&
      !flippedIndexes.includes(index) &&
      !matchedIndexes.includes(index)
    ) {
      setFlippedIndexes((prev) => [...prev, index]);
    }
  };

  return (
    <Container>
      <BorderedBox>
        <GameArea>
          <Grid>
            {cards.map((card, index) => (
              <Card
                key={index}
                onClick={() => handleCardClick(index)}
                flipped={
                  flippedIndexes.includes(index) ||
                  matchedIndexes.includes(index)
                }
              >
                <FrontFace
                  flipped={
                    flippedIndexes.includes(index) ||
                    matchedIndexes.includes(index)
                  }
                >
                  {card}
                </FrontFace>
                <BackFace
                  flipped={
                    flippedIndexes.includes(index) ||
                    matchedIndexes.includes(index)
                  }
                >
                  ?
                </BackFace>
              </Card>
            ))}
          </Grid>
        </GameArea>
        <Sidebar>
          <SidebarDiv>
            <Text color="subGray" typography="t4">
              &#47;&#47;&nbsp;Memory Game
            </Text>
            <br />
            <Text color="subGray" typography="t4">
              &#47;&#47;&nbsp;Flip the cards to find matching pairs.
            </Text>
            <br />
            <br />
            <Text color="subGray" typography="t4">
              &#47;&#47;&nbsp;Timer
            </Text>
            <div>
              <Text color="subPurple" typography="t4">
                const&nbsp;
              </Text>
              <Text color="accentMint" typography="t4">
                time&nbsp;
              </Text>
              <Text color="white" typography="t4">
                =&nbsp;
              </Text>
              <Text color="accentPink" typography="t4">
                {elapsedTime};
              </Text>
              {matchedIndexes.length === cards.length && (
                <Text color="subGray" typography="t4">
                  &nbsp;&#47;&#47;&nbsp;Game Completed!
                </Text>
              )}
            </div>
          </SidebarDiv>
          <RestartButton color="ghost" onClick={shuffleCards}>
            start-again
          </RestartButton>
        </Sidebar>
      </BorderedBox>
    </Container>
  );
};

export default Game;

const shuffleArray = (array: string[]): string[] => {
  return array.sort(() => Math.random() - 0.5);
};

const Container = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    display: none;
  }
`;

const BorderedBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  background: linear-gradient(135deg, ${colors.main3} 0%, ${colors.main} 100%);
`;

const GameArea = styled.div`
  display: flex;
  height: 370px;
  background-color: ${colors.main2};
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 80px);
  grid-template-rows: repeat(4, 80px);
  gap: 10px;
`;

const Card = styled.div<{ flipped: boolean }>`
  width: 80px;
  height: 80px;
  position: relative;
  perspective: 1000px;
  cursor: pointer;
`;

const FrontFace = styled.div<{ flipped: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${colors.main};
  position: absolute;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  backface-visibility: hidden;
  transform: ${({ flipped }) =>
    flipped ? 'rotateY(0deg)' : 'rotateY(180deg)'};
  transition: transform 0.6s;
`;

const BackFace = styled.div<{ flipped: boolean }>`
  width: 100%;
  height: 100%;
  border: 1px solid ${colors.main};
  background-color: ${colors.main};
  position: absolute;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 500;
  backface-visibility: hidden;
  color: ${colors.subMint};
  transform: ${({ flipped }) =>
    flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  transition: transform 0.6s;
`;

const Sidebar = styled.div`
  margin-left: 18px;
  display: flex;
  height: 370px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const SidebarDiv = styled.div`
  line-height: 1rem;
  background-color: ${colors.main2};
  border-radius: 10px;
  padding: 10px;
`;

const RestartButton = styled(Button)`
  align-self: flex-end;
`;
