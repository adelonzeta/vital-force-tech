$(document).ready(function () {
  $("main article a").click(function () {
    $(this).siblings(".hidden").removeClass("hidden");
    $(this).hide();
  });
});
