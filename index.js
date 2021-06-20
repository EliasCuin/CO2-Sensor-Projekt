const express = require("express")
const app = express()
var path = require("path");
var bodyParser = require("body-parser")
const fs = require('fs');

// database vars:

var dmotivation;

var mitglied_1_name;
var mitglied_1_rolle;
var mitglied_1_text;

var mitglied_2_name;
var mitglied_2_rolle;
var mitglied_2_text;

var mitglied_3_name;
var mitglied_3_rolle;
var mitglied_3_text;

var mitglied_4_name;
var mitglied_4_rolle;
var mitglied_4_text;

var mitglied_5_name;
var mitglied_5_rolle;
var mitglied_5_text;

var mitglied_6_name;
var mitglied_6_rolle;
var mitglied_6_text;

// ------------- redis ----------------
const redis = require('redis');
const client = redis.createClient({
    host: 'redis-12118.c135.eu-central-1-1.ec2.cloud.redislabs.com',
    port: 12118,
    password: 'mabyst13579'
});

client.on("connect",((error)=>{
  console.log("Connected to database")
}))
client.on('error', err => {
    console.log('Error ' + err);
});


//client.set("channelName","test",redis.print);

//client.get("channelName",function(error,res){
//  console.log(res);
//});

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


app.get("/about",(req, res) => {
  client.get("motivation",function(error,res){dmotivation = res});
  
  client.get("mitglied_1_name",function(error,res){mitglied_1_name = res});
  client.get("mitglied_1_rolle",function(error,res){mitglied_1_rolle = res});
  client.get("mitglied_1_text",function(error,res){mitglied_1_text = res});

  client.get("mitglied_2_name",function(error,res){mitglied_2_name = res});
  client.get("mitglied_2_rolle",function(error,res){mitglied_2_rolle = res});
  client.get("mitglied_2_text",function(error,res){mitglied_2_text = res});

  client.get("mitglied_3_name",function(error,res){mitglied_3_name = res});
  client.get("mitglied_3_rolle",function(error,res){mitglied_3_rolle = res});
  client.get("mitglied_3_text",function(error,res){mitglied_3_text = res});

  client.get("mitglied_4_name",function(error,res){mitglied_4_name = res});
  client.get("mitglied_4_rolle",function(error,res){mitglied_4_rolle = res});
  client.get("mitglied_4_text",function(error,res){mitglied_4_text = res});

  client.get("mitglied_5_name",function(error,res){mitglied_5_name = res});
  client.get("mitglied_5_rolle",function(error,res){mitglied_5_rolle = res});
  client.get("mitglied_5_text",function(error,res){mitglied_5_text = res});
  
  client.get("mitglied_6_name",function(error,res){mitglied_6_name = res});
  client.get("mitglied_6_rolle",function(error,res){mitglied_6_rolle = res});
  client.get("mitglied_6_text",function(error,res){mitglied_6_text = res});

  
  res.render(__dirname + "/" + "frontend/about/about",{
  motivation:dmotivation,

  mitglied_1_name:mitglied_1_name,
  mitglied_1_rolle:mitglied_1_rolle,
  mitglied_1_text:mitglied_1_text,

  mitglied_2_name:mitglied_2_name,
  mitglied_2_rolle:mitglied_2_rolle,
  mitglied_2_text:mitglied_2_text,

  mitglied_3_name:mitglied_3_name,
  mitglied_3_rolle:mitglied_3_rolle,
  mitglied_3_text:mitglied_3_text,

  mitglied_4_name:mitglied_4_name,
  mitglied_4_rolle:mitglied_4_rolle,
  mitglied_4_text:mitglied_4_text,

  mitglied_5_name:mitglied_5_name,
  mitglied_5_rolle:mitglied_5_rolle,
  mitglied_5_text:mitglied_5_text,

  mitglied_6_name:mitglied_6_name,
  mitglied_6_rolle:mitglied_6_rolle,
  mitglied_6_text:mitglied_6_text

});  })

app.get("/login/pwd=1932756210",(req, res) => {res.send('<b> Stats vom Backend mabyst server </b>: <br><br> <p>Views seit dem Neustart des Servers:</p> '+tempCounter +'  <p>Letzte registrierte IP-Adresse: <br><br>'+ ip+'</p>');})

app.get("/aofdhvbawes-dashboard-1",(req, res) => {

  res.render(__dirname + "/" + "frontend/frontend-dashboard/helpdash")
})


app.get("/aofdhvbawes-dashboard",(req, res) => {
  client.get("motivation",function(error,res){dmotivation = res});
  
  client.get("mitglied_1_name",function(error,res){mitglied_1_name = res});
  client.get("mitglied_1_rolle",function(error,res){mitglied_1_rolle = res});
  client.get("mitglied_1_text",function(error,res){mitglied_1_text = res});

  client.get("mitglied_2_name",function(error,res){mitglied_2_name = res});
  client.get("mitglied_2_rolle",function(error,res){mitglied_2_rolle = res});
  client.get("mitglied_2_text",function(error,res){mitglied_2_text = res});

  client.get("mitglied_3_name",function(error,res){mitglied_3_name = res});
  client.get("mitglied_3_rolle",function(error,res){mitglied_3_rolle = res});
  client.get("mitglied_3_text",function(error,res){mitglied_3_text = res});

  client.get("mitglied_4_name",function(error,res){mitglied_4_name = res});
  client.get("mitglied_4_rolle",function(error,res){mitglied_4_rolle = res});
  client.get("mitglied_4_text",function(error,res){mitglied_4_text = res});

  client.get("mitglied_5_name",function(error,res){mitglied_5_name = res});
  client.get("mitglied_5_rolle",function(error,res){mitglied_5_rolle = res});
  client.get("mitglied_5_text",function(error,res){mitglied_5_text = res});
  
  client.get("mitglied_6_name",function(error,res){mitglied_6_name = res});
  client.get("mitglied_6_rolle",function(error,res){mitglied_6_rolle = res});
  client.get("mitglied_6_text",function(error,res){mitglied_6_text = res});

  res.render(__dirname + "/" + "frontend/frontend-dashboard/modmot",{
  motivation:dmotivation,

  mitglied_1_name:mitglied_1_name,
  mitglied_1_rolle:mitglied_1_rolle,
  mitglied_1_text:mitglied_1_text,
  
  mitglied_2_name:mitglied_2_name,
  mitglied_2_rolle:mitglied_2_rolle,
  mitglied_2_text:mitglied_2_text,

  mitglied_3_name:mitglied_3_name,
  mitglied_3_rolle:mitglied_3_rolle,
  mitglied_3_text:mitglied_3_text,

  mitglied_4_name:mitglied_4_name,
  mitglied_4_rolle:mitglied_4_rolle,
  mitglied_4_text:mitglied_4_text,

  mitglied_5_name:mitglied_5_name,
  mitglied_5_rolle:mitglied_5_rolle,
  mitglied_5_text:mitglied_5_text,

  mitglied_6_name:mitglied_6_name,
  mitglied_6_rolle:mitglied_6_rolle,
  mitglied_6_text:mitglied_6_text
}) })


app.get("/aofdhvbawes-dashboardreg",(req, res) => {res.render(__dirname + "/" + "frontend/frontend-dashboard/modmot") 

    if(String(req.query.topic) == "motivation"){

      client.set("motivation",String(req.query.text),redis.print);
      client.get("mitglied_1_text",function(error,res){console.log("here" +String(res))});
      res.render(__dirname + "/" + "frontend/frontend-dashboard/erfolgreich");
    }
    else if(String(req.query.topic) == "mitglied_1"){
      client.set("mitglied_1_name",String(req.query.name),redis.print); 
      client.set("mitglied_1_rolle",String(req.query.rolle),redis.print);
      client.set("mitglied_1_text",String(req.query.text),redis.print);
      //console.log("test :" + String(req.query.text)),
      

      res.render(__dirname + "/" + "frontend/frontend-dashboard/erfolgreich");
    }
    else if(String(req.query.topic) == "mitglied_2"){
      client.set("mitglied_2_name",String(req.query.name),redis.print);
      client.set("mitglied_2_rolle",String(req.query.rolle),redis.print);
      client.set("mitglied_2_text",String(req.query.text),redis.print);
      res.render(__dirname + "/" + "frontend/frontend-dashboard/erfolgreich");
    }
    else if(String(req.query.topic) == "mitglied_3"){
      client.set("mitglied_3_name",String(req.query.name),redis.print);
      client.set("mitglied_3_rolle",String(req.query.rolle),redis.print);
      client.set("mitglied_3_text",String(req.query.text),redis.print);
      res.render(__dirname + "/" + "frontend/frontend-dashboard/erfolgreich");
    }
    else if(String(req.query.topic) == "mitglied_4"){
      client.set("mitglied_4_name",String(req.query.name),redis.print);
      client.set("mitglied_4_rolle",String(req.query.rolle),redis.print);
      client.set("mitglied_4_text",String(req.query.text),redis.print);
      res.render(__dirname + "/" + "frontend/frontend-dashboard/erfolgreich");
    }
    else if(String(req.query.topic) == "mitglied_5"){
      client.set("mitglied_5_name",String(req.query.name),redis.print);
      client.set("mitglied_5_rolle",String(req.query.rolle),redis.print);
      client.set("mitglied_5_text",String(req.query.text),redis.print);
      res.render(__dirname + "/" + "frontend/frontend-dashboard/erfolgreich");
    }
    else if(String(req.query.topic) == "mitglied_6"){
      client.set("mitglied_6_name",String(req.query.name),redis.print);
      client.set("mitglied_6_rolle",String(req.query.rolle),redis.print);
      client.set("mitglied_6_text",String(req.query.text),redis.print);
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