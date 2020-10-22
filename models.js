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
 franchise_code_team_one: { type: String, required: true },
 team_two: String,
 franchise_code_team_two: String,
 team_three: String,
 franchise_code_team_three: String,
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
 franchise_code: { type: String, required: true },
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

// define the player list schema with the existing fields and data types
let playerListSchema = mongoose.Schema({
 _id: String,
 player_id: String,
 name: { type: String, required: true },
 first_name: { type: String, required: true },
 last_name: { type: String, required: true },
 first_year: Number,
 last_year: Number
}, { collection: 'player_list' });

// Schema for regular season data
let regularSeasonSchema = mongoose.Schema({
 _id: String,
 year: { type: Number, required: true },
 league: String,
 player_id: { type: String, required: true },
 name: { type: String, required: true },
 score: { type: Number, required: true },
 position: String,
 age: Number,
 team_abbreviation: { type: String, required: true },
 franchise_code: String,
 win_shares: Number,
 win_shares_48: Number,
 vorp: Number,
 bpm: Number,
 games: Number,
 mpg: Number,
 team_full_name: { type: String, required: true },
 team_record: { type: String, required: true },
 team_result: { type: String, required: true }
},
 { collection: 'regular_season' });

// Schema for playoff data
let playoffSchema = mongoose.Schema({
 _id: String,
 year: { type: Number, required: true },
 league: String,
 player_id: { type: String, required: true },
 name: { type: String, required: true },
 score: { type: Number, required: true },
 position: String,
 age: Number,
 team_abbreviation: { type: String, required: true },
 franchise_code: { type: String, required: true },
 win_shares: Number,
 win_shares_48: Number,
 vorp: Number,
 bpm: Number,
 games: Number,
 mpg: Number,
 team_full_name: { type: String, required: true },
 team_record: { type: String, required: true },
 team_result: { type: String, required: true }
},
 { collection: 'playoffs' });

let allTimePlayerSchema = mongoose.Schema({
 _id: String,
 rank: Number,
 name: String,
 player_id: String,
 career_value: Number,
 career_total: Number,
 peak_avg: Number,
 year_from: Number,
 year_to: Number,
 active: String
}, { collection: 'all_time_player' });

let allTimeTeamSchema = mongoose.Schema({
 _id: String,
 rank: Number,
 team: String,
 team_abbreviation: String,
 franchise_code: String,
 year: Number,
 overall: Number,
 regular_season: Number,
 playoffs: Number,
 record: String,
 result: String
}, { collection: 'all_time_team' });

let franchiseListSchema = mongoose.Schema({
 _id: String,
 team_abbreviation: String,
 team_name: String,
 franchise: String,
 franchise_code: String,
 first_year: Number,
 last_year: Number
}, { collection: 'franchise_index' });

let franchiseSeasonSchema = mongoose.Schema({
 _id: String,
 year: Number,
 league: String,
 team_full_name: String,
 abbreviation: String,
 franchise_code: String,
 team_record: String,
 team_result: String
}, { collection: 'franchise_history_index' });

let Player = mongoose.model('Player', playerSchema);
let Team = mongoose.model('Team', teamSchema);
let PlayerList = mongoose.model('PlayerList', playerListSchema);
let RegularSeason = mongoose.model('RegularSeason', regularSeasonSchema);
let Playoff = mongoose.model('Playoff', playoffSchema);
let AllTimePlayer = mongoose.model('AllTimePlayer', allTimePlayerSchema);
let AllTimeTeam = mongoose.model('AllTimeTeam', allTimeTeamSchema);
let FranchiseList = mongoose.model('FranchiseList', franchiseListSchema);
let FranchiseSeason = mongoose.model('FranchiseSeason', franchiseSeasonSchema);

module.exports.Player = Player;
module.exports.Team = Team;
module.exports.PlayerList = PlayerList;
module.exports.RegularSeason = RegularSeason;
module.exports.Playoff = Playoff;
module.exports.AllTimePlayer = AllTimePlayer;
module.exports.AllTimeTeam = AllTimeTeam;
module.exports.FranchiseList = FranchiseList;
module.exports.FranchiseSeason = FranchiseSeason;