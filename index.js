const express = require("express")
const app = express()
var path = require("path");
var bodyParser = require("body-parser")
const fs = require('fs');

var dmotivation;


// ------------- redis ----------------
const redis = require('redis');
const client = redis.createClient({
    host: 'redis-12118.c135.eu-central-1-1.ec2.cloud.redislabs.com',
    port: 12118,
    password: 'mabyst13579'
});

client.on("connect",((error)=>{
  console.log("connected")
}))
client.on('error', err => {
    console.log('Error ' + err);
});


client.set("channelName","test",redis.print);

client.get("channelName",function(error,res){
  console.log(res);
});

//redis--------------------------------


app.use(express.static("frontend/co2 Sensor"))
app.use(express.static("frontend/hilfe"))

var tempCounter = 0;
var ip = "Noch keine Adresse Registriert";

app.use(express.static("frontend"))

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"frontend/frontend-dashboard"));
app.set("views", path.join(__dirname,"frontend/co2 Sensor"));
app.set("views", path.join(__dirname,"frontend/hilfe"));
app.set("views", path.join(__dirname,"frontend"));

app.get("/",(req, res) => {
    res.render(__dirname + "/" + "frontend/home/home");
    tempCounter++;
    ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
})

app.get("/hilfe",(req, res) => {res.render(__dirname + "/" + "frontend/hilfe/hilfe"); })
     
app.get("/home",(req, res) => {res.render(__dirname + "/" + "frontend/home/home"); 
});  

app.get("/kaufen",(req, res) => {res.render(__dirname + "/" + "frontend/kaufen/kaufen"); })
     
app.get("/sensor",(req, res) => {res.render(__dirname + "/" + "frontend/co2 Sensor/kaufen"); })
     
app.get("/sensor",(req, res) => {res.render(__dirname + "/" + "frontend/co2 Sensor/kaufen"); })

app.get("/about",(req, res) => {client.get("motivation",function(error,res){dmotivation = res}); res.render(__dirname + "/" + "frontend/about/about",{
  motivation:dmotivation
});  })

app.get("/login/pwd=1932756210",(req, res) => {res.send('<b> Stats vom Backend mabyst server </b>: <br><br> <p>Views seit dem Neustart des Servers:</p> '+tempCounter +'  <p>Letzte registrierte IP-Adresse: <br><br>'+ ip+'</p>');})


app.get("/aofdhvbawes-dashboard",(req, res) => {client.get("motivation",function(error,res){dmotivation = res});res.render(__dirname + "/" + "frontend/frontend-dashboard/modmot",{
  motivation:dmotivation
}) })


app.get("/aofdhvbawes-dashboardreg",(req, res) => {res.render(__dirname + "/" + "frontend/frontend-dashboard/modmot") 

    if(String(req.query.topic) == "motivation"){

      client.set("motivation",String(req.query.text),redis.print);
      res.render(__dirname + "/" + "frontend/frontend-dashboard/erfolgreich");
    }
    else{
      res.send("Made by Students <br> :/ hmmmm Irgendwas ist schiefgelaufen")
    }
})


app.listen((process.env.PORT || 5000), function(){
    console.log('listening on *:5000');
  });

app.use(function (req,res){
	res.status(404).render(__dirname + "/" + "frontend/404");
});