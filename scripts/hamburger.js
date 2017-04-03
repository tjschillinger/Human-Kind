$(".dropdown").click(function(e){
    $(".dropdown-content").show();
    $(".dropbtn").toggleClass("active");
});

$(".dropdown").click(function(e){
    e.stopPropagation();
});

$(document).click(function(){
    $(".dropdown-content").hide();
    $(".dropbtn").removeClass("active");
});