const Product=require('../Models/Product')


//add product

exports.addProduct=async(req,res)=>{
    const {title,description}=req.body
    // const imageURL=req.file.filename
    try {
      
       
        const newproduct=new Product({
           ...req.body,
            // imageURL:imageURL
        })
        // if(req.files){
        //     let path=''
        //     req.files.forEach(function(files,index,arr){
        //     path=path+files.path+','
        //     }
                
        //     );
        //     path=path.substring(0,path,lastIndexOf(","))
        //     newproduct.imageURL=path
        // }
        await newproduct.save()
        res.status(200).send({msg:"product added",newproduct})
    } catch (error) {
        res.status(500).send({msg:"impossible to add product"})
    }
}
exports.getProduct=async(req,res)=>{
    const {ID}=req.params
    try {
        const productf=await Product.findById(ID)
        res.status(200).send({msg:"product",productf})
    } catch (error) {
        res.status(500).send({msg:"impossible to get product",error})
    }
}

exports.updateProduct=async(req,res)=>{
  const {ID}=req.params
    try {
       const product=await Product.findByIdAndUpdate(ID,{$set:{...req.body}})
       res.status(200).send({msg:"product updated"})
    } catch (error) {
        res.status(500).send({msg:"impossible to update product",error})
    }
}

exports.deleteProduct=async(req,res)=>{
    const {ID}=req.params
    try {
        const product=await Product.findByIdAndDelete({_id:ID})
        res.status(200).send({msg:"product deleted"})
    } catch (error) {
        res.status(500).send({msg:"impossible to delete product",error})
    }
}

exports.getallProduct=async(req,res)=>{

    try {
        const products= await Product.find()
        res.status(200).send({msg:"all products",products})
    } catch (error) {
        res.status(500).send({msg:"impossible to get all contacts",error})
    }
}