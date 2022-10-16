// Check

var appointmentRequestdb = require('../model/model')
var Historydb = require('../model/history_model')
var Appointdb = require('../model/appointment_model')

// create and save new appointmentRequest
exports.create = (req,res)=>{
    // validate request

    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    const appointmentRequest = new appointmentRequestdb({
        p_patientID: req.body.p_patientID,
        p_name: req.body.p_name,
        p_email: req.body.p_email,
        p_phoneNum: req.body.p_phoneNum,
        p_ap_date: req.body.p_ap_date,
        p_ap_time: req.body.p_ap_time,
        p_procedure: req.body.p_procedure
      
    })

    // save appointmentRequest in the database

    appointmentRequest
        .save(appointmentRequest)
        .then(data =>{
            // res.send(data)
            res.redirect("/add-appointmentRequest");
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Some error occured while creating a create operation"
            });
        });





}
// retrieve and return all histories/ retreive and return a single appointmentRequest
exports.find = (req,res)=>{

    if(req.query.id){
        const id = req.query.id;
        appointmentRequestdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({message: "Not found appointmentRequest with id" + id})
                }else{
                    res.send(data)
                }
            })
        .catch(err =>{
            res.status(500).send({message: "Error retrieving appointmentRequest with id" + id})
        })

    }else{
        appointmentRequestdb.find()
        .then(appointmentRequest=>{
            res.send(appointmentRequest)
        })
        .catch(err =>{
            res.status(500).send({message:err.message || "Error Occured while retrieving appointmentRequest information"})
        })
    }

  
}



// // Delete a appointmentRequest with specified appointmentRequest id in the request

exports.delete = (req,res)=>{
    const id = req.params.id;
    let isDone = false
    
   if(isDone != true){
    appointmentRequestdb.findById(id, (error,data) =>{
        if (error){
            console.log(error)
        } else {
            const appoint = new Appointdb({
                _id: data._id,
                p_patientID: data.p_patientID,
                p_name: data.p_name,
                p_email: data.p_email,
                p_phoneNum: data.p_phoneNum,
                p_ap_date: data.p_ap_date,
                p_ap_time: data.p_ap_time,
                p_procedure: data.p_procedure
            })
        appoint
        .save(appoint)

        isDone= true
        }
        })}
        
    if (isDone = true){

        appointmentRequestdb.findByIdAndDelete(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message: `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message: "appointmentRequest was deleted successfully!"
                })
            }
        })
        .catch(err =>{  
            res.status(500).send({
                message: "Could not delete appointmentRequest with id=" + id
            });
        })

        isDone = false
    
    }
   
 
   
}


exports.find_appointment = (req,res)=>{

    if(req.query.id){
        const id = req.query.id;
        Appointdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({message: "Not found appointmentRequest with id" + id})
                }else{
                    res.send(data)
                }
            })
        .catch(err =>{
            res.status(500).send({message: "Error retrieving appointmentRequest with id" + id})
        })

    }else{
        Appointdb.find()
        .then(appoint=>{
            res.send(appoint)
        })
        .catch(err =>{
            res.status(500).send({message:err.message || "Error Occured while retrieving appointmentRequest information"})
        })
    }

  
}

exports.delete_appointment = (req,res)=>{
    const id = req.params.id;

    let isDone = false
    
    if(isDone != true){
 

    Appointdb.findById(id, (error,data) =>{
        if (error){
            console.log(error)
        } else {
            const history = new Historydb({
                _id: data._id,
                p_patientID: data.p_patientID,
                p_name: data.p_name,
                p_email: data.p_email,
                p_phoneNum: data.p_phoneNum,
                p_ap_date: data.p_ap_date,
                p_ap_time: data.p_ap_time,
                p_procedure: data.p_procedure,
                p_transNo: data.p_transNo,
                p_toothNo: data.p_toothNo,
                p_amount: data.p_amount
            })
        history
        .save(history)

        isDone = true

        }
        })

    }
     if(isDone = true){



        Appointdb.findByIdAndDelete(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message: `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message: "appointment was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete appointment with id=" + id
            });
        })

        isDone = false
    
    }

   
 
   
}
