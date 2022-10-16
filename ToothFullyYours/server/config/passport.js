const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

//Load User Model
const NewUserdb = require('../model/login_model')

module.exports = function(passport){
    passport.use(
        new LocalStrategy({ usernameField: 'email'}, (email, password, done) =>{
            //Match User

            NewUserdb.findOne({p_email: email})
            .then(user =>{
                if(!user){
                    return done(null, false, { message: "That Email is not Registered"})
                }

                //Match Password    

                bcrypt.compare(password, user.p_password, (err, isMatch) =>{
                    if(err) throw err;

                    if(isMatch){
                        return done(null, user);
                    } else{
                        return done(null, false, {message: "Password Incorrect"}); 
                    }
                })
            })
            .catch(err => console.log(err))
        })
    )

    passport.serializeUser((user, done)=>{
        done(null, user.id);
    });

    passport.deserializeUser((id, done)=>{
        NewUserdb.findById(id, (err, user) =>{
            done(err, user);
        });
    });
}