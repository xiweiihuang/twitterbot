console.log('This bot is starting');

var Twit = require ('twit');

var config = require ('./config');
var T = new Twit(config);

var tweet = {
	status: '#livecoding from node.js!',
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
if (err){
  console.log('something went wrong!');
}
else{
   console.log('It Worked!');
}
}

 