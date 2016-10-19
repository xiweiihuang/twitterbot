console.log('This replier bot is starting');

var Twit = require ('twit');

var config = require ('./config');
var T = new Twit(config);

//Setting up a user stream
var stream = T.stream('user');
//Anytime someone follows me
stream.on('tweet', tweetEvent);

function tweetEvent (eventMsg){//for me to see what is in that msg 
var fs = require('fs');
var json = JSON.stringify(eventMsg, null,2);
fs.writeFile("tweet.json",json);
}

