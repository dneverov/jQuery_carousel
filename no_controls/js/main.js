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
})
