const mongoose = require("mongoose");

const teamSchema = {
  uuid: String,
  abbreviation: String,
  name: String,
  location: String,
  logo: String,
  website: String,
  facebook: String,
  instagram: String,
  rosters: [
    new mongoose.Schema({
      name: String,
      position: String,
      image: String,
      totalGoal: Number,
      totalAssist: Number,
      totalRedCard: Number,
      totalyellowCard: Number,
    }),
  ],
  game: {
    matchPlayed: Number,
    win: Number,
    draw: Number,
    lost: Number,
    redCard: Number,
    yellowCard: Number,
    pts: Number,
  },
};

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
