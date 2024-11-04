const mongoose = require("mongoose");
const { castObject } = require("./projectManagerExecutive");
const Schema = mongoose.Schema;

const civilEngineeringSchema = new Schema(
  {
    title: String,

    description: String,

    requirements: String,

    skill: String,
  },
  { timestamps: true },
);

const CivilEngineering = mongoose.model(
  "CivilEngineering",
  civilEngineeringSchema,
);
module.exports = CivilEngineering;
