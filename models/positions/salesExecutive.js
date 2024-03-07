const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const salesExecutiveSchema = new Schema({
    title: String,

    description: String,

    role: String,

    requirements: String,

    benefits: String,
},{timestamps: true});


const SalesExecutive = mongoose.model('SalesExecutive', salesExecutiveSchema)
module.exports = SalesExecutive;