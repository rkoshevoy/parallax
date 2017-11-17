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
  var block2 = $('#slidingSlow2'),
      block3 = $('#slidingSlow3'),
      wTop = $(this).scrollTop(),
      wHeight = $(this).height(),
      wBottom = wTop + wHeight,
      elTop2 = block2.offset().top,
      elBottom2 = elTop2 + block2.height(),
      elHeight2 = elBottom2 - elTop2,
      wElDifferent2 = wBottom - elTop2,
      elTop3 = block3.offset().top,
      elBottom3 = elTop3 + block3.height(),
      elHeight3 = elBottom3 - elTop3,
      wElDifferent3 = wBottom - elTop3;

      // console.log(elHeight3);

      $('#slidingSlow1').css({
        'background-position-y': wTop / 4
      });

      if (wBottom >= elTop2) {
        block2.css({
          'background-position-y': '-' + wElDifferent2 / 4 + 'px',
        });
      }

      if (wBottom >= elTop3) {
        block3.css({
          'background-position-y': 'calc(-50vh + ' +  wElDifferent3 / 2 + 'px)'
        });
      }
});
