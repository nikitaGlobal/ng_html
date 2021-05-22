$(document).ready(function () {
   // Ngl-search
   $('.ngl-search__btn').bind('click', function() {
   	$('.ngl-search__wrap').fadeIn()
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


	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".popup"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.fadeOut();
			$('.request-toggler').removeClass('active') // скрываем его
		}
	});

	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".ngl-search"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.find('.ngl-search__wrap').fadeOut(); // скрываем его
	}
});

	setTimeout(function(){
		$('#requestEmail').removeClass('invalid');
	}, 3000);

	// Request

	$('.request-toggler').bind('click', function() {
		$('.request').fadeToggle()
		$(this).toggleClass('active')
	})

	// Popup close

	$('.close-this').bind('click', function() {
		$(this).parents('.popup').fadeOut()
		$('.request-toggler').removeClass('active')
	})

	// 
	$('.write-comment__field').bind('input', function () {
		if ($('.write-comment__field').val() == "") {
			$(this).siblings('.button').prop("disabled", true)
		} else if (!$('.write-comment__field').val() == "") {
			$(this).siblings('.button').prop("disabled", false)
		}
	})


});
