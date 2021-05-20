// JQUERY
$( document ).ready(function() {
	// Ngl-search
	$('.ngl-search__btn').bind('click', function() {
		$(this).parents('.ngl-search').find('.ngl-search__wrap').fadeToggle()
	})

	// Request form, validation

	function validateEmail(email) {
		var requestEmail = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return requestEmail.test(email);
	}

	$('.request__btn').bind('click', function() {
		var email = $('#requestEmail').val()
		if (!validateEmail(email)) {
			$('#requestEmail').addClass('invalid')
		} else {
			$('#requestEmail').removeClass('invalid')
		}
	})

	setTimeout(function(){
		$('#requestEmail').removeClass('invalid');
	}, 3000);
});
