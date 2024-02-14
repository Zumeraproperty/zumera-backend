const mongoose = require('mongoose')
const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session')
const bcrypt = require('bcryptjs')


const Users = require('./models/users')
const Subscribers = require('./models/subscribers');
const Blogs = require('./models/blogPost');
const app = express();
const port = process.env.PORT || 5000;


// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

app.use(session({
  secret: 'my_secret_key',
  resave: false,
  saveUninitialized: false
}));

// connecting mongodb with mongoose
const connectionOptions = { dbName: `user-database` };
const mongodb = 'mongodb+srv://zumera_admin:admin12345@cluster0.jfqncxu.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongodb, connectionOptions).then(() => { 
  console.log('connected'),
  app.listen(port, () => {
    console.log("Server is running on PORT: ", port)
  })
}).catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send("<h1>hello</h1>")
})

// // Register new user
app.post('/add-user', (req, res) => {
  const {email, password} = req.body;

  // Check if email already exists
  // const existingUser = Users.findOne({ email });
  // if (existingUser) {
  //   return res.status(400).json({ message: 'Email already exists' });
  // }

  // register user
  const user = new Users({
    email,
    password
  })

  user.save().then(result => res.send(result)).catch((err) => console.log(err))
  res.redirect('/dashboard')
});

// delete User
app.delete('/all-users/:id', (req, res) => {
  const id = req.params.id;
  Users.findByIdAndDelete(id).then(result => res.send(result)).catch((err) => console.log(err))
  res.redirect('/dashboard')
})

// // Get all users
app.get('/all-users', (req, res) => {
  const allUsers =  Users.find().then(result => res.send(result)).catch((err) => console.log(err))
})

// register subscribers
app.post('/subscriber', (req, res) => {
  const {name, email} = req.body;
  const subscriber = new Subscribers({
    name,
    email
  })
  res.redirect('/dashboard')
  subscriber.save().then(result => res.send(result)).catch((err) => console.log(err))
});


// get all subscribers
app.get('/get-all-subscribers', (req, res) => {
  const allSubscribers =  Subscribers.find().then(result => res.send(result)).catch((err) => console.log(err))
})

// Create blog post
app.post('/create-blog', (req, res) => {
  const {title, content} = req.body;
  const blog = new Blogs({
    title,
    content
  })
  res.redirect('/dashboard')
  blog.save().then(result => res.send(result)).catch((err) => console.log(err))
});

// Get all blogs
app.get('/blog', (req, res) => {
  const allBlogs =  Blogs.find().then(result => res.send(result)).catch((err) => console.log(err))
})

// Update blog post
app.put('/blog/:id', (req, res) => {
  const id = req.params.id;
  Blogs.findByIdAndUpdate(id, req.body).then(result => res.send(result)).catch((err) => console.log(err))
  res.redirect('/dashboard')
})

// Delete blog post
app.delete('/blog/:id', (req, res) => {
  const id = req.params.id;
  Blogs.findByIdAndDelete(id).then(result => res.send(result)).catch((err) => console.log(err))
  res.redirect('/dashboard')
})



// Correct Duplicate if subscriber email already exist
// const alertErr = (err) => {
//   let errors = {name: '', email: ''}
//   if (err.code === 11000) {
//     errors.email = 'This email already exist'
//   }
// }

// Login 
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find(u => u.username === username);

//   if (!user || !bcrypt.compareSync(password, user.password)) {
//     res.status(401).json({ message: 'Invalid credentials' });
//   } else {
//     req.session.userId = user.id;
//     res.json({ message: 'Login successful' });
//   }
// });