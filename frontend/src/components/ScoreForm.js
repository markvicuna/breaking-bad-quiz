import React from 'react';
import styled, { keyframes } from 'styled-components';
import highScore from '../images/highscore.gif';

const ScoreForm = ({
  name,
  score,
  submitForm,
  handleNameChange,
  cancelSubmit
}) => {
  return (
    <div>
      <Modal>
        <Form onSubmit={submitForm}>
        <Close onClick={cancelSubmit} className="fas fa-times-circle" />
          <Title>New high score:</Title>
          <Subtitle>{score} point{score !== 1 && `s`}!</Subtitle>
          <Gif src={highScore}></Gif>
          <Subtitle>Enter your intials:</Subtitle>
          <Input value={name} maxLength="3" onChange={handleNameChange} />
          <ButtonGroup>
            <Button type="submit">Submit</Button>
          </ButtonGroup>
        </Form>
      </Modal>
    </div>
  )
}

// Styles

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Modal = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  left: 0;
  top: 17%;
  padding: 0 20px;
  &:before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.4);
    z-index: -1;
    animation: ${fadeIn} 200ms;
  }
`;

const Form = styled.form`
  background-color: rgb(255,255,255);
  width: 100%;
  position: relative;
  max-width: 350px;
  margin: 0 auto;
  border-radius: 10px;
  padding: 10px;
  animation: ${fadeIn} 1000ms;
  box-shadow: 2px 5px 16px 0px #2e2925, 5px 5px 15px 5px rgb(0 0 0 / 0%);
  -webkit-box-shadow: 2px 5px 16px 0px #2e2925, 5px 5px 15px 5px rgb(0 0 0 / 0%)
`;

const Input = styled.input`
  width: 70px;
  font-size: 30px;
  color: rgb(46,41,37);
  text-align: center;
  border-bottom: 3px solid rgb(46,41,37);
  margin-top: 4px;
  border-radius: 0px;
`;

const Close = styled.button`
  border: none;
  background: none;
  padding: 0px;
  font-size: 26px;
  float: right;
  color: rgb(46,41,37);
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ButtonGroup = styled.div`
  margin-top: 15px;
`;

const Button = styled.button`
  background-color: rgb(46,41,37);
  color: rgb(255,255,255);
  width: 100%;
  @media (hover: hover) {
    &:hover {
      background-color: rgb(255,255,255);
      color: rgb(46,41,37);
      box-shadow:0px 0px 0px 2px rgb(46,41,37) inset;
    }
  }
`;

const Gif = styled.img`
  width: 100%;
  margin: 10px 0;
  border-radius: 5px;
`;

const Title = styled.div`
  font-family: 'Bangers', sans-serif;
  font-size: 28px;
  margin-top: 16px;
`;

const Subtitle = styled.div`
  font-size: 20px;
`;

export default ScoreForm;