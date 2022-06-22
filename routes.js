const express = require("express");
const Team = require("./models/teamModel");
const GroupStage = require("./models/groupStageModal");
const router = express.Router();

router.route("/create").post((req, res) => {
  // Validate request
  /*   if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  } */

  //Get dat from body
  const newTeam = new Team({ ...req.body });

  newTeam
    .save()
    .then((data) => {
      res.send({ sucess: true, data: data });
    })
    .catch((err) => {
      res.status(500).send({
        sucess: false,
        message: err.message || "Some error occurred while creating the team.",
      });
    });
});

router.route("/teams").get((req, res) => {
  Team.find()
    .then((teams) => {
      res.send({ sucess: true, data: teams });
    })
    .catch((err) => {
      res.status(500).send({
        sucess: false,
        message: err.message || "Some error occurred while retrieving teams.",
      });
    });
});

router.route("/team/:teamID").get((req, res) => {
  Team.findById(req.params.teamID)
    .then((team) => {
      if (!team) {
        return res.status(404).send({
          sucess: false,
          message: "Note not found with id " + req.params.noteId,
        });
      }
      res.send({ sucess: true, data: team });
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          sucess: false,
          message: "Note not found with id " + req.params.noteId,
        });
      }
      return res.status(500).send({
        sucess: false,
        message: "Error retrieving note with id " + req.params.noteId,
      });
    });
});

router.route("/team/:teamID").put((req, res) => {
  Team.updateOne(
    { id: req.params.teamID },
    {
      ...req.params.body,
    },
    function (err, team) {
      if (err) {
        return res.status(500).send({
          sucess: false,
          message: "Error retrieving note with id " + req.params.noteId,
        });
      }

      res.send({ sucess: true, data: team });
    }
  );
});

router.route("/create/Groupstage").post((req, res) => {
  // Validate request
  /*   if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  } */
  const newGroupStage = new GroupStage({ ...req.body });

  newGroupStage
    .save()
    .then((data) => {
      res.send({ sucess: true, data: data });
    })
    .catch((err) => {
      res.status(500).send({
        sucess: false,
        message:
          err.message || "Some error occurred while creating the group stage.",
      });
    });
});

router.route("/groupStage").get((req, res) => {
  GroupStage.find()
    .then((groups) => {
      res.send({ sucess: true, data: groups });
    })
    .catch((err) => {
      res.status(500).send({
        sucess: false,
        message: err.message || "Some error occurred while retrieving teams.",
      });
    });
});

router.route("/").get((req, res) => {
  res.json({ name: "Test", data: "data" });
});

module.exports = router;
