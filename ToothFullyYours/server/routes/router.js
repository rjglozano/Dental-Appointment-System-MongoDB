// Check


const express = require('express');
const route = express.Router();
const services = require("../services/render");
const controller = require("../controller/controller");
const services1 = require("../services/employee_render");
const controller1 = require("../controller/employee_controller");
const services2 = require("../services/history_render");
const controller2 = require("../controller/history_controller");
const controller3 = require("../controller/login_controller");

const services4 = require("../services/profile_render");
const controller4 = require("../controller/item_controller");
const services5 = require("../services/item_render");
const controller5 = require("../controller/finance_controller");
const services6 = require("../services/finance_render");


const passport =require('passport')
const { ensureAuthenticated } = require('../config/auth');
const { render } = require('ejs');
const e = require('express');






// Routes for Home Route/Starting Route

route.get('/Request', ensureAuthenticated, services.Request)


// Routes for Appointments

route.get('/appointment', ensureAuthenticated, services.Appointment);
route.get('/appointment-data', controller.find_appointment);
route.delete('/appointment/:id', controller.delete_appointment);


// Routes for Appointmment Request

route.post('/api/appointmentRequest', controller.create);
route.get('/api/appointmentRequest', controller.find);
route.delete('/api/appointmentRequest/:id',  controller.delete);


// Routes for Adding, Viewing, Updating, and Deleting Employee


route.get('/employee', ensureAuthenticated, services1.Employee)
route.get('/add-employee', ensureAuthenticated, services1.add_employee);
route.get('/update-employee', ensureAuthenticated, services1.update_employee);
route.get('/view-employee', ensureAuthenticated, services1.view_employee);

route.post('/api/employee', controller1.create);
route.get('/api/employee', controller1.find);
route.put('/api/employee/:id', controller1.update);
route.delete('/api/employee/:id', controller1.delete);

// route.get('/api/employee/:id', controller1.find);


// Routes for Patient History Transactions

 
route.get('/history', ensureAuthenticated, services2.history);
route.get('/update-history', ensureAuthenticated, services2.update_history);

route.get('/api/history', controller2.find);
route.put('/api/history/:id', controller2.update);
route.delete('/history/:id', controller2.delete);


// Login

//Go to Financial Statement Page


//Go to login page

route.get("/login", (req, res)=>{
    res.render("login_body", {title: 'Log-in'})
})


// Register


route.post('/register', controller3.create);
route.get("/register", (req, res)=>{
    res.render("register_body", {title: 'User Registration'})
})


const admin ={
    email: 'admin@toothfully.com',
    password: 'admin123'
}

// login user
route.post('/login',(req, res, next)=>{

    if(req.body.email == admin.email){
        passport.authenticate('local', {
            successRedirect: '/Request',
            failureRedirect: '/login',
            failureFlash: true
        })(req, res, next)
    }else{

        passport.authenticate('local', {
            successRedirect: '/add-appointmentRequest',
            failureRedirect: '/login',
            failureFlash: true
        })(req, res, next)
    }

   
})

//route for appointmentRequest


route.get("/add-appointmentRequest", ensureAuthenticated, (req, res)=> {
    
        res.render("add_appointmentRequest", {
            _id: req.user._id, 
            p_patientID: req.user._id,
            p_username: req.user.p_username,
            p_name: req.user.p_name,
            p_email: req.user.p_email,
            p_phoneNum: req.user.p_phoneNum
        })
        
})


//route for logout

route.get('/logout', (req, res,next) =>{
    req.logout((err)=>{
        if(err){
            return next(err)
        }else{
            req.flash('success_msg', 'You are logged out!');    
            res.redirect("/login");
        }
    });
 
})

 route.get('/', (req, res) =>{
     res.render("home_body", {title: "ToothFully"})
})

//route for about us

route.get('/aboutUs', ensureAuthenticated, (req, res) =>{
       
    res.render("about-us_body",{ p_username: req.user.p_username})
})

route.get('/about-us', (req, res) =>{
    res.render("about-us-no-account_body",{title: "About Us"})
})


//Route for Profile

route.get('/myprofile',  ensureAuthenticated, services4.patientProfile);
route.get('/edit', ensureAuthenticated, controller3.editLoad);
route.get('/view', ensureAuthenticated, controller3.editLoad2);
route.post('/edit', ensureAuthenticated, controller3.update);

// route.get('/myprofile', ensureAuthenticated, controller3.userhistory);


//Route for Inventory


route.get('/Inventory', ensureAuthenticated, services5.inventory)
route.get('/add-item', ensureAuthenticated, services5.add_item)


route.get('/update-item', ensureAuthenticated, services5.update_item)


route.post('/api/items', controller4.create);
route.get('/api/items', controller4.find);
route.put('/api/items/:id', controller4.update);
route.delete('/api/items/:id', controller4.delete);

//Route for Finance
route.get('/Finance', ensureAuthenticated, services6.finance);
route.get('/add-finance', ensureAuthenticated, services6.addFinance);
route.get('/view-finance', ensureAuthenticated, services6.viewFinance);
    //Insert Request
route.post('/api/finance', controller5.insertRecord)
route.get('/api/finance', controller5.find)
route.put('/api/finance/:id', controller5.update);
route.delete('/api/finance/:id', controller5.delete);

   
// Route for Patient Profile
route.get('/Patient', ensureAuthenticated, services4.patient)
route.get('/update-patient', ensureAuthenticated, services4.update)


route.get('/api/patients', controller3.find);
route.delete('/api/patients/:id', controller3.delete);



module.exports = route