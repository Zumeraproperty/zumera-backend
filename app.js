const mongoose = require('mongoose')
const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session')
const bcrypt = require('bcrypt')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path');
const nodemailer = require('nodemailer')
// const multer = require('multer');
// const cloudinary = require('cloudinary').v2
// const { CloudinaryStorage } = require('multer-storage-cloudinary')

// Set up Cloudinary
// cloudinary.config({
//   cloud_name: 'dv3rvc1by',
//   api_key: '773664589458118',
//   api_secret: 'Ky7xcgcoDayEdTD3rmK1XIEXx6Y'
// });

// Define Schema
// const formDataSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   fileUrl: String // Store Cloudinary URL here
// });

// const FormData = mongoose.model('FormData', formDataSchema);

// Set up Multer and Cloudinary storage
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: 'Zumera',
//     allowed_formats: ['jpg', 'png', 'pdf']
//   }
// });
// const upload = multer({ storage: storage });


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
    res.setHeader('Access-Control-Allow-Origin', '*');
    subscriber.save().then(result => res.send(result)).catch((err) => console.log(err))
  } catch (err) {
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
// app.post('/career', (req, res, next) => {
//   const { name, email, address, phone } = req.body
//   const resume = req.file

//   const career = new career({
//     name, 
//     email, 
//     address, 
//     phone
//   })
//   res.redirect('/dashboard')
//   career.save().then(result => res.send(result)).catch((err) => console.log(err))
// })


// all positions api
app.post('/accounting-and-finance', (req, res) => {
  const { title, description, skill, requirements } = req.body

  const accountingAndFinance = new AccountingAndFinance({
    title, 
    description, 
    skill, 
    requirements
  })

  accountingAndFinance.save()
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send('Error saving data');
  });
})

app.post('/architecture-and-design', (req, res) => {
  const { title, description, skill, requirements } = req.body

  const architectureAndDesign = new ArchitectureAndDesign({
    title, 
    description, 
    skill, 
    requirements
  })

  architectureAndDesign.save()
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send('Error saving data');
  });
})

app.post('/civil-engineering', (req, res) => {
  const { title, description, skill, requirements } = req.body

  const civilEngineering = new CivilEngineering({
    title, 
    description, 
    skill, 
    requirements
  })

  civilEngineering.save()
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send('Error saving data');
  });
})

app.post('/cooperate-attorney', (req, res) => {
  const { title, description, skill, requirements } = req.body

  const cooperateAttorney = new CooperateAttorney({
    title, 
    description, 
    skill, 
    requirements
  })

  cooperateAttorney.save()
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send('Error saving data');
  });
})

app.post('/hr', (req, res) => {
  const { title, description, skill, requirements } = req.body

  const hr = new Hr({
    title, 
    description, 
    skill, 
    requirements
  })
  hr.save()
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send('Error saving data');
  });
})

app.post('/operations', (req, res) => {
  const { title, description, skill, requirements } = req.body

  const operations = new Operations({
    title, 
    description, 
    skill, 
    requirements
  })

  operations.save()
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send('Error saving data');
  });
})

app.post('/procurement', (req, res) => {
  const { title, description, skill, requirements } = req.body

  const procurement = new Procurement({
    title, 
    description, 
    skill, 
    requirements
  })

  procurement.save()
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send('Error saving data');
  });
})

app.post('/project-manager-executive', (req, res) => {
  const { title, description, skill, requirements } = req.body

  const projectManagerExecutive = new ProjectManagerExecutive({
    title, 
    description, 
    skill, 
    requirements
  })

  projectManagerExecutive.save()
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send('Error saving data');
  });
})

app.post('/sales-executive', (req, res) => {
  const { title, description, skill, requirements } = req.body

  const salesExecutive = new SalesExecutive({
    title, 
    description, 
    skill, 
    requirements
  })

  salesExecutive.save()
    .then(result => res.send(result))
    .catch(err => {
      console.error(err);
      res.status(500).send('Error saving data');
    });
})

// getting data for different jobs api
app.get('/all-accounting-and-finance', (req, res) => {
  allAandF = AccountingAndFinance.find().then(result => res.send(result)).catch((err) => console.log(err))
})

app.get('/all-architecture-and-design', (req, res) => {
  allAandD =  ArchitectureAndDesign.find().then(result => res.send(result)).catch((err) => console.log(err))
})

app.get('/all-civil-engineering', (req, res) => {
  allCE = CivilEngineering.find().then(result => res.send(result)).catch((err) => console.log(err))
})

app.get('/all-cooperate-attorney', (req, res) => {
  CandA = CooperateAttorney.find().then(result => res.send(result)).catch((err) => console.log(err))
})

app.get('/all-hr', (req, res) => {
  AllHr = Hr.find().then(result => res.send(result)).catch((err) => console.log(err))
})

app.get('/all-operations', (req, res) => {
  AllOperations = Operations.find().then(result => res.send(result)).catch((err) => console.log(err))
})

app.get('/all-procurement', (req, res) => {
  AllProcurement = Procurement.find().then(result => res.send(result)).catch((err) => console.log(err))
})

app.get('/all-project-manager-executive', (req, res) => {
  PandMandE = ProjectManagerExecutive.find().then(result => res.send(result)).catch((err) => console.log(err))
})

app.get('/all-sales-executive', (req, res) => {
  SandE = SalesExecutive.find().then(result => res.send(result)).catch((err) => console.log(err))
})


// Get all JObs from different departments in one page
app.get('/career', async (req, res) => {
  try {
    const data = {
      AccountingAndFinance: await AccountingAndFinance.find(),
      ArchitectureAndDesign: await ArchitectureAndDesign.find(),
      CivilEngineering: await CivilEngineering.find(),
      CooperateAttorney: await CooperateAttorney.find(),
      Hr: await Hr.find(),
      Operations: await Operations.find(),
      Procurement: await Procurement.find(),
      ProjectManagerExecutive: await ProjectManagerExecutive.find(),
      SalesExecutive: await SalesExecutive.find()
    };

    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// Delete Job Request
app.delete('/career/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Promise.all([
      AccountingAndFinance.findByIdAndDelete(id),
      ArchitectureAndDesign.findByIdAndDelete(id),
      CivilEngineering.findByIdAndDelete(id),
      CooperateAttorney.findByIdAndDelete(id),
      Hr.findByIdAndDelete(id),
      Operations.findByIdAndDelete(id),
      Procurement.findByIdAndDelete(id),
      ProjectManagerExecutive.findByIdAndDelete(id),
      SalesExecutive.findByIdAndDelete(id)
    ]);

    res.status(200).send('Deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// Update Job Post
app.put('/career/:id', async (req, res) => {
  const { id } = req.params;
  const updateData = req.body[id]; // Use bracket notation to access the data for the specific ID

  try {
    // Update the item with the specific ID using the updateData
    await Promise.all([
      AccountingAndFinance.findByIdAndUpdate(id, updateData),
      ArchitectureAndDesign.findByIdAndUpdate(id, updateData),
      CivilEngineering.findByIdAndUpdate(id, updateData),
      CooperateAttorney.findByIdAndUpdate(id, updateData),
      Hr.findByIdAndUpdate(id, updateData),
      Operations.findByIdAndUpdate(id, updateData),
      Procurement.findByIdAndUpdate(id, updateData),
      ProjectManagerExecutive.findByIdAndUpdate(id, updateData),
      SalesExecutive.findByIdAndUpdate(id, updateData)
    ]);

    res.status(200).send('Updated successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


// app.post('/upload', upload.single('file'), async (req, res) => {
//   try {
//     // Save form data to MongoDB
//     const formData = new FormData({
//       name: req.body.name,
//       email: req.body.email,
//       fileUrl: req.file.path // Cloudinary URL
//     });
//     await formData.save();
//     res.send('File uploaded successfully');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// });