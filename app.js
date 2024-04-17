require("dotenv").config()

const fs = require('fs')
const mongoose = require('mongoose')
const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path');
const nodemailer = require('nodemailer')
const multer = require('multer')
const multerStorageCloudinary = require('multer-storage-cloudinary') 
const cloudinary = require('./cloudinary/cloudinary')
const upload = multer({ dest: 'uploads/' });
  

// All models
const Users = require('./models/users')
const Subscribers = require('./models/subscribers');
const Blogs = require('./models/blogPost');
const User = require('./models/users');
const Applied = require("./models/applied");
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
const Blog = require("./models/blogPost");
const app = express();
const port = process.env.PORT || 5000;

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json({limit: '20mb'}));
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

// Routing to different pages
// app.use(express.static(path.join(__dirname, 'zumera-tower/build')));

// Define route to serve the React index page
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'zumera-tower/build', 'index.html'));
// });

// Login route
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });
//   if (!user) {
//     return res.status(404).json({ message: 'User not found' });
//   }

//   // Compare passwords
//   const passwordMatch = await bcrypt.compare(password, user.password);
//   if (!passwordMatch) {
//     return res.status(401).json({ message: 'Invalid credentials' });
//   }
//   res.redirect('/dashboard/overview');
// });
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ userId: user._id }, 'your_secret_key');
  res.json({ token });
  res.json({ token, redirectUrl: '/dashboard/overview' });
});

function authMiddleware(req, res, next) {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  try {
    const decoded = jwt.verify(token, 'your_secret_key');
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
}

// app.get('/dashboard/overview', authMiddleware, (req, res) => {
//   res.sendFile(path.join(__dirname, 'zumera-tower/build/dashboard/overview.html'));
// });



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

// delete User
app.delete('/all-users/:id', (req, res) => {
  const id = req.params.id;
  Users.findByIdAndDelete(id).then(result => res.send(result)).catch((err) => console.log(err))
  res.redirect('/dashboard/overview')
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
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "corneliusedos@gmail.com",
    pass: "Cornelius1997.",
  },
});

app.post('/subscriber', async (req, res) => {
  try {
    const existingUser = await Subscriber.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ messageErr: 'Email already exists' });
    }
    const { name, email } = req.body;
    const subscriber = new Subscriber({ name, email });
    await subscriber.save();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(subscriber);

    const info = await transporter.sendMail({
      from: '"Zumera" <corneliusedos@gmail.com>',
      to: email,
      subject: "Welcome to Zumera!",
      text: `Dear ${name},\n\nWelcome to Zumera, where luxury transcends boundaries and excellence is not just a goal but a lifestyle. As a valued subscriber, you now have access to expert guidance, inspiration, educational resources, community engagement, and exclusive offers.\n\nWelcome to the Zumera Tribe!\n\nWarm regards,\nThe Zumera Team`,
      html: `<p>Dear ${name},</p><p>Welcome to Zumera, where luxury transcends boundaries and excellence is not just a goal but a lifestyle. As a valued subscriber, you now have access to expert guidance, inspiration, educational resources, community engagement, and exclusive offers.</p><p>Welcome to the Zumera Tribe!</p><p>Warm regards,<br/>The Zumera Team</p>`,
    });
    console.log("Message sent: %s", info.messageId);
  } catch (err) {
    console.error(err);
    res.status(500).json({ messageErr: 'Server error' });
  }
});



// get all subscribers
app.get('/get-all-subscribers', (req, res) => {
  const allSubscribers =  Subscribers.find().then(result => res.send(result)).catch((err) => console.log(err))
})

// Blog Post
app.post('/upload', upload.array('files', 3), async (req, res) => {
  console.log("joy")
  try {
    const files = req.files;
    if (!files || files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    const cloudinaryUrls = [];
    for (const file of files) {
      try {
        let uploadOptions = {
          upload_preset: 'blog_media',
          allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp', 'mp4', 'mov', 'avi', 'flv', 'wmv'],
        };

        // Check if the file is an image or video and set upload options accordingly
        if (file.mimetype.startsWith('image/')) {
          uploadOptions.resource_type = 'image';
        } else if (file.mimetype.startsWith('video/')) {
          uploadOptions.resource_type = 'video';
        }

        const result = await cloudinary.uploader.upload(file.path, uploadOptions);
        cloudinaryUrls.push(result.url);
        // Delete the local file after uploading to Cloudinary
        fs.unlinkSync(file.path);
      } catch (error) {
        console.log(error);
        // Continue uploading other files even if one fails
        return res.status(500).json({ error: 'Failed to upload one or more files' });
      }
    }

    const blog = new Blog({
      blogTitle: req.body.blogTitle,
      blogText1: req.body.blogText1,
      blogText2: req.body.blogText2,
      blogText3: req.body.blogText3,
      blogUrl1: req.body.blogUrl1,
      blogUrl2: req.body.blogUrl2,
      blogUrl3: req.body.blogUrl3,
      cloudinaryUrls: cloudinaryUrls,
    });

    await blog.save();
    res.status(200).json({ message: 'Files uploaded and blog entry created', blogId: blog._id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to upload files or save blog entry' });
  }
});

// get all blogs
app.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to retrieve blogs' });
  }
});

// get single blog
app.get('/blogs/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to retrieve blog' });
  }
});


// Delete blog post
app.delete('/blogs/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Find the blog entry by ID
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog entry not found' });
    }

    // Delete the files from Cloudinary
    for (const url of blog.cloudinaryUrls) {
      const publicId = url.substring(url.lastIndexOf('/blog/') + 1, url.lastIndexOf('.'));
      await cloudinary.uploader.destroy(publicId);
    }

    // Delete the blog entry from MongoDB
    await Blog.findByIdAndDelete(id);

    res.status(200).json({ message: 'Blog entry and files deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to delete blog entry and files' });
  }
});

// Update blog post
app.put('/blogs/:id', upload.array('files', 3), async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog entry not found' });
    }

    // Delete existing files from Cloudinary
    for (const url of blog.cloudinaryUrls) {
      const publicId = url.substring(url.lastIndexOf('/blog/') + 1, url.lastIndexOf('.'));
      await cloudinary.uploader.destroy(publicId);
    }

    // Upload new files to Cloudinary
    const files = req.files;
    const cloudinaryUrls = [];
    for (const file of files) {
      let uploadOptions = {
        upload_preset: 'blog_media',
        allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp', 'mp4', 'mov', 'avi', 'flv', 'wmv'],
      };

      if (file.mimetype.startsWith('image/')) {
        uploadOptions.resource_type = 'image';
      } else if (file.mimetype.startsWith('video/')) {
        uploadOptions.resource_type = 'video';
      }

      const result = await cloudinary.uploader.upload(file.path, uploadOptions);
      cloudinaryUrls.push(result.url);
      fs.unlinkSync(file.path);
    }

    // Update the blog entry with new data
    blog.blogTitle = req.body.blogTitle;
    blog.blogText1 = req.body.blogText1;
    blog.blogText2 = req.body.blogText2;
    blog.blogText3 = req.body.blogText3;
    blog.blogUrl1 = req.body.blogUrl1;
    blog.blogUrl2 = req.body.blogUrl2;
    blog.blogUrl3 = req.body.blogUrl3;
    blog.cloudinaryUrls = cloudinaryUrls;

    await blog.save();
    res.status(200).json({ message: 'Blog entry updated successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to update blog entry' });
  }
});

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


// Get all Jobs from different departments in one page
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

// sinlge job post
app.get('/career/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const departments = [
      'AccountingAndFinance',
      'ArchitectureAndDesign',
      'CivilEngineering',
      'CooperateAttorney',
      'Hr',
      'Operations',
      'Procurement',
      'ProjectManagerExecutive',
      'SalesExecutive'
    ];

    let responseData = {};

    for (let department of departments) {
      const data = await mongoose.model(department).findById(id);
      if (data) {
        responseData[department] = data;
        break; // Exit the loop if data is found for the department
      }
    }

    res.send(responseData);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


// recieving job application
app.post('/apply', upload.single('pdf'), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const uploadOptions = {
      upload_preset: 'blog_media',
      folder: 'applicants',
      allowed_formats: ['pdf']
    };

    const result = await cloudinary.uploader.upload(file.path, uploadOptions);
    const pdfUrl = result.secure_url;

    const applied = new Applied({
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      dob: req.body.dob,
      experience: req.body.experience,
      letter: req.body.letter,
      resume: pdfUrl
    });

    await applied.save();
    res.status(200).json({ message: 'Your application has been received'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to upload file or save application' });
  }
});

// fetch all job apllications
app.get('/application', async (req, res) => {
  try {
    const applications = await Applied.find();
    res.status(200).json(applications);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to retrieve job applications' });
  }
});

// getting single applicant details
app.get('/application/:id', async (req, res) => {
  try {
    const id = req.params.id;

    // Check if the id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid ID' });
    }

    const application = await Applied.findById(id);

    // Check if the application exists
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }

    res.status(200).json(application);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve application' });
  }
});


// delete single applicant
app.delete('/application/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deletedApplication = await Applied.findByIdAndDelete(id);

    for (const url of blog.cloudinaryUrls) {
      const publicId = url.substring(url.lastIndexOf('/applicants/') + 1, url.lastIndexOf('.'));
      await cloudinary.uploader.destroy(publicId);
    }
    
    if (!deletedApplication) {
      return res.status(404).json({ error: 'Application not found' });
    }
    res.status(200).json({ message: 'Application deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to delete job application' });
  }
});

