const mongoose = require("mongoose");

const groupSchema = {
  name: String,
  stage: String,
  minutes: Number,
  field: [
    new mongoose.Schema({
      name: String,
      location: String,
      games: [
        new mongoose.Schema({
          time: String,
          location: String,
          mapLocation: String,
          Group: String,
          TeamA: { uuid: String, score: Number },
          TeamB: { uuid: String, score: Number },
        }),
      ],
    }),
  ],
};

const GroupStage = mongoose.model("GroupStage", groupSchema);

module.exports = GroupStage;
