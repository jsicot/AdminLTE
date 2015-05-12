/**
 * AdminLTE Custom scripts
 * ------------------
 */
(function ($, AdminLTE) {
  /*
   * SEARCHBAR SCRIPT
   * -----------------------
   */
  $(function() {
  	$('#search').focus(function() {
  		$('.searchbar .search-menu').slideDown();
  	});

  	$('#searchform').click(function(e) {
  	   e.stopPropagation();
  	});

  	$('html').click(function() {
  		$('.searchbar .search-menu').slideUp();
  	});

  	$('.searchbar .search-menu .search-submenu input').change(function() {
  		if ($(this).is(':checked')) {
  			var currentDest = $(this).parents('.col-md-3')[0];
  			$('.searchbar .search-menu .search-submenu').each(function() {
  				if (this != currentDest) {
  					$(this).find('input').prop('checked', false);
  				}
  			});
  		}
  	});

  	$('.search-menu .search-submenu h4 a').click(function() {
  		$(this).parent().parent().find('input[type="checkbox"],input:first[type="radio"]').prop('checked', true).change();
  		return false;
  	});
  });



})(jQuery, $.AdminLTE);
