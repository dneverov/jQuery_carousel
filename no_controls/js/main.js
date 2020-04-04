$(document).ready(function(){
  // We will write all our code here

  // 3 sec
  var interval = window.setInterval(rotateSlides, 3000);

  function rotateSlides(){
    // animation will go here
    var $firstSlide = $('#carousel').find('div:first');
    var width = $firstSlide.width();

    $firstSlide.animate({marginLeft: -width}, 1000, function(){
      // What to do after the animation
      var $lastSlide = $('#carousel').find('div:last');
      $lastSlide.after($firstSlide);
      $firstSlide.css({marginLeft: 0});
    })
  }

  // Arrow Controls
  $('#left-arrow').click(previousSlide);
  $('#right-arrow').click(nextSlide);
  $('.slide-image').click(nextSlide);

  function nextSlide(){
    // Go to next slide
    window.clearInterval(interval);
    var $currentSlide = $('#carousel').find('div:first');
    var width = $currentSlide.width();

    $currentSlide.animate({marginLeft: -width}, 1000, function(){
      // What to do after the animation
      var $lastSlide = $('#carousel').find('div:last');
      $lastSlide.after($currentSlide);
      $currentSlide.css({marginLeft: 0});
      interval = window.setInterval(rotateSlides, 3000);
    })
  }

  function previousSlide(){
    // Go to previous slide
    window.clearInterval(interval);
    var $currentSlide = $('#carousel').find('div:first');
    var width = $currentSlide.width();
    var $previousSlide = $('#carousel').find('div:last');
    $previousSlide.css({marginLeft: -width});
    $currentSlide.before($previousSlide);
    $previousSlide.animate({marginLeft: 0}, 1000, function(){
      // What to do after the animation
      interval = window.setInterval(rotateSlides, 3000);
    });
  }
})
