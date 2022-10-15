// Check

const axios = require('axios');

exports.Employee = (req, res) =>{
    // Make a get request to /api/employee
    axios.get("http://localhost:5000/api/employee")
        .then(function(response){
            res.render('employee', {employee: response.data});
        })

    .catch(err =>{  
        res.send(err);
    })

}

exports.add_employee = (req, res) =>{
    res.render('add_employee');
}

exports.update_employee = (req, res) =>{
    axios.get("http://localhost:5000/api/employee", {params:{id:req.query.id}})
        .then(function(employeedata){
            res.render("update_employee", {employee: employeedata.data})
        })
    .catch(err =>{
        res.send(err);
    })

}

exports.view_employee = (req, res) =>{
    axios.get("http://localhost:5000/api/employee", {params:{id:req.query.id}})
        .then(function(employeedata){
            res.render("view_employee", {employee: employeedata.data})
        })
    .catch(err =>{
        res.send(err);
    })
}