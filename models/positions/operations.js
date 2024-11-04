const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const operationsSchema = new Schema(
  {
    title: String,

    description: String,

    requirements: String,

    skill: String,
  },
  { timestamps: true },
);

const Operations = mongoose.model("Operations", operationsSchema);
module.exports = Operations;
