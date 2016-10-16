console.log('This bot is starting');

var Twit = require ('twit');

var config = require ('./config');
var T = new Twit(config);

//Setting up a user stream
var stream = T.stream('user');
//Anytime someone follows me
stream.on('follow', followed);

function followed (eventMsg){
 var screenName = eventMsg.source.screen_name;
tweetIt('@'+screenName+'Thanks for following xo');

}
 
function tweetIt(txt){
	var tweet = {
		status: txt}
	T.post('statuses/update', tweet, tweeted);

 function tweeted(err, data,response){
	if(err){
	console.log('something went wrong!');
	}else{
	console.log('This worked!');
	}	
 }
}