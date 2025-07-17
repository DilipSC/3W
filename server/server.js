import express from 'express' 

import 'dotenv/config'



const app = express()

const PORT=process.env.PORT


app.get('/',(req,res)=>{
    res.json({"message":"Hi from server"})
})


app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})