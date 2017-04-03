$(".dropdown").click(function(e){
    $(".dropdown-content").show();
    $(".dropbtn").toggleClass("active");
     e.stopPropagation();
});

$(".dropdown").click(function(e){
    e.stopPropagation();
});

$(document).click(function(){
    $(".dropdown-content").hide();
    $(".dropbtn").toggleClass("active");
});