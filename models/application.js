const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const applicationSchema = new Schema({

    name: String,

    email: String,

    address: String,

    dob: String,

    experience: String,

    letter: String,

    resume: [String],

},{timestamps: true});


const Application = mongoose.model('Application', applicationSchema)
module.exports = Application;