const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

const app = express();


//connect DB
connectDB();

//Passing body data
app.use(express.json());

//For jelastic ssl use
app.enable('trust proxy');

//For local dev disable https conenction
//Only enable when delpolying to git and jelastic
app.use((req, res, next) => {
  if (req.secure) {
    // request was via https, so do no special handling
    next();
  } else {
    // request was via http, so redirect to https
    res.redirect('https://' + req.headers.host + req.url);
  }
});


// Define Routes
app.use('/api/organizations', require('./routes/api/organizations'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/animals', require('./routes/api/animals'));

/* const __dirname2 = path.resolve();
app.use('/uploads', express.static(path.join(__dirname2, '/client/build/uploads')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname2, '/client/public')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname2, 'client', 'public', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}  */

// Serve Static assets in production
app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});



//Server
const PORT = process.env.PORT || 5000

app.listen(PORT, () =>{
  console.log(`Server is up and running on ${PORT}`)
});