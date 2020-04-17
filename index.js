const express = require('express')

const app=express()

app.get("/",(req,res,err)=>{
    res.send("Hi Mitul")
})

app.listen(8080,()=>{
    console.log("Listing on port:8080")
})