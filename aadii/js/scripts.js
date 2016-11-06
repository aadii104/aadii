$("#texttween").TextTweener({
	duration: "7000"
});

$(function() {
    var header = $(".topbar");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
          if (scroll >= 540) {
            header.addClass("navbar-fi xed-top");
        } else {
            header.removeClass("navbar-fi xed-top");
        }
    });
});
(function ($) {
  $(document).ready(function(){

	// hide .navbar first
	$(".navbar").hide();

	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 1030) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});


	});

});
  }(jQuery));
