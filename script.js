window.addEventListener('scroll', () => {
  var el, rate;
  var prefix = "layer";
  let parent = document.getElementById('parallax-container');
  let children = parent.getElementsByTagName('div');
  
  for(var i = 0; el = document.getElementById(prefix + i); i++) {
    rate = window.pageYOffset * i / children.length;
    if (i == 3) {
      el.style.transform = 'translateY(-' + rate + 'px) rotate(' + (0.75 * rate) + 'deg)';
      el.style.opacity = 1 - (2 * window.pageYOffset / el.scrollHeight);
    } else if (i != 3) {
      el.style.transform = 'translateY(-' + rate + 'px)';
    }
  }
}, false)

 $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.here').offset().top }, 'slow');
      return false;
    });
  });