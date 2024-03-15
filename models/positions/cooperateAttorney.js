const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const cooperateAttorneySchema = new Schema({
    title: String,

    description: String,

    requirements: String,

    skill: String,

    
},{timestamps: true});


const CooperateAttorney = mongoose.model('CooperateAttorney', cooperateAttorneySchema)
module.exports = CooperateAttorney;