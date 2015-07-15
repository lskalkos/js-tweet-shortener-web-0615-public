'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){

    var new_tweet = tweet.replace(/\stoo\s/g, " 2 ").replace(/to/g, "2").replace(/\sbe\s/g, " b ").replace(/\sat\s/g, " @ ").replace(/\syou\s/g," u ").replace(/\sand\s/g, " & ").replace(/\sfor\s/gi, " 4 ");

    return new_tweet
  },
  bulkShortener: function(tweets){

    var parent = this;
    var shortened_tweets = [];


    tweets.forEach(function(tweet) {
      shortened_tweets.push(parent.wordSubstituter(tweet));
    });

    return shortened_tweets;
  },
  selectiveShortener: function(tweet){

    if(tweet.length > 140) {
      return this.wordSubstituter(tweet);
    } else {
      return tweet;
    }

  },
  shortenedTruncator: function(tweet){

    var shortened_tweet = this.selectiveShortener(tweet);

    if (shortened_tweet.length > 140) {
      return shortened_tweet.slice(0,137) + "...";
    } else {
      return shortened_tweet
    }

  },
};

//var tweet = "Hey guys, can anyone teach me how to be cool? I really want to be the best at everything, you know what I mean? Tweeting is super fun you guys!!!!";

//var substituded_tweet = "Hey guys, can anyone teach me how 2 b cool? I really want 2 b the best @ everything, u know what I mean? Tweeting is super fun u guys!!!!";
