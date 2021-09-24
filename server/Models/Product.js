const mongoose=require('mongoose')
const schema=mongoose.Schema

const productSchema=new schema ({
    title:{type:String,required:true},
    description:{type:String},
    imageURL:{type:String, data: Buffer
        
    }
   
})

module.exports=mongoose.model('Product',productSchema)