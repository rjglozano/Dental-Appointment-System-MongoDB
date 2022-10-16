// Check

const axios = require('axios');

exports.Request = (req, res) =>{
    // Make a get request to /api/appointmentRequest
    axios.get("http://localhost:5000/api/appointmentRequest")
        .then(function(response){
            res.render('appointmentRequest', {appointmentRequest: response.data});
        })

    .catch(err =>{  
        res.send(err);
    })

}


exports.Appointment = (req, res) =>{
    axios.get("http://localhost:5000/appointment-data")
    .then(function(response){
        res.render('appointment', {appoint: response.data});
    })

.catch(err =>{  
    res.send(err);
})
   
}


