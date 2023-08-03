$(document).ready(function() {
  console.log("the DOM is ready");

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