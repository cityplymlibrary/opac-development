// sco user js, jake deery on behalf of city college plymouth, 2021
document.addEventListener("DOMContentLoaded", function(event) { 
	// engineer the page
	$('.navbar-inverse').remove(); // remove

	// finish the details
	$('#masthead').find('h1').text('Library Self-service systems'); // set title

	// set alert
	if($('#patronid').length) $('#scomainuserblock').html('<div class=\"alert\">Welcome! Please scan your student ID card to begin. For additional help, please click or tap \'Help\' in the top right-hand corner of the screen.<br \/>If you need additional help, please <a href=\"\/cgi-bin\/koha\/sco\/help.pl\">click here<\/a> for instructions.<\/div>');
	else if($('#barcode').length) $('#scomainuserblock').html('<div class=\"alert\">Please now scan the barcode on the first page of your book(s) to check them out, renew them, or return them.<br \/>If you need additional help, please <a href=\"\/cgi-bin\/koha\/sco\/help.pl\">click here<\/a> for instructions.<\/div>');

	// prep for use
	$('html').addClass('fonts-loaded'); // 'load' fonts
	$('#logout_form').find('button').addClass('btn-primary'); // make finish button stand out

	// help page
	if($('#sco_help').length) {
		$('.main .row-fluid').html('<div class=\"row-fluid\"><h1>Self checkout help<\/h1><p>If this is your first time using the self checkout system, or if the system is not behaving as expected, you may want to refer to this guide to get yourself started.<\/p><h3>Step one<\/h3><p>Please scan your student ID card. If you do not have one, please visit the Library counter.<\/p><h3>Step two<\/h3><p>Scan each item and wait for the page to reload before scanning the next item. The checked-out item should appear in your checkouts list.<\/p><h3>Step three<\/h3><p>If you do not click the \'Finish\' button, your session will automatically expire in 90 seconds.<\/p><a class=\"btn btn-primary\" href=\"javascript:history.go(-1)\">Return to the self-checkout<\/a> <\/div>');
	}
});
