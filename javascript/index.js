
function styleChange(){
  document.getElementById("education-table").classList.toggle("education-background");
}
$(".topsection").fadeIn(2000, "linear");
$(document).on("scroll", function() {
  if($(document).scrollTop() > 10){
    $(".topsection").animate({opacity: 0.3});
  }
  else if($(document).scrollTop() === 1){
    $(".topsection").animate({opacity: 1.0});
  }
});

// $("#education").delay(2100).slideDown(900, "linear");

// $("#education").hide();
$(document).on("scroll", function(){
if($(document).scrollTop() < 10){
  $("#education").slideDown();
}
else if($(document).scrollTop() > 11){
  $("#education").slideUp();
}
});
