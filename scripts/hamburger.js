$(".dropdown").click(function(e){
    $(".dropdown-content").show();
    $(".dropbtn").addClass("active");
});

$(document).on('click', function(event) {
  if (!$(event.target).closest('.dropbtn').length) {
    $(".dropdown-content").hide();
    $(".dropbtn").removeClass("active");
  }
});

