$(document).ready(function () {
  $("main article .readmore").click(function () {
    var contentHeight = $(this).siblings(".readmore-container").children(".content").height();
    $(this).siblings(".readmore-container").animate({height:contentHeight},500);
    $(this).addClass("hidden");
    $(this).siblings(".readless").removeClass("hidden");
  });
  $("main article .readless").click(function () {
    $(this).siblings(".readmore-container").animate({height:185},500);
    $(this).addClass("hidden");
    $(this).siblings(".readmore").removeClass("hidden");
  });
  var currentURL = window.location.href
  var facebookURL = "http://www.facebook.com/sharer.php?u=" + currentURL;
  var twitterURL = "https://twitter.com/share?url=" + currentURL;
  var googleplusURL = "https://plus.google.com/share?url=" + currentURL;
  var emailURL = "mailto:your@recipient.com?body=" + currentURL;
  $(".facebook").attr("href",facebookURL);
  $(".twitter").attr("href",twitterURL);
  $(".googleplus").attr("href",googleplusURL);
  $(".email").attr("href",emailURL);
  $("#brochure-link").val(currentURL);
  $("#brochure-link ").focus(function () {
    $(this).select();
  });
  new Clipboard('.btn-primary');
  $(".btn-primary").click(function () {
    $(this).attr("disabled","disabled").html("Copied!");
  });
});
