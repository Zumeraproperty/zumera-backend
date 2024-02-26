const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const blogSchema = new Schema({
    blogTitle: {
        type: String,
        required: true
    },
    blogText: {
        type: String,
        required: true
    },
    blogImg: {
        type: String,
    },
    blogVideo: {
        type: String,
    },
    blogUrl: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},{timestamps: true});


const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog;