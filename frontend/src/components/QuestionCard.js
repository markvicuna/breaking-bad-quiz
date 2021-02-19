import React from 'react';
import styled from 'styled-components';

const QuestionCard = ({
  question,
  answers,
  callback,
  score
}) => {
  return (
    <div>
      <Question>"{question}"</Question>
      <AnswerGroup>
        {answers.map(answer => {
          return (
            <Answer key={answer}>
              <Button value={answer} onClick={callback}>
                {answer}
              </Button>
            </Answer>
          )
        })}
      </AnswerGroup>
      <Score>Score: {score}</Score>
    </div>
  )
}

// Styles

const Question = styled.div`
  font-size: 22px;
  margin-bottom: 15px;
  line-height: 1;
`;

const Score = styled.div`
  font-size: 22px;
  margin-top: 15px;
`;

const AnswerGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Answer = styled.div`
  display: flex;
  flex-basis: calc(50% - 4px);
  flex-direction: column;
  height: 100px;
  margin: 2px;
`;

const Button = styled.button`
  height: 100%;
  background-color: rgb(255,255,255);
  border: 3px solid rgb(46,41,37);
  color: rgb(46,41,37);

  @media (hover: hover) {
    &:hover {
      background-color: rgb(46,41,37);
      color: rgb(255,255,255);
    }
  }
`;

export default QuestionCard;