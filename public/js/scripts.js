$(document).ready(function () {
  $("main article .readmore").click(function () {
    $(this).siblings(".readmore-container").css("height","auto");
    $(this).addClass("hidden");
    $(this).siblings(".readless").removeClass("hidden");
  });
  $("main article .readless").click(function () {
    $(this).siblings(".readmore-container").css("height","197px");
    $(this).addClass("hidden");
    $(this).siblings(".readmore").removeClass("hidden");
  });
  var currentURL = window.location.href
});
