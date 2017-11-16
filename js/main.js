var preloader = document.getElementById("preloader");

function fadeOutnojquery(el) {
  el.style.opacity = 1;
  var intervalPreloader = setInterval(function() {
    el.style.opacity = el.style.opacity - 0.05;
    if (el.style.opacity <= 0.05) {
      clearInterval(intervalPreloader);
      preloader.style.display = "none";
    }
  }, 16);
}
window.onload = function() {
  setTimeout(function() {
    fadeOutnojquery(preloader);
  }, 500);
};

$(window).scroll(function() {
  
});
