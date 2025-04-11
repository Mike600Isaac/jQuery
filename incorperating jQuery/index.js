$("h1").css("color", "red");

$("button").css("color", "purple");

$("h1").click(function () {
    $("h1").css("color", "purple");
})

//Others like multiple tags which may need for loop
$("button").click(function () {
    $("h1").css("color", "purple");
});

$(document).keypress(function (event) {
    $("h1").text(event.key);
})