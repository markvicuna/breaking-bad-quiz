require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const Score = require('./models/score');

const app = express();

app.use(express.static('build'))
app.use(cors());
app.use(express.json());

morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

// Get all the scores

app.get('/api/scores', (request, response) => {
  Score.find({})
    .then(scores => {
      if (scores) {
        response.json(scores);
      } else {
        response.status(404).end(); 
      }
    })
    .catch(error => {
      console.log(error)
    })
})

// Post a score

app.post('/api/scores', (request, response) => {
  const body = request.body;

  if (body.name === undefined || body.score === undefined || body.name === '') { //removed !body.score because score 0 was causing it to fail
    return response.status(400).json({
      error: 'name or score missing'
    })
  }

  const score = new Score({
    name: body.name,
    score: body.score,
    date: new Date(),
  })

  score.save().then(savedScore => {
    response.json(savedScore);
  })
})



const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})