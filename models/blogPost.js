const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const blogSchema = new Schema({
    blogTitle: String,

    blogText:  String,

    blogFiles: String,
    
    blogLink: String,
    
    createdAt: {
        type: Date,
        default: Date.now
    }
},{timestamps: true});


const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog;