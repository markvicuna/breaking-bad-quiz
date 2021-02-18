import React from 'react';
import ScoreForm from './ScoreForm';
import styled from 'styled-components';

import winGif from '../images/iwon.gif';

const GameOverScreen = ({
  score,
  question,
  answer,
  answerPhoto,
  goHome,
  startQuiz,
  showLeaderboard,
  submitScore,
  name,
  handleNameChange,
  submitForm,
  cancelSubmit,
  gameWin
}) => {
  return (
    <div>
      {submitScore && (
        <ScoreForm
          name={name}
          handleNameChange={handleNameChange}
          submitForm={submitForm}
          cancelSubmit={cancelSubmit}
          score={score}
        />
      )}
      <Score>
        {gameWin ? `It's over.` : `Final score: ${score}`}
      </Score>
      <ImageContainer overlay={!gameWin}>
        <Image src={gameWin ? winGif : answerPhoto} alt={gameWin ? 'I won.' : answer}></Image>
        {!gameWin && (
          <Quote>
            <QuoteText>"{question}"</QuoteText>
            <QuoteAuthor>- {answer}</QuoteAuthor>
          </Quote>
        )}
      </ImageContainer>
      <ButtonGroup>
        <Button onClick={goHome}>Home</Button>
        <Button onClick={startQuiz}>Retry</Button>
        <Button onClick={showLeaderboard}>Leaderboard</Button>
      </ButtonGroup>
    </div>
  )
}

// Styles

const Score = styled.div`
  font-size: 24px;
  line-height: 1;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 400px;
  position: relative;
  margin: 12px 0;
  
  &:after {
    ${props => props.overlay && (`content: '';`)};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg,rgba(255,255,255,0) 33%,rgba(46,41,37,1) 100%);
}
`;

const Quote = styled.div`
  position: absolute;
  width: 100%;
  bottom: 5%;
  padding: 0 30px;
  z-index: 1;
  color: rgb(255,255,255);
`;

const QuoteText = styled.div`
  line-height: 1;
  text-align: left;
  margin-bottom: 10px;
  font-size: 20px;
`;

const QuoteAuthor = styled.div`
  font-family: 'Bangers', sans-serif;
  line-height: 1;
  letter-spacing: 1px;
  text-align: right;
  font-size: 24px;
`;

const Image = styled.img`
  width: 100%;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin: 0 2px;
  color: rgb(46,41,37);
  background-color: rgb(255,255,255);
  border: 2px solid rgb(46,41,37);

  @media (hover: hover) {
    &:hover {
      background-color: rgb(46,41,37);
      color: rgb(255,255,255);
    }
  }
`;

export default GameOverScreen;