const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const users = require('./routes/api/profile')




app.use(express.static(path.join(__dirname, '/client/public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const db = require('./config/keys').mongoURI;

mongoose.connect(db)
    .then(()=>console.log('connected'))
    .catch(err=>console.log(err));


app.use('/api/profile', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("connected to port"));
console.log(app.path.toString())