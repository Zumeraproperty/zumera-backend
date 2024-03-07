const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const cooperateAttorneySchema = new Schema({
    title: String,

    description: String,

    role: String,

    requirements: String,

    benefits: String,
},{timestamps: true});


const CooperateAttorney = mongoose.model('CooperateAttorney', cooperateAttorneySchema)
module.exports = CooperateAttorney;