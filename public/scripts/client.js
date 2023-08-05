/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// lets the DOM load before running JS
$(document).ready(function() {
  // function that creates a new tweet element based on a tweet object
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
  // function that renders tweets using by looping over the tweets array
  const renderTweets = function(tweetsArr) {
    let $tweet = '';
    for (const tweet of tweetsArr) {
      $tweet += createTweetElement(tweet);
    }
    return $('.container').append($tweet);
  };

  // fake tweets array data
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

  // event listener for new tweets form
  $("form").on("submit", function(event) {
    event.preventDefault();
      const serializedData = $(this).serialize();
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: serializedData,
        success: function() {
          console.log(serializedData)
        },
        error: function() {

        }
      })
  })
});