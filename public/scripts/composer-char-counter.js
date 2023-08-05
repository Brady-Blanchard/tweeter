$(document).ready(function() {
  console.log("the DOM is ready");
  // event listener function for counting the char limit for new tweets
  $("#tweet-text").on("input", function() {
    const counter =  140 - $(this).val().length;
    if (counter < 0) {
      $(".counter").css("color", "red")
      $(".counter").text(counter.toString())
    } else {
      $(".counter").css("color", "#545149")
      $(".counter").text(counter.toString())
    }
  })
});