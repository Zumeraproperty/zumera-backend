const mongoose = require('mongoose')
const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session')
const bcrypt = require('bcrypt')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const multer = require('multer')
const nodemailer = require('nodemailer')


const upload = multer({ dest: 'uploads/'})
const Users = require('./models/users')
const Subscribers = require('./models/subscribers');
const Blogs = require('./models/blogPost');
const User = require('./models/users');
const Career = require('./models/career');
const app = express();
const port = process.env.PORT || 5000;

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors())
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
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/set-cookies', (req, res) => {
  res.cookie('username', 'Tony')
  res.cookie('isAuthenticated', true)
  res.send('cookies are set')
})
app.get('/get-cookies', (req, res) => {
  const cookies = req.cookies
  console.log(cookies)
  res.json(cookies)
})

app.use((req, res) => {
  res.send('PAGE NOT FOUND')
})
app.use('/dashoard', (req, res) => {
  res.redirect('/dashboard/overview')
})

// // Register new user
const alertError = (err) => {
  let errors = {name: '', email: '', password: ''}

  if (err.message.includes('User validation failed')){
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message
    })
  }
  return errors
}

app.post('/add-user', upload.none(), async (req, res) => {
  const {name, email, password} = req.body;

 try {
  const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

  const user = await User.create({ name, email, password});
  res.status(201).json({ user });
 }catch (error) {
  let errors = alertError(error)
  res.status(400).json({errors})
 }
});

// Login route
app.post('/login', upload.none(), async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Compare passwords
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  res.redirect('/dashboard');
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
app.post('/subscriber', upload.none(), (req, res) => {
  const {name, email} = req.body;
  const subscriber = new Subscribers({
    name,
    email
  })
  res.redirect('/dashboard')
  subscriber.save().then(result => res.send(result)).catch((err) => console.log(err))

  const transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM",
      pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
    },
  });

  // send mail with defined transport object
  const info = transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
});


// get all subscribers
app.get('/get-all-subscribers', (req, res) => {
  const allSubscribers =  Subscribers.find().then(result => res.send(result)).catch((err) => console.log(err))
})

// Create blog post
app.post('/create-blog', upload.array('blogImg'), (req, res, next) => {
  const {blogTitle, blogText, blogUrl} = req.body;
  const file = req.file

  const blog = new Blogs({
    blogTitle,
    blogText,
    blogUrl,
    file
  })
  res.redirect('/dashboard/overview')
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

// Post Job on career page
app.post('/career', upload.single('resume'), (req, res, next) => {
  const { name, email, address, phone } = req.body
  const resume = req.file

  const career = new career({
    name, 
    email, 
    address, 
    phone
  })
  res.redirect('/dashboard')
  career.save().then(result => res.send(result)).catch((err) => console.log(err))
})

// Get all JObs
app.get('/career', (req, res) => {
  const allCareer =  Career.find().then(result => res.send(result)).catch((err) => console.log(err))
})

// Update Job post
app.put('/career/:id', (req, res) => {
  const id = req.params.id;
  Career.findByIdAndUpdate(id, req.body).then(result => res.send(result)).catch((err) => console.log(err))
  res.redirect('/dashboard')
})

// Delete Job post
app.delete('/career/:id', (req, res) => {
  const id = req.params.id;
  Career.findByIdAndDelete(id).then(result => res.send(result)).catch((err) => console.log(err))
  res.redirect('/dashboard')
})