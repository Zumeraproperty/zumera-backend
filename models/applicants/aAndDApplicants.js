const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const architectureAndDesignSchema = new Schema({

    name: String,

    email: String,

    address: String,

    birth: String,

    experience: String,

    resume: String,

    
},{timestamps: true});


const ArchitectureAndDesign = mongoose.model('ArchitectureAndDesign', architectureAndDesignSchema)
module.exports = ArchitectureAndDesign;