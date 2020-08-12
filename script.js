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

 // $(function() {
 //    $('.scroll-down').click (function() {
 //      $('html, body').animate({scrollTop: $('section.here').offset().top }, 'slow');
 //      return false;
 //    });
 //  });

  VanillaTilt.init(document.querySelectorAll(".box"),{
  	max: 20,
  	speed: 600,
    scale: 1.07,
    transition: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    perspective: 600,
    reverse: true,
    gyroscope: true,
    gyroscopeMinAngleX: -45,
    gyroscopeMaxAngleX: 45,
    gyroscopeMinAngleY: -45,
    gyroscopeMaxAngleY: 45,
  });

  $(document).ready(function(){
    $('.carousel').slick({
      slidesToShow: 3,
      dots:true,
      centerMode: true,
      infinite: true,
      variableWidth: true
    });
  });

  var modalImg = document.getElementById("image");
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("open-modal");

  // When the user clicks on the button, open the modal
  $("button").click(function() {
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    var bg = $(this).parent().parent().css('background-image');
    bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
    modalImg.src = bg;
  });


  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
