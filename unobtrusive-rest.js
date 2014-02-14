// Handles "data-method" on links such as:
// <a href="/logout" data-method="post">Sign Out</a>
function handleMethod(link) {
	var href = link.attr('href');
	var method = link.data('method');
	var form = $('<form method="' + method + '" action="' + href + '"></form>');

	// TODO: update the following line to select your antiforgery token.
	var csrfToken = $('input[name=__RequestVerificationToken]');

	form.hide().append(csrfToken).appendTo('body');
	form.submit();
};

$(document).delegate('a[data-method]', 'click', function (e) {
	var link = $(this);

	if (link.data('method')) {
		handleMethod(link);
		return false;
	}
});
