const express=require('express')
const { signUp, signIn } = require('../controller/auth')
const { isAuth } = require('../middleware/isAuth')
const router=express.Router()
const {Register,Validator, loginRules}=require('../middleware/validator')

//desc signup
router.post('/signup',Register,Validator,signUp)

//desc signin
 router.post('/signin',loginRules,Validator,signIn)

 //desc user auth

 router.get('/me',isAuth,(req,res)=>res.send({user:req.user}))




module.exports=router