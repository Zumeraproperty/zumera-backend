const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const procurementSchema = new Schema({
    title: String,

    description: String,

    requirements: String,

    skill: String,

    
},{timestamps: true});


const Procurement = mongoose.model('Procurement', procurementSchema)
module.exports = Procurement;