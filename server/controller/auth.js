const User = require("../Models/User")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

//desc signup

exports.signUp=async(req,res)=>{
    const {name,email,password,tel,adress,role,lastname}=req.body
    try {
        const findUser=await User.findOne({email})
        if(findUser){
        return res.status(400).send({errors:[{msg:'this email is already exist'}]})
        }
        const user=new User(req.body)
    
        const salt=10
        const hash=await bcrypt.hash(password,salt)
        user.password=hash

        await user.save()
        const payload={
            id:user._id
        }
        const token=  jwt.sign(payload,process.env.key,{ expiresIn: '24h' })
        res.status(200).send({msg:"user register with success",user,token})
    } catch (error) {
      res.status(500).send({errors:[{msg:'impossible to registre'}]})
    }
}
//desc signIn

exports.signIn=async(req,res)=>{
  const{email,password}=req.body
    try {
        const user=await User.findOne({email})
        if(!user){
        return res.status(400).send({errors:[{msg:'incorrect email or password'}]})
        }
        const match=await bcrypt.compare(password,user.password)
        if(!match){
            return res.status(400).send({errors:[{msg:'incorrect email or password'}]})
        }
        const payload={
            id:user._id
        }
        const token=jwt.sign(payload,process.env.key,{expiresIn:'24h'})
        res.status(200).send({msg:"user login with success",user,token})
    } catch (error) {
        res.status(500).send({errors:[{msg:'impossible to login'}]})
    }
}