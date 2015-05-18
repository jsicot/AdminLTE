/**
 * AdminLTE Custom scripts
 * ------------------
 */
(function ($, AdminLTE) {
  /*
   * SEARCHBAR SCRIPT
   * -----------------------
   */
  // $(function() {
  // 	$('#search').focus(function() {
  // 		$('.searchbar .search-menu').slideDown();
  // 	});
  //
  // 	$('#searchform').click(function(e) {
  // 	   e.stopPropagation();
  // 	});
  //
  // 	$('html').click(function() {
  // 		$('.searchbar .search-menu').slideUp();
  // 	});
  //
  // 	$('.searchbar .search-menu .search-submenu input').change(function() {
  // 		if ($(this).is(':checked')) {
  // 			var currentDest = $(this).parents('.col-md-3')[0];
  // 			$('.searchbar .search-menu .search-submenu').each(function() {
  // 				if (this != currentDest) {
  // 					$(this).find('input').prop('checked', false);
  // 				}
  // 			});
  // 		}
  // 	});
  //
  // 	$('.search-menu .search-submenu h4 a').click(function() {
  // 		$(this).parent().parent().find('input[type="checkbox"],input:first[type="radio"]').prop('checked', true).change();
  // 		return false;
  // 	});
  // });

  /*
   * CAROUSEL SCRIPT
   * -----------------------
   */
   $(function() {
     $('.owl-carousel').owlCarousel({
       stagePadding: 50,
       loop: true,
       margin: 10,
       videoHeight: 200,
       responsiveClass: true,
       responsive: {
         0: {
           items: 1,
           nav: true
         },
         600: {
           items: 3,
           nav: false
         },
         1000: {
           items: 6,
           nav: false,
           loop: false,
           margin: 15
         }
       }
     })
   })

})(jQuery, $.AdminLTE);
