// Manipulatin styles using jQuery

// adding TWO classes !
$("h1").addClass("big-title margin-50");

//Manipulating text using jQuery
$("button").text("Don't Click Me");
$("button").html("<em>Hey</em>");

//Manipulating attributes using jQuery
$("a").attr("href", "https://www.yahoo.com");

//Adding event listeners using jQuery
$("h1").click(function() {
    $("h1").css("color","purple");
})

$("button").click(function() {
    $("h1").css("color","purple");
});

$(document).keypress(function(event) {
    $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
    $("h1").css("color","purple");
});

//Adding and removing elements using jQuery
$("h1").before("<button>Before</button>");
$("h1").after("<button>After</button>");
$("h1").prepend("<button>Prepend</button>");
$("h1").append("<button>Append</button>");

//Website Animation using jQuery

$("button").on("click", function() {
//    $("h1").fadeToggle();
//    $("h1").slideToggle();
//    $("h1").animate({opacity: 0.5});
// Chaining animations is possible
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});