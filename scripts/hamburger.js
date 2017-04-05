$(document).ready(function () {
  $("li").click(function () {
    $('li > ul').not($(this).children("ul").toggle()).hide();
    $(".fa.fa-navicon").toggleClass("active");  
  });
});

$(document).on('click',function (e) {
  footerUl = $('ul:first li');
  if (!footerUl.is(e.target) 
      && footerUl.has(e.target).length === 0){
    footerUl.children('ul').hide();
      $(".fa.fa-navicon").removeClass("active"); 
  }
});