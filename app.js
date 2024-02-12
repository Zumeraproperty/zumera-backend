const express = require('express');
const mongoose = require('mongoose');
const Users = require('./models/newUser')
const Subscriber = require('./models/subscribers')
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser')

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(bodyParser.json())

// connecting mongodb with mongoose
const connectionOptions = { dbName: `user-database` };
const mongodb = 'mongodb+srv://zumera_admin:admin12345@cluster0.jfqncxu.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongodb, connectionOptions).then(() => { 
  console.log('connected'),
  app.listen(port, () => {
    console.log("Server is running on PORT: ", port)
  })
}).catch(err => console.log(err))
// mongoose.connection()

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
})

// Register new user
app.post('/add-user', (req, res) => {
  const {name, password} = req.body;
  const newUser = new Users({
    name,
    password,
  })
  res.json({ message: 'Data received successfully' });
  newUser.save().then(result => res.send(result)).catch((err) => console.log(err))
});

// Get all users
app.get('/all-users', (req, res) => {
 const allUsers =  Users.find().then(result => res.send(result)).catch((err) => console.log(err))
  console.log(allUsers)
})

// Delete user
app.get('/all-users', (req, res) => {
  Users.findByIdAndDelete().then(result => res.send(result)).catch((err) => console.log(err))
})

// register subscribers
app.post('/subscribers', (req, res) => {
  const {name, email} = req.body;
  const subscriber = new Subscriber({
    name,
    email,
  })
  console.log(subscriber)
  res.json({ message: 'Data received successfully' });
  subscriber.save().then(result => res.send(result)).catch((err) => console.log(err))
});

// get all subscribers
// app.get('/get-all-subscribers', (req, res){

// })

// Create blog post
// app.get('create-blog', (req, res) => {
//   const {title, content} = req.body;
//   const newUser = new Users({
//     name,
//     password,
//   })
// })