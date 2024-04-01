const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  blogTitle: String,
  blogText1: String,
  blogText2: String,
  blogText3: String,
  blogUrl1: String,
  blogUrl2: String,
  blogUrl3: String,
  cloudinaryUrls: [String],
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
