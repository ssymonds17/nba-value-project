const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const Models = require('./models.js');
const Players = Models.Player;

app.use(bodyParser.json());

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

// FOR LOCAL USE, DELETE BEFORE PRODUCTION
mongoose.connect('mongodb+srv://ssymonds17:klrGPn2TwoQKpxi5@cluster0.bwlxj.mongodb.net/nbadata?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// GET player data by player ID
app.get('/players/:playerID', cors(corsOptions), (req, res) => {
  Players.find({ player_id: req.params.playerID })
    .sort({ year: 1 })
    .then((player) => {
      res.status(200).json(player);
    })
    .catch((e) => {
      console.error(e);
      res.status(500).send('Error ' + e);
    });
});

app.use(express.static('frontend/build'));
app.get('/*', cors(corsOptions), function (req, res) {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, '0.0.0.0', () => {
  console.log('Listening on Port ' + port);
});

// ORIGINAL CORS POLICY
// (WIP) setting sites that have access 
// let allowedOrigins = '*';
// // ['https://nba-value-reference.herokuapp.com/', 'http://localhost:3000/', 'http://localhost:1234'];
// app.use(cors({
//   origin: (origin, callback) => {
//     if (!origin) return callback(null, true);
//     if (allowedOrigins.indexOf(origin) === -1) { // If a specific origin isn't found on the list of allowed origins
//       let message = 'The CORS policy for this application doesn\'t allow access from origin ' + origin;
//       return callback(new Error(message), false);
//     }
//     return callback(null, true);
//   }
// }));

// ENVIRONMENTAL VARIABLE HOSTED IN HEROKU
// Connection with MongoDB. CONNECTION_URI variable established in Heroku to protect database security
// mongoose.connect(process.env.CONNECTION_URI, {
//  useNewUrlParser: true,
//  useUnifiedTopology: true
// });
