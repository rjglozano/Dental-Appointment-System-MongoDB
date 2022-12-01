var NewUserdb = require('../model/login_model')
var Historydb = require('../model/history_model')
const bcrypt = require("bcrypt")

// create and save new appointmentRequest
exports.create = (req,res)=>{
    // validate request
    const {name, username, email, password, password2} = req.body;
    let errors = []

    NewUserdb.findOne({p_username: username}).then(user =>{
        if(user){
            errors.push({message: "Username is already registered"});
            res.render("register_body", {
                errors, name, username, email, password, password2
            });
    }})

    // Check required fields
    if( !name || !username || !email || !password || !password2){
        errors.push({message: "Please fill in all fields"})
    }

    // Check password match
    if(password !== password2){
        errors.push({message: "Password do not match"})
    }

    if (errors.length > 0){
        res.render("register_body", {
            errors, name, username, email, password, password2
        })
    }

    else{
        NewUserdb.findOne({p_email: email}).then(user =>{
            if(user){
                errors.push({message: "Email is already registered"});
                res.render("register_body", {
                    errors, name, username, email, password, password2
                });
        
            } else{
                const User = new NewUserdb({
                    p_name: req.body.name, 
                    p_username: req.body.username,
                    p_email: req.body.email,
                    p_password: req.body.password,
                    p_phoneNum: '',
                    p_birthDate:'',  
                    p_age: '',  
                    p_gender:'',  
                    p_nationality:'',  
                    p_homeAddress:'',  
                    p_ECFullname:'',  
                    p_ECNumber:'',
                    p_ECRelationship:''
                });

                // new password hash

                bcrypt.genSalt(10, (err, salt)=> bcrypt.hash(User.p_password, salt, (err, hash)=>{
                    if(err) throw err;

                    User.p_password = hash;
                    User.save()
                    .then(user =>{
                        req.flash('success_msg', 'You are now registered!');
                        res.redirect('/login');
                    })
                    .catch(err=> console.log(err))
                }))
            }
           
        })
    }

}


exports.editLoad = async(req, res)=>{

    const id = req.query.id
        const userData = await NewUserdb.findById({_id:id});



    try{

    
        if(userData){
            res.render('update_patientProfile', {user: userData})
        }else{
            res.redirect('/myprofile')
        }

    }catch(error){
        console.log(error.message)
       

    }

    console.log("Hakdog")
}


exports.editLoad2 = async(req, res)=>{

    const id = req.query.id
        const userData = await Historydb.find({p_patientID:id});

    try{

    
        if(userData){
            res.render('patientProfile-history', {user: userData})
        }else{
            res.redirect('/myprofile')
        }

    }catch(error){
        console.log(error.message)
       

    }

    console.log(userData)
}

exports.update = async (req, res)=>{

    // const id = req.user._id

    // const {name, username, email, password, password2} = req.body;
    // let errors = []

    // NewUserdb.findOne({p_username: username}).then(user =>{
    //     if(user){
    //         errors.push({message: "Username is already registered"});
    //         res.render("register_body", {
    //             errors, name, username, email, password, password2
    //         });
    // }})


    try{ 
       
            const userData = await NewUserdb.findByIdAndUpdate({_id:req.body.user_id}, {$set:{
                p_name: req.body.name, 
                p_username: req.body.username, 
                p_email: req.body.email,
                p_phoneNum: req.body.phoneNum,
                p_birthDate:req.body.birthDate,  
                p_age:req.body.age,  
                p_gender:req.body.gender,  
                p_nationality:req.body.nationality,  
                p_homeAddress:req.body.homeAddress,  
                p_ECFullname:req.body.ECFullname,  
                p_ECNumber:req.body.ECNumber,  
                p_ECRelationship:req.body.ECRelationship
            }})
    
            res.redirect('/myprofile')

   


    

    }catch(error){
        console.log(error.message)
    }

}

exports.find = (req,res)=>{

    if(req.query.id){
        const id = req.query.id;
        NewUserdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({message: "Not found user with id" + id})
                }else{
                    res.send(data)
                }
            })
        .catch(err =>{
            res.status(500).send({message: "Error retrieving user with id" + id})
        })

    }else{
        NewUserdb.find()
        .then(user=>{
            res.send(user)
        })
        .catch(err =>{
            res.status(500).send({message:err.message || "Error Occured while retrieving user information"})
        })
    }

  
}

exports.delete = (req,res)=>{
    const id = req.params.id;
    NewUserdb.findByIdAndDelete(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message: `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message: "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}
