const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const hrSchema = new Schema({
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


const Hr = mongoose.model('Hr', hrSchema)
module.exports = Hr;