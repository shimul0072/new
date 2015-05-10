(function($) {
	
	

 
  $("#owl-demo").owlCarousel({
    autoPlay : 2000,
    stopOnHover : true,
    
    paginationSpeed : 1000,
    goToFirstSpeed : 2000,
    singleItem : true,
    autoHeight : true,
    transitionStyle:"fade"
  });
 	
 	$("#test-demo").owlCarousel({
 
     
 
      items : 4,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [979,3]
 
  });

 $('[data-toggle="tooltip"]').tooltip();
 $(".preloader").fadeOut(2000);

 var progress = setInterval(function() {
    var $bar = $('.bar');

    if ($bar.width()>=400) {
        clearInterval(progress);
        $('.progress').removeClass('active');
    } else {
        $bar.width($bar.width()+40);
    }
    $bar.text($bar.width()/4 + "%");
}, 800);


 $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
		

})(jQuery);

