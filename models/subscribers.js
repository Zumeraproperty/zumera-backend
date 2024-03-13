const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const subscriberSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    }
}, {timestamps: true});


const Subscriber = mongoose.model('Subscriber', subscriberSchema)
module.exports = Subscriber;
