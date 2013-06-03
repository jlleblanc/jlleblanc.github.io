(function  ($) {
	$(document).ready(function() {
		$('.source').addClass('hideSource');

		$('h3.dailymessage').toggle(function() {
			$(this).next().slideDown("fast").end();
		}, function() {
			$(this).next().slideUp("fast").end();
		});
	});
}) (jQuery)
