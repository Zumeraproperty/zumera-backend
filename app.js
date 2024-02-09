const express = require('express')
const mongoose = require('mongoose')
const Subscriber = require('./models/subscribers')

const connectionpOptions = {
  dbName: `subscriber-database`,
}

const mongodb = "mongodb+srv://zumera_admin:admin12345@cluster0.jfqncxu.mongodb.net/subscriber-database?retryWrites=true&w=majority"
mongoose.connect(mongodb, connectionpOptions).then(() => console.log('connect')
).catch(err => console.log(err))

const app = express()
const port = 8080

app.get('https://postman-rest-api-learner.glitch.me/subscriber', (req, res) => {
    const subscriber = new Subscriber({
        name: 'Cornelius',
        email: 'cornelius@gmail.com'
    });
    subscriber2.save().then(result => res.send(result)).catch(err => console.log(err))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})