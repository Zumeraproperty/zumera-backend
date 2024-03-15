const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const projectManagerExecutiveSchema = new Schema({
    title: String,

    description: String,

    requirements: String,

    skill: String,

    
},{timestamps: true});


const ProjectManagerExecutive = mongoose.model('ProjectManagerExecutive', projectManagerExecutiveSchema)
module.exports = ProjectManagerExecutive;