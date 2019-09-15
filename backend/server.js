// express is a web app frame work for node.js
const express = require('express')

const cors = require('cors')
// to help our server to connect to mongoDB database
const mongoose = require('mongoose')
// so we can have an enviroment variables in .env file
require('dotenv').config()

// here we are creating our expess server
const app = express()
const PORT = process.env.PORT || 5000

// here is our middleware because our server will be sending and resciving json
app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true }
    )

const connection = mongoose.connection
connection.once('open', () =>{
    console.log('MongoDB connection established succesfully')
})

// we are starting the server to be listing on a certin port
app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})