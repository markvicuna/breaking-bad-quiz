import React from 'react';
import styled, { keyframes } from 'styled-components';
import homeImage from '../images/heisenberg.png';

const HomeScreen = ({
  startQuiz,
  showLeaderboard
}) => {
  return (
    <div>
      <Image src={homeImage} alt='heisenberg'></Image>
      <ButtonGroup>
        <Button onClick={startQuiz}>Start</Button>
        <Button onClick={showLeaderboard}>Leaderboard</Button>
      </ButtonGroup>
    </div>
  )
}

// Styles

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin: 0 2px;
  @media (hover: hover) {
    &:hover {
      background-color: rgb(255,255,255);
      color: rgb(46,41,37);
      box-shadow:0px 0px 0px 2px rgb(46,41,37) inset;
    }
  }
`;

const spin = keyframes`
  from {
    transform:rotateY(0deg);
  }
  to {
    transform:rotateY(360deg);
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;

  /* -webkit-animation: image-spin 5000ms infinite;
  -moz-animation: ${spin} 5000ms infinite;
  -o-animation: ${spin} 5000ms infinite;
  animation: ${spin} 5000ms infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  -o-animation-timing-function: linear;
  animation-timing-function: linear;  */
`;

export default React.memo(HomeScreen);