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
const AllTimeTeams = Models.AllTimeTeam;
const FranchiseLists = Models.FranchiseList;
const FranchiseHistoryLists = Models.FranchiseHistoryList;

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

// PATHS ------------------------------------------------------------

// GET entire player list
app.get('/players',
  cors(corsOptions),
  (req, res) => {
    let lastNameSort = { last_name: 1 };
    PlayerLists.find()
      .sort(lastNameSort)
      .then((players) => {
        res.status(200).json(players);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error ' + e);
      });
  });

// GET player list by letter 
app.get('/playerlist/:char',
  cors(corsOptions),
  (req, res) => {
    let char = req.params.char;
    PlayerLists.find({ last_name: { $regex: '^' + char + '.*', $options: 'i' } })
      .then((players) => {
        res.status(200).json(players);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error ' + e);
      });
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

// GET list of franchises seasons by franchise code
app.get('/teams/:franchiseCode',
  cors(corsOptions),
  (req, res) => {
    let yearSort = { year: -1 };
    FranchiseHistoryLists.find({
      franchise_code: req.params.franchiseCode
    })
      .sort(yearSort)
      .then((franchise) => {
        res.status(200).json(franchise);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error ' + e);
      });
  });

// GET franchise code by team abbreviation
app.get('/franchise/:teamID',
  cors(corsOptions),
  (req, res) => {
    FranchiseLists.find({
      team_abbreviation: req.params.teamID
    })
      .then((franchise) => {
        res.status(200).json(franchise);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error ' + e);
      });
  });

// GET team data by team abbreviation and year
app.get('/teams/:franchiseCode/:year',
  cors(corsOptions),
  (req, res) => {
    let nameSort = { name: 1 };
    Teams.find({
      franchise_code: req.params.franchiseCode,
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

// GET regular season data by year and league
app.get('/seasons/regular/:league/:year',
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
app.get('/seasons/playoffs/:league/:year',
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
app.get('/seasons/overall/:league/:year',
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
app.get('/rankings/players',
  cors(corsOptions),
  (req, res) => {
    let rankSort = { rank: 1 };
    AllTimePlayers.find()
      .sort(rankSort)
      .limit(100)
      .then((ranking) => {
        res.status(200).json(ranking);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error ' + e);
      });
  });

// GET greatest all time team list
app.get('/rankings/teams',
  cors(corsOptions),
  (req, res) => {
    let rankSort = { rank: 1 };
    AllTimeTeams.find()
      .sort(rankSort)
      .limit(100)
      .then((ranking) => {
        res.status(200).json(ranking);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error ' + e);
      });
  });

// GET greatest all time seasons list
app.get('/rankings/seasons/overall',
  cors(corsOptions),
  (req, res) => {
    let scoreSort = { total_season_value: -1 };
    Players.find()
      .sort(scoreSort)
      .limit(100)
      .then((ranking) => {
        res.status(200).json(ranking);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error ' + e);
      });
  });

// GET greatest all time regular seasons list
app.get('/rankings/seasons/regularseason',
  cors(corsOptions),
  (req, res) => {
    let RsScoreSort = { regularseason__score: -1 };
    Players.find()
      .sort(RsScoreSort)
      .limit(100)
      .then((ranking) => {
        res.status(200).json(ranking);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error ' + e);
      });
  });

// GET greatest all time playoff season list
app.get('/rankings/seasons/playoffs',
  cors(corsOptions),
  (req, res) => {
    let playoffScoreSort = { playoff__score: -1 };
    Players.find()
      .sort(playoffScoreSort)
      .limit(100)
      .then((ranking) => {
        res.status(200).json(ranking);
      })
      .catch((e) => {
        console.error(e);
        res.status(500).send('Error ' + e);
      });
  });

// GET request to search for players in search bar
// app.get('/playersearch/:query',
//   cors(corsOptions),
//   (req, res) => {
//     // {GOOGLE ESCAPING STRING}
//     let string = req.params.query;
//     PlayerLists.find({ name: { $regex: string, $options: 'i' } })
//       .then((players) => {
//         console.log(players);
//         res.status(200).json(players);
//       })
//       .catch((e) => {
//         console.error(e);
//         res.status(500).send('Error ' + e);
//       });
//   });

// Serve static files
app.use(express.static('frontend/build'));
app.get('/*',
  cors(corsOptions),
  function (req, res) {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
  });

// Server
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
