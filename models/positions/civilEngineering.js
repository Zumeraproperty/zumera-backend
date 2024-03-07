const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const civilEngineeringSchema = new Schema({
    title: String,

    description: String,

    role: String,

    requirements: String,

    benefits: String,
},{timestamps: true});


const CivilEngineering = mongoose.model('CivilEngineering', civilEngineeringSchema)
module.exports = CivilEngineering;