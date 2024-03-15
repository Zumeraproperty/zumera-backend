const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const architectureAndDesignSchema = new Schema({
    title: String,

    description: String,

    requirements: String,

    skill: String,

    
},{timestamps: true});


const ArchitectureAndDesign = mongoose.model('ArchitectureAndDesign', architectureAndDesignSchema)
module.exports = ArchitectureAndDesign;