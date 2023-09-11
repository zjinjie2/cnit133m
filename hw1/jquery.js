$(document).ready(function () {
    $("button").click(function () {
        $("h1").css("color", "green");
        $("h1").animate({
            "font-size": "+=1rem"
        }, 3000);
        $("h1").animate({
            "font-size": "-=1rem"
        }, 3000);
        $("img").css("border", "2px solid rgb(27, 9, 94)");
        var timer = setTimeout(function () {
            $("h1").css("color", "black")
        }, 5000);
    });
});