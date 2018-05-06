$(function() {
	$.ajax({
		type: 'GET',
		url: '/',
		headers: {'X-Csrf-Token': 'Fetch'},
		success: function(res, status, xhr) {
			var sHeaderCsrfToken = 'X-Csrf-Token';
			var sCsrfToken = xhr.getResponseHeader(sHeaderCsrfToken);
			$(document).ajaxSend(function(event, jqxhr, settings) {
				if(settings.type === 'POST' || settings.type === 'PUT' || settings.type === 'DELETE') {
					jqxhr.setRequestHeader(sHeaderCsrfToken, sCsrfToken);
				}
			});
		}
	});
});
