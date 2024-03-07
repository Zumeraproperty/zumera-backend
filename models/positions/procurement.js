const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const procurementSchema = new Schema({
    title: String,

    description: String,

    role: String,

    requirements: String,

    benefits: String,
},{timestamps: true});


const Procurement = mongoose.model('Procurement', procurementSchema)
module.exports = Procurement;