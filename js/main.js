function homeIcon() {

		var scroll_top = $(window).scrollTop(); 

		if (scroll_top > 200) { 
			$('#intro .icon').css({ 'top': '72%' });
		} else {
			$('#intro .icon').css({ 'top': '59.5%' }); 
		}   

};


$(document).ready(function() {

	// home effects
	if($("#intro h1").length > 0){

		homeIcon();

		var hoverLogo = $("#intro h1, #intro .icon");

		$(hoverLogo).hover(
			function() {
				$('#intro').addClass("animate");
			},
			function() {
				$('#intro').removeClass("animate");
			}
		);	

	};
	
	
	// clear form labels
	$('input[title]').each( function() {
		if($(this).val() === '') {
			$(this).val($(this).attr('title'));
		}

		$(this).focus( function() {
			if($(this).val() == $(this).attr('title')) {
				$(this).val('');
			}
		});
		$(this).blur( function() {
			if($(this).val() === '') {
				$(this).val($(this).attr('title'));}
		});
	});


	// popups 
	if($(".fancybox").length > 0){
		$(".fancybox").fancybox();
	};

});


$(window).scroll(function() {
	
	if($("#intro h1").length > 0){
		homeIcon();
	};

});



// orientation > viewport fix for mobile devices
if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
	var viewportmeta = document.querySelector('meta[name="viewport"]');
	if (viewportmeta) {
		viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
		document.body.addEventListener('gesturestart', function () {
			viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
		}, false);
	}
}