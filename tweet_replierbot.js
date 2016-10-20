console.log('This replier bot is starting');

var Twit = require ('twit');

var config = require ('./config');
var T = new Twit(config);

//Setting up a user stream
var stream = T.stream('user');
//Anytime someone follows me
stream.on('tweet', tweetEvent);

function tweetEvent (eventMsg){
	var replyto = eventMsg.in_reply_to_screen_name;
	var text = eventMsg.text;
	var from = eventMsg.user.screen_name;

	console.log(replyto + ' '+ from);

	if (replyto === 'xiweii_'){
		var newtweet = '@'+from +'thank you for tweeting me!',
		tweetIt(newtweet);
	}
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