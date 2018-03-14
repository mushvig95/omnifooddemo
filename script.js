$(document).ready(function(){
	// for sticky navigation
	$(".js--section-one").waypoint(function(direction){
		if (direction == "down") {
			$("nav").addClass("sticky-nav");
		} else {
			$("nav").removeClass("sticky-nav")
		}
	}, {
		offset:"20%"
	});

	// buttons action
	$(".js--scroll-to-plan").click(function(){
		$("html,body").animate({scrollTop: $(".js--section-plans").offset().top},1000);
	});

	$(".js--scroll-to-start").click(function(){
		$("html,body").animate({scrollTop: $(".js--section-one").offset().top},1000);
	});


	// Navigations

	$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
     }, 500);
});

	// scroll animations

	$(".js--wp1").waypoint(function(direction){
		$(".js--wp1").addClass("animated fadeIn");

	}, {
		offset:"60%"
	});

	$(".js--wp2").waypoint(function(direction){
		$(".js--wp2").addClass("animated fadeIn");

	}, {
		offset:"60%"
	});

	$(".js--wp3").waypoint(function(direction){
		$(".js--wp3").addClass("animated fadeIn");

	}, {
		offset:"60%"
	});

	$(".js--wp4").waypoint(function(direction){
		$(".js--wp4").addClass("animated pulse");

	}, {
		offset:"60%"
	});

	// Burger Navigation
	$(".js--burger-nav").click(function(){
		var nav = $(".js--main-nav");
		var icon = $(".js--burger-nav i");
		nav.slideToggle(400);
		if (icon.hasClass("ion-navicon-round")){
			icon.addClass("ion-close-round");
			icon.removeClass("ion-navicon-round");
		} else {
			icon.addClass("ion-navicon-round");
			icon.removeClass("ion-close-round");

		}
	})

});

