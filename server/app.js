const express=require('express')
const app=express()
const connect=require('./config/connectDB')
const userRouter=require('./Routes/auth')
const productRouter=require('./Routes/Product')


connect()

app.use(express.json())


app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
const port=5000
app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`server running on port ${port}`)
})