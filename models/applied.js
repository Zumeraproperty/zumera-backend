const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const appliedSchema = new Schema({

    name: String,

    email: String,

    address: String,

    dob: String,

    experience: String,

    letter: String,

    resume: [String],

},{timestamps: true});


const Applied = mongoose.model('Applied', appliedSchema)
module.exports = Applied;