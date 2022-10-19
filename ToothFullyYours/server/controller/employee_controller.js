// Check

var Employeedb = require('../model/employee_model')

// create and save new employee
exports.create = (req,res)=>{
    // validate request

    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    const employee = new Employeedb({
        e_name: req.body.e_name,
        e_birthdate: req.body.e_birthdate,
        e_age: req.body.e_age,
        e_gender: req.body.e_gender,
        e_nationality: req.body.e_nationality,
        e_address: req.body.e_address,
        e_phoneNum: req.body.e_phoneNum,
        e_email: req.body.e_email,
        e_emg_contactPerson1: req.body.e_emg_contactPerson1,
        e_emg_contactPerson1_phoneNum: req.body.e_emg_contactPerson1_phoneNum,
        e_emg_contactPerson1_relationship: req.body.e_emg_contactPerson1_relationship,
        e_emg_contactPerson2: req.body.e_emg_contactPerson2,
        e_emg_contactPerson2_phoneNum: req.body.e_emg_contactPerson2_phoneNum,
        e_emg_contactPerson2_relationship: req.body.e_emg_contactPerson2_relationship,
        e_ID: req.body.e_ID,
        e_position: req.body.e_position,
        e_startDate: req.body.e_startDate,
        e_regtime: req.body.e_regtime,
        e_overtime: req.body.e_overtime,
        e_bonus: req.body.e_bonus,
        e_philhealth: req.body.e_philhealth,
        e_SSS: req.body.e_SSS,
        e_pagibig: req.body.e_pagibig,
        e_insurance: req.body.e_insurance,
        e_totsalary: req.body.e_totsalary,
        e_totdeduction: req.body.e_totdeduction,
        e_totamount: req.body.e_totamount,
        e_dategiven: req.body.e_dategiven 
    })

    // save employee in the database

    employee
        .save(employee)
        .then(data =>{
            // res.send(data)
            res.redirect("/add-employee");
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Some error occured while creating a create operation"
            });
        });


}
// retrieve and return all histories/ retreive and return a single employee
exports.find = (req,res)=>{

    if(req.query.id){
        const id = req.query.id;
        Employeedb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({message: "Not found employee with id" + id})
                }else{
                    res.send(data)
                }
            })
        .catch(err =>{
            res.status(500).send({message: "Error retrieving employee with id" + id})
        })

    }else{
        Employeedb.find()
        .then(employee=>{
            res.send(employee)
        })
        .catch(err =>{
            res.status(500).send({message:err.message || "Error Occured while retrieving employee information"})
        })
    }

  
}

 // Update a new idetified employee by employee id
exports.update = (req,res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({message:"Data to update can not be empty"})
            
    }

    const id = req.params.id;
    Employeedb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
        .then(data =>{
            if(!data){
                res.status(404).send({message: `Cannot Update employee with ${id}. Maybe employee not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({message: "Error Update employee information"})
        })
    
}

// // Delete a employee with specified employee id in the request

exports.delete = (req,res)=>{
    const id = req.params.id;
    Employeedb.findByIdAndDelete(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message: `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message: "Employee was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete employee with id=" + id
            });
        });
}
