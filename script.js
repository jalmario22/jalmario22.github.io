$(function() {
    $(".hover-link").hover(
        function() {
            var hoverImg = $(this).data("hover");
            var freshGifUrl = hoverImg + "?t=" + new Date().getTime();
            $(this).find("img").attr("src", freshGifUrl);
        },
        function() {
            var staticImg = $(this).data("static");  
            $(this).find("img").attr("src", staticImg);
        }                         
    );                  
});

$(document).ready(function() {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});