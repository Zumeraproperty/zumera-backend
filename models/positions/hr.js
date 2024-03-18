const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const hrSchema = new Schema({

    title: String,

    description: String,

    requirements: String,

    skill: String,

    
},{timestamps: true});


const Hr = mongoose.model('Hr', hrSchema)
module.exports = Hr;