const functions = require('firebase-functions')
const firebase = require('firebase')
const { db, admin }= require('../utility/admin')




const {validateRegisterData, validateLoginData, reduceUserDetails } =require('../utility/valid')

exports.signUp = functions.https.onRequest((req,res)=>{
   const newUser ={
    email: req.body.email,
    password: req.body.password,
    handle: req.body.handle
   };

   firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then(data =>{
        return res.status(201).json({message: `user ${data.user.uid} signed up successfully`})
    })
    .catch(err => {
        console.error(err);
        return res.status(500).json({error: err.code})
    })
})