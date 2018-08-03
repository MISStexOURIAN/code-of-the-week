$(document).on("scroll", function () {
    if
    ($(document).scrollTop() > 100) {
        $("header").addClass("shrink");
        $('.navs').addClass('moving-navs');
    }
    else {
        $("header").removeClass("shrink");
        $('.navs').removeClass('moving-navs');
    }

    if ($(document).scrollTop() > 75) {
        $('h1').addClass('fade');
    } else {
        $('h1').removeClass('fade');
    }
});


// Thanks to Josh Parrett at https://codepen.io/JTParrett/pen/BkDie
$.fn.moveIt = function(){
    var $window = $(window);
    var instances = [];

    $(this).each(function(){
      instances.push(new moveItItem($(this)));
    });

    window.addEventListener('scroll', function(){
      var scrollTop = $window.scrollTop();
      instances.forEach(function(inst){
        inst.update(scrollTop);
      });
    }, {passive: true});
  }

  var moveItItem = function(el){
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
  };

  moveItItem.prototype.update = function(scrollTop){
    this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
  };

  // Initialization
  $(function(){
    $('[data-scroll-speed]').moveIt();
  });
