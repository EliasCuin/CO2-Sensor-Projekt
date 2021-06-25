const express = require("express")
const app = express()
var path = require("path");
var bodyParser = require("body-parser")
const fs = require('fs');
let dm = require("./database_manager.js")
let vars = require("./variables.js")

// #region redis connect stuff
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

// #endregion

//#region app.use and app.set + view engine stuff
app.use(express.static("frontend"))
app.use(express.static("frontend/co2 Sensor"))
app.use(express.static("frontend/hilfe"))
app.use(express.static("frontend/home/newHome2"))


app.set("view engine","ejs");
app.set("views", path.join(__dirname,"frontend/frontend-dashboard"));
app.set("views", path.join(__dirname,"frontend/co2 Sensor"));
app.set("views", path.join(__dirname,"frontend/hilfe"));
app.set("views", path.join(__dirname,"frontend"));
app.set("views", path.join(__dirname,"frontend/home/newHome2"));

//#endregion

//#region a few variables

var tempCounter = 0;
var ip = "Noch keine Adresse Registriert";

//#endregion variables

//#region  main pages
app.get("/",(req, res) => {
    res.render(__dirname + "/" + "frontend/home/home");
    tempCounter++;
    ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
})

app.get("/hilfe",(req, res) => {
  res.render(__dirname + "/" + "frontend/hilfe/hilfe",{
    frage_1:vars.help.frage_1,
    antwort_1:vars.help.antwort_1,

    frage_2:vars.help.frage_2,
    antwort_2:vars.help.antwort_2,

    frage_3:vars.help.frage_3,
    antwort_3:vars.help.antwort_3,

    frage_4:vars.help.frage_4,
    antwort_4:vars.help.antwort_4,

    frage_5:vars.help.frage_5,
    antwort_5:vars.help.antwort_5,

    frage_6:vars.help.frage_6,
    antwort_6:vars.help.antwort_6,

    frage_7:vars.help.frage_7,
    antwort_7:vars.help.antwort_7,

    frage_8:vars.help.frage_8,
    antwort_8:vars.help.antwort_8,

    frage_9:vars.help.frage_9,
    antwort_9:vars.help.antwort_9,
  }); 

})
     
app.get("/home",(req, res) => {res.render(__dirname + "/" + "frontend/home/home"); });

app.get("/beispielHome-1",(req, res) => {res.render(__dirname + "/" + "frontend/home/newHome"); });

app.get("/beispielHome-2",(req, res) => {res.render(__dirname + "/" + "frontend/home/newHome2/home2");});

app.get("/test",(req, res) => {res.render(__dirname + "/" + "frontend/home/newHome2/test");});

app.get("/kaufen",(req, res) => {res.render(__dirname + "/" + "frontend/kaufen/kaufen"); })
     
app.get("/sensor",(req, res) => {res.render(__dirname + "/" + "frontend/co2 Sensor/kaufen"); })

app.get("/about",(req, res) => {
  dm.motivationRefresh(client);
  res.render(__dirname + "/" + "frontend/about/about",{
  
  motivation:vars.about.dmotivation,

  mitglied_1_name:vars.about.mitglied_1_name,         // set variables to html page
  mitglied_1_rolle:vars.about.mitglied_1_rolle,
  mitglied_1_text:vars.about.mitglied_1_text,  

  mitglied_2_name:vars.about.mitglied_2_name,
  mitglied_2_rolle:vars.about.mitglied_2_rolle,
  mitglied_2_text:vars.about.mitglied_2_text,

  mitglied_3_name:vars.about.mitglied_3_name,
  mitglied_3_rolle:vars.about.mitglied_3_rolle,
  mitglied_3_text:vars.about.mitglied_3_text,

  mitglied_4_name:vars.about.mitglied_4_name,
  mitglied_4_rolle:vars.about.mitglied_4_rolle,
  mitglied_4_text:vars.about.mitglied_4_text,

  mitglied_5_name:vars.about.mitglied_5_name,
  mitglied_5_rolle:vars.about.mitglied_5_rolle,
  mitglied_5_text:vars.about.mitglied_5_text,

  mitglied_6_name:vars.about.mitglied_6_name,
  mitglied_6_rolle:vars.about.mitglied_6_rolle,
  mitglied_6_text:vars.about.mitglied_6_text

});  })

//#endregion

//#region dashboard and website propreties pages
app.get("/login/pwd=1932756210",(req, res) => {res.send('<b> Stats vom Backend mabyst server </b>: <br><br> <p>Views seit dem Neustart des Servers:</p> '+tempCounter +'  <p>Letzte registrierte IP-Adresse: <br><br>'+ ip+'</p>');})

app.get("/aofdhvbawes-dashboard-1",(req, res) => {
  dm.helpRefresh(client);
  res.render(__dirname + "/" + "frontend/frontend-dashboard/helpdash",{
    frage_1:vars.help.frage_1,
    antwort_1:vars.help.antwort_1,

    frage_2:vars.help.frage_2,
    antwort_2:vars.help.antwort_2,

    frage_3:vars.help.frage_3,
    antwort_3:vars.help.antwort_3,

    frage_4:vars.help.frage_4,
    antwort_4:vars.help.antwort_4,

    frage_5:vars.help.frage_5,
    antwort_5:vars.help.antwort_5,

    frage_6:vars.help.frage_6,
    antwort_6:vars.help.antwort_6,

    frage_7:vars.help.frage_7,
    antwort_7:vars.help.antwort_7,

    frage_8:vars.help.frage_8,
    antwort_8:vars.help.antwort_8,

    frage_9:vars.help.frage_9,
    antwort_9:vars.help.antwort_9,
  } )
})


app.get("/aofdhvbawes-dashboard",(req, res) => {  
  dm.motivationRefresh(client);
  
  res.render(__dirname + "/" + "frontend/frontend-dashboard/modmot",{
  motivation:vars.about.dmotivation,

  mitglied_1_name:vars.about.mitglied_1_name,
  mitglied_1_rolle:vars.about.mitglied_1_rolle,
  mitglied_1_text:vars.about.mitglied_1_text,
  
  mitglied_2_name:vars.about.mitglied_2_name,
  mitglied_2_rolle:vars.about.mitglied_2_rolle,
  mitglied_2_text:vars.about.mitglied_2_text,

  mitglied_3_name:vars.about.mitglied_3_name,
  mitglied_3_rolle:vars.about.mitglied_3_rolle,
  mitglied_3_text:vars.about.mitglied_3_text,

  mitglied_4_name:vars.about.mitglied_4_name,
  mitglied_4_rolle:vars.about.mitglied_4_rolle,
  mitglied_4_text:vars.about.mitglied_4_text,

  mitglied_5_name:vars.about.mitglied_5_name,
  mitglied_5_rolle:vars.about.mitglied_5_rolle,
  mitglied_5_text:vars.about.mitglied_5_text,

  mitglied_6_name:vars.about.mitglied_6_name,
  mitglied_6_rolle:vars.about.mitglied_6_rolle,
  mitglied_6_text:vars.about.mitglied_6_text

}) })

app.get("/aofdhvbawes-dashboardreg",(req, res) => {res.render(__dirname + "/" + "frontend/frontend-dashboard/modmot") 


//#region about us
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
//#endregion
//#region help
    else if(String(req.query.topic) == "question_1"){
      client.set("frage_1",String(req.query.question),redis.print);
      client.set("antwort_1",String(req.query.answer),redis.print);
      res.render(__dirname + "/" + "frontend/frontend-dashboard/erfolgreich");
    }
    else if(String(req.query.topic) == "question_2"){
      client.set("frage_2",String(req.query.question),redis.print);
      client.set("antwort_2",String(req.query.answer),redis.print);
      res.render(__dirname + "/" + "frontend/frontend-dashboard/erfolgreich");
    }
    else if(String(req.query.topic) == "question_3"){
      client.set("frage_3",String(req.query.question),redis.print);
      client.set("antwort_3",String(req.query.answer),redis.print);
      res.render(__dirname + "/" + "frontend/frontend-dashboard/erfolgreich");
    }
    else if(String(req.query.topic) == "question_4"){
      client.set("frage_4",String(req.query.question),redis.print);
      client.set("antwort_4",String(req.query.answer),redis.print);
      res.render(__dirname + "/" + "frontend/frontend-dashboard/erfolgreich");
    }
    else if(String(req.query.topic) == "question_5"){
      client.set("frage_5",String(req.query.question),redis.print);
      client.set("antwort_5",String(req.query.answer),redis.print);
      res.render(__dirname + "/" + "frontend/frontend-dashboard/erfolgreich");
    }
    else if(String(req.query.topic) == "question_6"){
      client.set("frage_6",String(req.query.question),redis.print);
      client.set("antwort_6",String(req.query.answer),redis.print);
      res.render(__dirname + "/" + "frontend/frontend-dashboard/erfolgreich");
    }
    else if(String(req.query.topic) == "question_7"){
      client.set("frage_7",String(req.query.question),redis.print);
      client.set("antwort_7",String(req.query.answer),redis.print);
      res.render(__dirname + "/" + "frontend/frontend-dashboard/erfolgreich");
    }
    else if(String(req.query.topic) == "question_8"){
      client.set("frage_8",String(req.query.question),redis.print);
      client.set("antwort_8",String(req.query.answer),redis.print);
      res.render(__dirname + "/" + "frontend/frontend-dashboard/erfolgreich");
    }
    else if(String(req.query.topic) == "question_9"){
      client.set("frage_9",String(req.query.question),redis.print);
      client.set("antwort_9",String(req.query.answer),redis.print);
      res.render(__dirname + "/" + "frontend/frontend-dashboard/erfolgreich");
    }


//#endregion
    else{
      res.send("Made by Students <br> :/ hmmmm Irgendwas ist schiefgelaufen")
    }
})
//#endregion


app.listen((process.env.PORT || 5000), function(){
    console.log('listening on *:5000');
  });

app.use(function (req,res){
	res.status(404).render(__dirname + "/" + "frontend/404");
});



