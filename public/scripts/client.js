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

  // event listener for new tweets form
  $("form").on("submit", function(event) {
    event.preventDefault();
      const serializedData = $(this).serialize();
      $.ajax({
        url: "/tweets",
        method: "POST",
        data: serializedData,
        success: function() {
          console.log(serializedData)
        },
        error: function() {

        }
      })
  })

  // function for fetching tweets from the http://localhost:8080/tweets page
  const loadTweets = function() {
    $.ajax({
      url: "/tweets",
      method: "GET",
      success: function(res) {
        renderTweets(res);
        console.log(res)
      },
      error: function(err) {

      }
    })
  }

  loadTweets();
});