const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close'),
	linkElem = document.querySelector('.menu__list');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

linkElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
	lines = document.querySelectorAll('.skills__ratings-line span');



counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;

});
$("a[href^='#']").click(function () {
	const _href = $(this).attr("href");
	$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
	return false;
});


$(document).ready(function () {


	$('form').submit(function (e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "smart.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");
			$('#name, #email').fadeOut();
			$('.overlay, #about').fadeIn('slow');

			$('form').trigger('reset');
		});
		return false;
	});
});







