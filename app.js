var express = require("express");
var app = express();
var uniqid = require('uniqid'); 
// var unique = uniqid();
var bodyParser = require('body-parser');
app.use(express.static("public"));
app.use(express.static("resources"));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

var userData=[
    {   
        "name":"Cheny",
        "email":"m@c.com",
        "phone":"9925356579",
        "address":"Shahibaug",
        "sex":"female",
        "age":"28-02-1998",
        "file":"id.jpeg",
        "bike":"MTB"
    },
    {
        "name":"Sunny",
        "email":"m@s.com",
        "phone":"9999999999",
        "address":"Shahibaug",
        "sex":"male",
        "age":"28-02-1998",
        "file":"id2.jpeg",
        "bike":"Hybrid"}
]

app.get('/',function(req,res){
    res.render("home");
});

app.get('/customer',function(req,res){
    res.render("customer");
});

app.post('/rent',function(req,res){
    console.log(req.body.name);
    var uniquid = uniqid.process();
    res.render("rent", {uniquid:uniquid});
});

app.get('/admin',function(req,res){
    res.render("admin", {userData:userData});
});

app.get('/bikes',function(req,res){
    res.render("bikes");
});

app.get('*',function(req,res){
    res.send("Wrong URL. Check once");
});

app.listen(8008,function(){
    console.log("Server has started");
});