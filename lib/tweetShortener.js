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

    return tweet.length > 140 ? this.wordSubstituter(tweet) : tweet;

  },
  shortenedTruncator: function(tweet){
    var shortened_tweet = this.selectiveShortener(tweet);

    return shortened_tweet.length > 140 ? shortened_tweet.slice(0,137) + "..." : shortened_tweet;
  }
};


