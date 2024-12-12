const express = require("express")
port = 5000
const app = express()

app.get("/",(req,res)=>{
    res.json("Hello world from docker and node js")
})

app.listen(port,()=>{
       console.log("App is listening on port:",port)
})