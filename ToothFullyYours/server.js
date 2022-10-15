const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require("path");
const connectDB = require('./server/database/connection');
const app = express();
const flash = require('connect-flash')
const session = require('express-session');
const passport =require('passport')

dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 8080;

//passport config

require('../Appointment/server/config/passport')(passport);

// log request
app.use(morgan('tiny'));

// mongodb connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({extended: true}));


//Express Session

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,

}))

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());


//Connect flash

app.use(flash());


//Global Vars

app.use((req, res, next) =>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error'); 
    next(); 
})



// set view engine
app.set("view engine", "ejs")
// app.set("views", path.resolve(__dirname), "views/ejs")


// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));


//load routers
app.use('/', require("./server/routes/router"));

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})