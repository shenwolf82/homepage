
function styleChange(){
  document.getElementById("education-table").classList.toggle("education-background");
}
$(".topsection").fadeIn(2000, "linear");

// var educationDown = 139;
// var educationUp = 140;

// calls fading function to make sections slide up and down, requires function to be called in anonymous function to work with scrolling
// $(document).on("scroll",function(){
//   sliding("#education", educationDown, educationUp);
// });
//
// function sliding(slideId, downValue, upValue)
// {
//   //if statements check distance scrolled from top vs variable values to trigger slides
// if($(document).scrollTop() < downValue){
//   $(slideId).slideDown();
// }
// else if($(document).scrollTop() > upValue){
//   $(slideId).slideUp();
// }}
$("#education-button").on("click", function(){
  console.log("Clicked!");
  $("#education").slideToggle();
});
$("#work-button").on("click", function(){
  console.log("Clicked!");
  $("#work").slideToggle();
});
