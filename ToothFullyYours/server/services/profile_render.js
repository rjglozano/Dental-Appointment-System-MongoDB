// Check

const axios = require('axios');

exports.patientProfile = (req, res) =>{
    res.render('patientProfile', {
        _id: req.user._id, 
        p_name: req.user.p_name, 
        p_username: req.user.p_username, 
        p_email: req.user.p_email,
        p_password: req.user.p_password,
        p_phoneNum: req.user.p_phoneNum,
        p_birthDate:req.user.p_birthDate,  
        p_age:req.user.p_age,  
        p_gender:req.user.p_gender,  
        p_nationality:req.user.p_nationality,  
        p_homeAddress:req.user.p_homeAddress,     
        p_ECFullname:req.user.p_ECFullname,  
        p_ECNumber:req.user.p_ECNumber,  
        p_ECRelationship:req.user.p_ECRelationship

 
    
    });



}

exports.patient = (req, res) => {
    // Make a get request to /api/items
    axios.get('http://localhost:5000/api/patients')
        .then(function(response){
            res.render('patient', { patient : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.update = (req, res) => {
    // Make a get request to /api/items
    axios.get('http://localhost:5000/api/patients',  { params : { id : req.query.id }})
        .then(function(response){
            res.render('update_patientProfile-admin', {user : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}










