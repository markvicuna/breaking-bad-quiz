import React, { useState, useEffect } from 'react';
//Functions
import { fetchQuizQuestions } from './API';
// Components
import QuestionCard from './components/QuestionCard';
import GameOverScreen from './components/GameOverScreen';
import Leaderboard from './components/Leaderboard';
import HomeScreen from './components/HomeScreen';
import Info from './components/Info';
// Services
import scoresService from './services/scores';
// Styles
import styled, { keyframes } from 'styled-components';
import GlobalStyle from './globalStyles';
// Images
import loader from './images/heisenberg.png';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [scores, setScores] = useState([]);
  const [home, setHome] = useState(true);
  const [gameActive, setGameActive] = useState(false);
  const [leaderboardActive, setLeaderBoardActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameWin, setGameWin] = useState(false);

  const [submitScore, setSubmitScore] = useState(false);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    scoresService
      .getAll()
      .then(scores => {
        scores.sort((a, b) => b.score - a.score);
        setScores(scores)
      })
  }, [submitScore, leaderboardActive])

  const showLeaderboard = () => {
    setLeaderBoardActive(true);
  }

  const hideLeaderboard = () => {
    setLeaderBoardActive(false);
  }

  const goHome = () => {
    setHome(true);
    setLeaderBoardActive(false);
    setGameOver(false);
    setGameWin(false);
    setGameActive(false);
    setSubmitScore(false);
  }

  const startQuiz = async () => {
    setGameOver(false);
    setGameWin(false);
    setLeaderBoardActive(false);
    setHome(false);
    setSubmitScore(false);
    setLoading(true);

    const newQuestions = await fetchQuizQuestions()

    setQuestions(newQuestions);
    setScore(0);
    setNumber(0);
    setNewName('');
    setLoading(false);
    setGameActive(true);
  }

  const checkAnswer = (e) => {
    if (gameActive) {
      // Get user answer
      const answer = e.currentTarget.value;
      // Check against correct answer
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if (correct) {
        setScore(prev => prev + 1);

        const nextQuestion = number + 1;
        if (nextQuestion === questions.length) {
          setGameActive(false);
          setGameOver(true)
          setGameWin(true);
          if (checkHighScore()) {
            setTimeout(() => setSubmitScore(true), 500);
          }
        } else {
          setNumber(nextQuestion);
        }

      } else {
        setGameActive(false);
        setGameOver(true);
        if (checkHighScore()) {
          setTimeout(() => setSubmitScore(true), 500);
          // setLeaderboardActive(true) for leaderboard to pop up once score is submitted
        }
      }
    }
  }

  const checkHighScore = () => {
    const scoresToShow = 10;

    if (scores.length < scoresToShow) {
      return true;
    }

    if (score > scores[scoresToShow - 1].score) {
      return true;
    } else {
      return false;
    }
  }

  const addScore = (e) => {
    e.preventDefault()
    const newScore = { name: newName, score: score }

    scoresService
      .create(newScore)
      .then(returnedScore => {
        setScores(scores.concat(returnedScore))
      })
      .then(setSubmitScore(false))
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }

  const cancelSubmit = () => {
    setNewName('');
    setSubmitScore(false);
  }

  return (
    <Container>

      <GlobalStyle />

      <Header>
        <Title>WHO SAID THAT?!</Title>
        <Subtitle>Breaking Bad Edition</Subtitle>
      </Header>

      <Main>
        {home && !gameActive && (
          <HomeScreen
            startQuiz={startQuiz}
            showLeaderboard={showLeaderboard}
          />
        )}

        {loading && (<Loader src={loader}></Loader>)}

        {!loading && gameActive && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={questions.length}
            question={questions[number].question}
            answers={questions[number].answers}
            callback={checkAnswer}
            score={score}
          />
        )}
        {gameOver && (
          <GameOverScreen
            score={score}
            question={questions[number].question}
            answer={questions[number].correct_answer}
            answerPhoto={questions[number].answer_photo}
            goHome={goHome}
            startQuiz={startQuiz}
            showLeaderboard={showLeaderboard}
            submitScore={submitScore}
            name={newName}
            handleNameChange={handleNameChange}
            submitForm={addScore}
            cancelSubmit={cancelSubmit}
            gameWin={gameWin}
          />
        )}

        {leaderboardActive && !gameActive && (
          <Leaderboard
            scores={scores}
            hideLeaderboard={hideLeaderboard}
          />
        )}

      </Main>

      <Footer>
        <Info />
      </Footer>

    </Container>
  );
}

// Styles

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: rgb(46, 41, 37);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
`;

const Header = styled.header`
  margin-bottom: 20px;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 42px;
  line-height: 1;
  font-family: 'Bangers', sans-serif;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  line-height: 1;
  letter-spacing: 4px;
`;

const spin = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`;

const Loader = styled.img`
  height: 200px;

  -webkit-animation: ${spin} 1000ms infinite;
  -moz-animation: ${spin} 1000ms infinite;
  -o-animation: ${spin} 1000ms infinite;
  animation: ${spin} 1000ms infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  -o-animation-timing-function: linear;
  animation-timing-function: linear; 
`;

const Footer = styled.footer`
  margin-top: 30px;
`;

export default App;
