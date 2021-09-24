const mongoose=require('mongoose')
const schema=mongoose.Schema


const userSchema=new schema({
    name:{type:String,required:true},
    lastname:{type:String,required:false},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{ type: String, enum:['Client', 'PP','RH'], required: true , default:"Client"},
    tel:{type:Number,required:true},
    adress:{type:String,required:true}

})
module.exports=mongoose.model('User',userSchema)

