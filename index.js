const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Models = require('./models.js');
const Players = Models.Player;

app.use(bodyparser.json());

// (WIP) setting sites that have access 
let allowedOrigins = '*';
app.use(cors({
 origin: (origin, callback) => {
  if (!origin) return callback(null, true);
  if (allowedOrigins.indexOf(origin) === -1) { // If a specific origin isn't found on the list of allowed origins
   let message = 'The CORS policy for this application doesn\'t allow access from origin ' + origin;
   return callback(new Error(message), false);
  }
  return callback(null, true);
 }
}));

// (WIP) Need to update Connection URI with Heroku
mongoose.connect(process.env.CONNECTION_URI, {
 useNewUrlParser: true,
 useUnifiedTopology: true
});

app.get('/', (req, res) => {
 res.status(200).send('App running');
})
 .catch((e) => {
  console.error(e);
  res.status(500).send('Error ' + e);
 });

// (WIP) example of player search
app.get('/players/:playerID', (req, res) => {
 Players.find({ player_id: req.params.playerID })
  .then((player) => {
   res.status(200).json(player);
  })
  .catch((e) => {
   console.error(e);
   res.status(500).send('Error ' + e);
  });
});

const port = process.env.PORT || 8080;
app.listen(port, '0.0.0.0', () => {
 console.log('Listening on Port ' + port);
});