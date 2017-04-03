$(".dropdown").click(function(){
    $(".dropdown-content").toggleClass("hidden");
    $(".dropbtn").toggleClass("active");
});

$(".dropdown-content").click(function(){
    $(".dropdown-content").toggleClass("hidden");
});