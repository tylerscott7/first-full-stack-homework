require('./model/db');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const router = require('./controllers/router');

// MIDDLEWARE
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended:false}));
app.use('/leaders',router);

// STATIC FILES
app.use(express.static('public'));

app.listen(3000, ()=> {
    console.log("Server is running...")
})