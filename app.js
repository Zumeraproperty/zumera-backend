const mongoose = require('mongoose')
const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session')
const bcrypt = require('bcrypt')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path');
const nodemailer = require('nodemailer')



// All models
const Users = require('./models/users')
const Subscribers = require('./models/subscribers');
const Blogs = require('./models/blogPost');
const User = require('./models/users');
const Career = require('./models/career');
const Subscriber = require('./models/subscribers');
const AccountingAndFinance = require('./models/positions/accountingAndFinance');
const ArchitectureAndDesign = require('./models/positions/architectureAndDesign');
const CivilEngineering = require('./models/positions/civilEngineering');
const CooperateAttorney = require('./models/positions/cooperateAttorney');
const Hr = require('./models/positions/hr');
const Operations = require('./models/positions/operations');
const Procurement = require('./models/positions/procurement');
const ProjectManagerExecutive = require('./models/positions/projectManagerExecutive');
const SalesExecutive = require('./models/positions/salesExecutive');
const app = express();
const port = process.env.PORT || 5000;

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
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

// app.use((req, res) => {
//   res.send('PAGE NOT FOUND')
// })
// app.use('/dashoard', (req, res) => {
//   res.redirect('/dashboard/overview')
// })

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

app.post('/add-user', async (req, res) => {
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

 
 user.save().then(result => res.send(result)).catch((err) => console.log(err))
});

// Login route
app.post('/login', async (req, res) => {
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
app.get('/all-users', async (req, res) => {
  try{
    const allUsers =  await Users.find()
    res.send(allUsers)
  } catch (err) {
    console.log(err)
  }

})

// register subscribers
app.post('/subscriber', async(req, res) => {
  try {
      const existingUser = await Subscriber.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(400).json({ messageErr: 'Email already exists' });
      }
    const {name, email} = req.body;
    const subscriber = new Subscribers({
      name,
      email
    })
    subscriber.save().then(result => res.send(result)).catch((err) => console.log(err))
  } catch (err) {
    // console.error(err);
    res.status(500).json({ messageErr: 'Server error' });
  }
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
  // console.log(allSubscribers)
})

// Create blog post
// app.post('/create-blog', (req, res, next) => {
//   const {blogTitle, blogText, blogLink} = req.body;
//   const blogFiles = req.files.map(file => file.path);

//   const blog = new Blogs({
//     blogTitle,
//     blogText,
//     blogFiles,
//     blogLink
//   })
//   // res.redirect('/dashboard/overview')
//   blog.save().then(result => res.send(result)).catch((err) => console.log(err))
// });

// app.post('/create-blog', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'video', maxCount: 1 }]), async (req, res) => {
//   try {
//     const blog = new Data({
//       text: req.body.text,
//       image: req.files['image'] ? req.files['image'][0].path : null,
//       video: req.files['video'] ? req.files['video'][0].path : null
//     });
//     await newData.save();
//     res.status(201).json({ message: 'Data saved successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

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
app.post('/career', (req, res, next) => {
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

// all positions api
app.post('/accounting-and-finance', (req, res) => {
  const { title, description, role, requirements, benefits } = req.body

  const accountingAndFinance = new AccountingAndFinance({
    title, 
    description, 
    role, 
    requirements, 
    benefits
  })

  accountingAndFinance.save()
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send('Error saving data');
  });
})

app.post('/architecture-and-design', (req, res) => {
  const { title, description, role, requirements, benefits } = req.body

  const architectureAndDesign = new ArchitectureAndDesign({
    title, 
    description, 
    role, 
    requirements, 
    benefits
  })

  architectureAndDesign.save()
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send('Error saving data');
  });
})

app.post('/civil-engineering', (req, res) => {
  const { title, description, role, requirements, benefits } = req.body

  const civilEngineering = new CivilEngineering({
    title, 
    description, 
    role, 
    requirements, 
    benefits
  })

  civilEngineering.save()
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send('Error saving data');
  });
})

app.post('/cooperate-attorney ', (req, res) => {
  const { title, description, role, requirements, benefits } = req.body

  const cooperateAttorney = new CooperateAttorney({
    title, 
    description, 
    role, 
    requirements, 
    benefits
  })

  cooperateAttorney.save()
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send('Error saving data');
  });
})

app.post('/hr', (req, res) => {
  const { title, description, role, requirements, benefits } = req.body

  const hr = new Hr({
    title, 
    description, 
    role, 
    requirements, 
    benefits
  })
  hr.save()
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send('Error saving data');
  });
})

app.post('/operations', (req, res) => {
  const { title, description, role, requirements, benefits } = req.body

  const operations = new Operations({
    title, 
    description, 
    role, 
    requirements, 
    benefits
  })

  operations.save()
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send('Error saving data');
  });
})

app.post('/procurement', (req, res) => {
  const { title, description, role, requirements, benefits } = req.body

  const procurement = new Procurement({
    title, 
    description, 
    role, 
    requirements, 
    benefits
  })

  procurement.save()
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send('Error saving data');
  });
})

app.post('/project-manager-executive', (req, res) => {
  const { title, description, role, requirements, benefits } = req.body

  const projectManagerExecutive = new ProjectManagerExecutive({
    title, 
    description, 
    role, 
    requirements, 
    benefits
  })

  projectManagerExecutive.save()
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send('Error saving data');
  });
})

app.post('/sales-executive', (req, res) => {
  const { title, description, role, requirements, benefits } = req.body

  const salesExecutive = new SalesExecutive({
    title, 
    description, 
    role, 
    requirements, 
    benefits
  })

  salesExecutive.save()
    .then(result => res.send(result))
    .catch(err => {
      console.error(err);
      res.status(500).send('Error saving data');
    });
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