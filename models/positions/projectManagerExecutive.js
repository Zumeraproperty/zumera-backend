const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const projectManagerExecutiveSchema = new Schema({
    title: String,

    description: String,

    role: String,

    requirements: String,

    benefits: String,
},{timestamps: true});


const ProjectManagerExecutive = mongoose.model('ProjectManagerExecutive', projectManagerExecutiveSchema)
module.exports = ProjectManagerExecutive;