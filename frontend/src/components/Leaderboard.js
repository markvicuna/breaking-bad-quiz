import React from 'react';
import styled, { keyframes } from 'styled-components';

const Leaderboard = ({
  scores,
  hideLeaderboard
}) => {
  const scoresToShow = 10;
  const filteredScores = scores.slice(0, scoresToShow);
  let count = 0;
  return (
    <Modal>
      <Board>
        <Close onClick={hideLeaderboard} className="fas fa-times-circle" />
        <Title>High Scores</Title>
        <Table>
          <Label>
            <tr>
              <Header>Rank</Header>
              <Header>Player</Header>
              <Header>Score</Header>
            </tr>
          </Label>
          <Body>
            {filteredScores.map(item => {
              count++;
              return (
                <TableRow key={item.id}>
                  <Data>{count}</Data>
                  <Data>{item.name}</Data>
                  <Data>{item.score}</Data>
                </TableRow>
              )
            })}
          </Body>
        </Table>
      </Board>
    </Modal>
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

const Board = styled.div`
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

const Title = styled.div`
  font-family: 'Bangers', sans-serif;
  font-size: 28px;
  margin: 10px 0;
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

const Table = styled.table`
  font-size: 20px;
  width: 100%;
  background-color: rgb(46,41,37);
  color: rgb(255,255,255);
  border-radius: 5px;
`;

const Label = styled.thead`
  font-size: 22px;
  display: table;
  width: 100%;
  table-layout: fixed;
`;

const Header = styled.th`
  padding: 5px;
`;

const Data = styled.td`
  padding: 4px;
`;

const Body = styled.tbody`
  display: block;
  max-height: 244px;
  overflow: auto;
`;


const TableRow = styled.tr`
  background-color: rgb(255,255,255);
  color: rgb(46,41,37);
  display: table;
  width: 100%;
  table-layout: fixed;

  &:nth-child(even) {
    background-color: rgb(227,227,227);
  }
`;

export default Leaderboard;