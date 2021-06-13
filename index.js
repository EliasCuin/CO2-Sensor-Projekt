const express = require("express")
const app = express()
var path = require("path");
var bodyParser = require("body-parser")
const fs = require('fs');



var config = require('./website-content.json');

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

app.get("/about",(req, res) => {res.render(__dirname + "/" + "frontend/about/about",{
  motivation:config.motivation
});  })

app.get("/login/pwd=1932756210",(req, res) => {res.send('<b> Stats vom Backend mabyst server </b>: <br><br> <p>Views seit dem Neustart des Servers:</p> '+tempCounter +'  <p>Letzte registrierte IP-Adresse: <br><br>'+ ip+'</p>');})


app.get("/aofdhvbawes-dashboard",(req, res) => {res.render(__dirname + "/" + "frontend/frontend-dashboard/modmot",{
  motivation:config.motivation
}) })

app.get("/aofdhvbawes-dashboardreg",(req, res) => {res.render(__dirname + "/" + "frontend/frontend-dashboard/modmot") 

    if(String(req.query.topic) == "motivation"){
      config.motivation = String(req.query.text);
      fs.writeFileSync("website-content.json", JSON.stringify(config));
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