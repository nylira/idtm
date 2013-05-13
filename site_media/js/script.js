$("ul#tour-slides").cycle({
  fx: 'scrollHorz',
  pager: '#tour-slides-pager',
  prev: '#tour-slides-prev',
  next: '#tour-slides-next',
  speed: 500,
  timeout: 10000,
  pause: true,
  pauseOnPagerHover: true
});

$("#section-tour-tabs").tabs();
