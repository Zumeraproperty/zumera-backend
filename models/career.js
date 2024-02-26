const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const careerSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    adress: {
        type: String,
        required: true
    },

    resume: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},{timestamps: true});


const Career = mongoose.model('Career', careerSchema)
module.exports = Career;