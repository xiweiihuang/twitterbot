console.log('This bot is starting');

var Twit = require ('twit');

var config = require ('./config');
var T = new Twit(config);

tweetIt();
//where we schedule the interval time to post something
// setInterval(tweetIt, 1000*20);//1000 is a second

function tweetIt(){

	var randomnum = Math.floor(Math.random()*100);
	var tweet = {
		status:randomnum+'#livecoding from node.js'
	}

	T.post('statuses/update', tweet, tweeted);

 function tweeted(err, data,response){

	if(err){
	console.log('something went wrong!');
	}else{
	console.log('This worked!');
	}
	
 }

}
