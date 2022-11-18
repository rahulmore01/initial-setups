const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("get is working")
})

module.exports = app;