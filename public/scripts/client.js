/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  const createTweetElement = function(tweetObj) {
    const name = tweetObj.user.name;
    const avatar = tweetObj.user.avatars;
    const handle = tweetObj.user.handle;
    const content = tweetObj.content.text;
    const time = tweetObj.created_at;
    return  `<article class="tweet">
              <header>
                <span class="name"><img src=${avatar}>${name}</span>
                <span class="username">${handle}</span>
              </header>
              <p>${content}</p>
              <footer>
                <span>${time}</span>
                <span>
                  <i class="fa-solid fa-flag"></i>
                  <i class="fa-solid fa-retweet"></i>
                  <i class="fa-solid fa-heart"></i>
                </span>
              </footer>
            </article>`
  };

  const renderTweets = function(tweetsArr) {
    let $tweet = '';
    for (const tweet of tweetsArr) {
      $tweet += createTweetElement(tweet);
    }
    return $('.container').append($tweet);
  };

  // fake data
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  renderTweets(data);
});