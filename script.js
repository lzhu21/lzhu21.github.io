window.addEventListener('scroll', () => {
  var el, rate;
  var prefix = "layer";
  let parent = document.getElementById('parallax-container');
  let children = parent.getElementsByTagName('div');
  let fish = document.getElementById('fish');
  let fishb = document.getElementById('fishb');
  let fishc = document.getElementById('fishc');
  let fishd = document.getElementById('fishd');
  
  for(var i = 0; el = document.getElementById(prefix + i); i++) {
    rate = window.pageYOffset * i / (children.length * 2);
    if (i == 3) {
      el.style.transform = 'translateY(-' + 2 * rate + 'px)';
      fish.style.transform = 'rotate(' + 2 * rate + 'deg)';
      el.style.opacity = 1 - (0.75 * window.pageYOffset / el.scrollHeight);
      fishb.style.transform = 'rotate(' + (-rate) + 'deg)';
      fishb.style.opacity = 1 - (window.pageYOffset / el.scrollHeight);
      fishc.style.transform = 'rotate(' + (-rate) + 'deg)';
      fishc.style.opacity = 1 - (window.pageYOffset / el.scrollHeight);
      fishd.style.transform = 'rotate(' + (rate) + 'deg)';
      fishd.style.opacity = 1 - (window.pageYOffset / el.scrollHeight);
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
