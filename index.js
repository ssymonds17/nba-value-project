const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const Models = require('./models.js');
const Players = Models.Player;
const Teams = Models.Team;
const PlayerLists = Models.PlayerList;
const RegularSeasons = Models.RegularSeason;
const Playoffs = Models.Playoff;
const AllTimePlayers = Models.AllTimePlayer;

app.use(bodyParser.json());
app.use(cors());

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
app.get('/players/:playerID',
  cors(corsOptions),
  (req, res) => {
    let yearSort = { year: 1 };
    Players.find({ player_id: req.params.playerID })
      .sort(yearSort)
      .then((player) => {
        res.status(200).json(player);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error ' + e);
      });
  });

// GET team data by team abbreviation and year
app.get('/teams/:teamAbb/:year',
  cors(corsOptions),
  (req, res) => {
    let nameSort = { name: 1 };
    Teams.find({
      team_abbreviation: req.params.teamAbb,
      year: req.params.year
    })
      .sort(nameSort)
      .then((team) => {
        res.status(200).json(team);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error ' + e);
      });
  });

// {WIP} GET player list by letter 
app.get('/players/:char',
  cors(corsOptions),
  (req, res) => {
    let char = req.params.char;
    PlayerLists.find({ last_name: { $regex: '/^' + char + '/' } })
      .then((players) => {
        res.status(200).json(players);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error ' + e);
      });
  });

// GET regular season data by year and league
app.get('/regularSeasons/:league/:year',
  cors(corsOptions),
  (req, res) => {
    let scoreSort = { score: -1 };
    RegularSeasons.find({
      league: req.params.league,
      year: req.params.year
    })
      .sort(scoreSort)
      .then((regularseason) => {
        res.status(200).json(regularseason);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error ' + e);
      });
  });

// GET playoff data by league and year
app.get('/playoffs/:league/:year',
  cors(corsOptions),
  (req, res) => {
    let scoreSort = { score: -1 };
    Playoffs.find({
      league: req.params.league,
      year: req.params.year
    })
      .sort(scoreSort)
      .then((playoff) => {
        res.status(200).json(playoff);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error ' + e);
      });
  });

// GET total season data (RS + PO) by league and year
app.get('/seasons/:league/:year',
  cors(corsOptions),
  (req, res) => {
    let scoreSort = { total_season_value: -1 };
    Players.find({
      league: req.params.league,
      year: req.params.year
    })
      .sort(scoreSort)
      .then((season) => {
        res.status(200).json(season);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error ' + e);
      });
  });

// GET greatest all time player list
app.get('/playerranking',
  cors(corsOptions),
  (req, res) => {
    let rankSort = { rank: 1 };
    AllTimePlayers.find()
      .sort(rankSort)
      .then((ranking) => {
        res.status(200).json(ranking);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error ' + e);
      });
  });

// GET greatest all time team list
// GET greatest all time seasons list


app.use(express.static('frontend/build'));
app.get('/*',
  cors(corsOptions),
  function (req, res) {
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
