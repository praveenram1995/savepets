const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

const app = express();


//connect DB
connectDB();

//Passing body data
app.use(express.json());


// Define Routes
app.use('/api/organizations', require('./routes/api/organizations'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/animals', require('./routes/api/animals'));


//Server
const PORT = process.env.PORT || 5000

app.listen(PORT, () =>{
  console.log(`Server is up and running on ${PORT}`)
});