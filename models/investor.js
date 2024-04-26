const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const investorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    mobile: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    }
}, {timestamps: true});


const Investor = mongoose.model('Investor', investorSchema)
module.exports = Investor;
