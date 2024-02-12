const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog;