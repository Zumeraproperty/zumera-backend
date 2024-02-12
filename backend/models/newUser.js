const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const newUserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
}, {timestamps: true});


const Users = mongoose.model('Users', newUserSchema)
module.exports = Users;