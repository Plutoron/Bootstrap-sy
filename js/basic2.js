$(document).ready(function () {
	$('#mask').css({'display' : 'none'});
	// $('#nav-header').on('click',function () {
	// 	$("html,body").animate({
	// 		scrollTop:$('#main').offset().top
	// 	},300)
	// })
	$('.navbar-nav a').on('click',function() {
		$('#my-navbar-collapse').removeClass('in')
	})
	$('.nav li').on('click',function (e) {
		$("html,body").animate({
			scrollTop:$($(e.target).attr('href')).offset().top-80
		},300)
		return false
	})
	//激活弹出框
	$("[data-toggle='popover']").popover();
	new WOW().init();
	$(window).scrollTop(0)
})



