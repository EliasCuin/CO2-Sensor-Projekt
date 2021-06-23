
const express = require("express")
const app = express()
const redis = require('redis');


let vars = require("./variables.js")
exports.motivationRefresh = function(client) {
    client.get("motivation",function(error,res){vars.about.dmotivation = res});  // refresh varuables
  
    client.get("mitglied_1_name",function(error,res){vars.about.mitglied_1_name = res});
    client.get("mitglied_1_rolle",function(error,res){vars.about.mitglied_1_rolle = res});
    client.get("mitglied_1_text",function(error,res){vars.about.mitglied_1_text = res});
  
    client.get("mitglied_2_name",function(error,res){vars.about.mitglied_2_name = res});
    client.get("mitglied_2_rolle",function(error,res){vars.about.mitglied_2_rolle = res});
    client.get("mitglied_2_text",function(error,res){vars.about.mitglied_2_text = res});
  
    client.get("mitglied_3_name",function(error,res){vars.about.mitglied_3_name = res});
    client.get("mitglied_3_rolle",function(error,res){vars.about.mitglied_3_rolle = res});
    client.get("mitglied_3_text",function(error,res){vars.about.mitglied_3_text = res});
  
    client.get("mitglied_4_name",function(error,res){vars.about.mitglied_4_name = res});
    client.get("mitglied_4_rolle",function(error,res){vars.about.mitglied_4_rolle = res});
    client.get("mitglied_4_text",function(error,res){vars.about.mitglied_4_text = res});
  
    client.get("mitglied_5_name",function(error,res){vars.about.mitglied_5_name = res});
    client.get("mitglied_5_rolle",function(error,res){vars.about.mitglied_5_rolle = res});
    client.get("mitglied_5_text",function(error,res){vars.about.mitglied_5_text = res});
    
    client.get("mitglied_6_name",function(error,res){vars.about.mitglied_6_name = res});
    client.get("mitglied_6_rolle",function(error,res){vars.about.mitglied_6_rolle = res});
    client.get("mitglied_6_text",function(error,res){vars.about.mitglied_6_text = res});

    console.log("refreshing...");
}

exports.helpRefresh = function(client) {

    client.get("frage_1",function(error,res){vars.help.frage_1 = res});  // refresh varuables
    client.get("antwort_1",function(error,res){vars.help.antwort_1 = res});

    client.get("frage_2",function(error,res){vars.help.frage_2 = res});  // refresh varuables
    client.get("antwort_2",function(error,res){vars.help.antwort_2= res});

    client.get("frage_3",function(error,res){vars.help.frage_3 = res});  // refresh varuables
    client.get("antwort_3",function(error,res){vars.help.antwort_3 = res});

    client.get("frage_4",function(error,res){vars.help.frage_4 = res});  // refresh varuables
    client.get("antwort_4",function(error,res){vars.help.antwort_4= res});

    client.get("frage_5",function(error,res){vars.help.frage_5 = res});  // refresh varuables
    client.get("antwort_5",function(error,res){vars.help.antwort_5 = res});

    client.get("frage_6",function(error,res){vars.help.frage_6 = res});  // refresh varuables
    client.get("antwort_6",function(error,res){vars.help.antwort_6 = res});

    client.get("frage_7",function(error,res){vars.help.frage_7 = res});  // refresh varuables
    client.get("antwort_7",function(error,res){vars.help.antwort_7 = res});

    client.get("frage_8",function(error,res){vars.help.frage_8 = res});  // refresh varuables
    client.get("antwort_8",function(error,res){vars.help.antwort_8 = res});

    client.get("frage_9",function(error,res){vars.help.frage_9 = res});  // refresh varuables
    client.get("antwort_9",function(error,res){vars.help.antwort_9 = res});




}


