$(document).ready(function(){$("main article .readmore").click(function(){$(this).siblings(".readmore-container").css("height","auto"),$(this).addClass("hidden"),$(this).siblings(".readless").removeClass("hidden")}),$("main article .readless").click(function(){$(this).siblings(".readmore-container").css("height","197px"),$(this).addClass("hidden"),$(this).siblings(".readmore").removeClass("hidden")});var a=window.location.href,b="http://www.facebook.com/sharer.php?u="+a,c="https://twitter.com/share?url="+a,d="https://plus.google.com/share?url="+a;$(".facebook").attr("href",b),$(".twitter").attr("href",c),$(".googleplus").attr("href",d)});