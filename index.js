
var like = document.querySelector(".home-contact");
var removemE = document.querySelector(".return")

var hamburger = document.querySelector(".menu");
var collapse = document.querySelector(".close");

like.addEventListener("click", function() {
  document.querySelector(".hero").classList.remove("hide")
  document.querySelector(".contactUs").classList.remove("hide")
})


removemE.addEventListener("click", function(){
  document.querySelector(".contactUs").classList.add("hide")
  ducument.querySelector(".home-contact").classList.remove("hide")
})


hamburger.addEventListener("click", function() {
  document.querySelector(".menu").classList.add("hide")
  document.querySelector(".navigate").classList.add("navigation");
})


collapse.addEventListener("click", function() {
  document.querySelector(".navigate").classList.remove("navigation")
  document.querySelector(".menu").classList.remove("hide")
})


// TEXT FROM FREEPICK.COM


