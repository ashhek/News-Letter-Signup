//jshint esversion 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

//app.use(express.static("public"));
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html");
})
app.post("/", function(req,res){
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.eml;

    console.log(firstName , lastName , email);
})

app.listen(3000, function(){
    console.log("servrer in running at port 3000");
})