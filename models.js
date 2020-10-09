const mongoose = require('mongoose');

// define the player schema with the existing fields and data types
let playerSchema = mongoose.Schema({
 _id: String,
 year: { type: Number, required: true },
 league: String,
 player_id: { type: String, required: true },
 name: { type: String, required: true },
 total_season_value: { type: Number, required: true },
 position: String,
 age: Number,
 team_one: { type: String, required: true },
 team_two: String,
 team_three: String,
 regularseason__score: { type: Number, required: true },
 regularseason__win_shares: Number,
 regularseason__win_shares_48: Number,
 regularseason__vorp: Number,
 regularseason__bpm: Number,
 regularseason__games: Number,
 regularseason__mpg: Number,
 playoff__score: Number,
 playoff__win_shares: Number,
 playoff__win_shares_48: Number,
 playoff__vorp: Number,
 playoff__bpm: Number,
 playoff__games: Number,
 playoff__mpg: Number,
 team_full_name: { type: String, required: true },
 team_record: { type: String, required: true },
 team_result: { type: String, required: true }
});

// define the team schema with the existing fields and data types
let teamSchema = mongoose.Schema({
 _id: String,
 year: { type: Number, required: true },
 league: String,
 player_id: { type: String, required: true },
 name: { type: String, required: true },
 position: String,
 age: Number,
 team_abbreviation: { type: String, required: true },
 regularSeason__score: Number,
 regularSeason__win_shares: Number,
 regularSeason__win_shares_48: Number,
 regularSeason__vorp: Number,
 regularSeason__bpm: Number,
 regularSeason__games: Number,
 regularSeason__mpg: Number,
 playoff__score: Number,
 playoff__win_shares: Number,
 playoff__win_shares_48: Number,
 playoff__vorp: Number,
 playoff__bpm: Number,
 playoff__games: Number,
 playoff__mpg: Number,
 team_full_name: { type: String, required: true },
 team_record: { type: String, required: true },
 team_result: { type: String, required: true }
});

let Player = mongoose.model('Player', playerSchema);
let Team = mongoose.model('Team', teamSchema);

module.exports.Player = Player;
module.exports.Team = Team;