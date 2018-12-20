
// index page code

$(".topsection").fadeIn(2000, "linear");

$(".section-expand").hover(function(){
  console.log("hovered on title-section");
  $(this).toggleClass("titleHover");
});

$(".section-title").click(function(){
  $(this).siblings(".slideIt").slideToggle();
});

// aboutme page code

$(".aboutPictures").hover(function(){
  $(this).animate({opacity: '1', borderRadius: '0%'}, 800);},
  function() {
  $(this).animate({opacity: '0.55', borderRadius: '100%'}, 800);
});



// testPage code

$("#testTitle").fadeOut().fadeIn().fadeOut().fadeIn(2000);

$("#testTitle").hover(function(){
  console.log("hovered");
  $("#testTitle").toggleClass("titleHover");
});
