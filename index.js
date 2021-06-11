const express = require("express")
const app = express()

app.use(express.static("frontend/co2 Sensor"))
app.use(express.static("frontend/hilfe"))

var tempCounter = 0;
var ip = "Noch keine Adresse Registriert";

app.use(express.static("frontend"))

app.get("/",(req, res) => {
    res.sendFile(__dirname + "/" + "frontend/home/home.html");
    tempCounter++;
    ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
})

app.get("/hilfe",(req, res) => {res.sendFile(__dirname + "/" + "frontend/hilfe/hilfe.html"); })
     
app.get("/home",(req, res) => {res.sendFile(__dirname + "/" + "frontend/home/home.html");  }) 

app.get("/kaufen",(req, res) => {res.sendFile(__dirname + "/" + "frontend/kaufen/kaufen.html"); })
     
app.get("/sensor",(req, res) => {res.sendFile(__dirname + "/" + "frontend/co2 Sensor/kaufen.html"); })
     
app.get("/sensor",(req, res) => {res.sendFile(__dirname + "/" + "frontend/co2 Sensor/kaufen.html"); })

app.get("/login/pwd=1932756210",(req, res) => {res.send('<b> Stats vom Backend mabyst server </b>: <br><br> <p>Views seit dem Neustart des Servers:</p> '+tempCounter +'  <p>Letzte registrierte IP-Adresse: <br><br>'+ ip+'</p>');})

app.listen((process.env.PORT || 5000), function(){
    console.log('listening on *:5000');
  });

app.use(function (req,res,next){
	res.status(404).sendFile(__dirname + "/" + "frontend/404.html");
});