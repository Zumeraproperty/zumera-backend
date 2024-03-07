const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const projectManagerExecutiveSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    role:{
        type: String,
        required: true
    },

    requirements: {
        type: String,
        required: true
    },

    benefits: {
        type: String,
        required: true
    }
},{timestamps: true});


const ProjectManagerExecutive = mongoose.model('ProjectManagerExecutive', projectManagerExecutiveSchema)
module.exports = ProjectManagerExecutive;