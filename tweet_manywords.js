console.log('This replier bot is starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var exec = require('child_process').exec;
var fs = require('fs');
//Setting up a user stream
var stream = T.stream('user');
//Anytime someone follows me
stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg) {
    var replyto = eventMsg.in_reply_to_screen_name;
    var from= eventMsg.user.screen_name;

    console.log(replyto + ' ' + from);
    if (replyto === 'themoretocome') {
        var newtweet = '@'+from +'These are your very unique 1000words from the bible!';
        postImage(newtweet);
    }
}

function postImage(txt) {
    var cmd = 'manywords/manywords';
    exec(cmd, processing);

    function processing() {
        var filename = 'manywords/output.png';
        var params = {
            encoding: 'base64'
        }
        var b64 = fs.readFileSync(filename, params);

        T.post('media/upload', {
            media_data: b64
        }, uploaded);

        function uploaded(err, data, response) {
            var id = data.media_id_string;
            var text = {
                status: txt,
                media_ids: [id]
            }
            T.post('statuses/update', text, added);

            function added(err, data, response) {
                if (err) {
                    console.log('something went wrong!');
                } else {
                    console.log('This worked!');
                }
            }
        }
    }
}

// function tweetIt(txt) {
//     var tweet = {
//         status: txt
//     }

//     T.post('statuses/update', tweet, tweeted);

//     function tweeted(err, data, response) {
//         if (err) {
//             console.log('something went wrong!');
//         } else {
//             console.log('This worked!');
//         }
//     }
// }
