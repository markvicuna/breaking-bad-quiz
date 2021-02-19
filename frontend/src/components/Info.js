import React from 'react';
import styled from 'styled-components';

const Info = () => {
  return (
    <div>
      <IconGroup>
        <a href="https://github.com/markvicuna/" target="_blank" rel="noopener noreferrer">
          <Icon className="fab fa-github"></Icon>
        </a>
        <a href="https://www.instagram.com/modernratio/" target="_blank" rel="noopener noreferrer">
          <Icon className="fab fa-instagram"></Icon>
        </a>
        <a href="https://open.spotify.com/track/6gaPfdDfLQucC6nAzD65BC" target="_blank" rel="noopener noreferrer">
          <Icon className="fab fa-spotify"></Icon>
        </a>
      </IconGroup>
      <Credit>Created by Mark Vicuña</Credit>
      <Note>Using the <Underline href="https://breakingbadapi.com/">Breaking Bad API</Underline></Note>
    </div>
  )
}

// Styles

const IconGroup = styled.div`
  margin-bottom: 10px;
`;

const Icon = styled.i`
  font-size: 34px;
  margin: 0 10px;
`;

const Credit = styled.div`
  font-family: 'Bangers', sans-serif;
  font-size: 24px;
  margin-bottom: 2px;
`;

const Note = styled.div`
  line-height: 1;
  font-size: 17px;
  letter-spacing: 1px;
  margin-bottom: 2px;
`;

const Underline = styled.a`
  text-decoration: underline;
  font-family: inherit;
`;

export default Info;