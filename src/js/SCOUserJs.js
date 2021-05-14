// sco user js, jake deery on behalf of city college plymouth, 2021
$(document).ready(function() {
	// engineer the page
	$('#opacheader').html('<h1 class=\"-ccp-heading-u -ccp-heading-u-hue2\">City College Plymouth Library<\/h1>'); // inject header

	// finish the details
	$('#masthead').find('h1').text('Library Self-service systems'); // set title

	// set alert
	if(window.location.search == '?op=begin' || window.location.search == '?op=logout') $('#scomainuserblock').html('<div class=\"alert\">Welcome! Please scan your student ID card to begin. For additional help, please click or tap \'Help\' in the top right-hand corner of the screen.<br \/>If you need additional help, please <a href=\"\/cgi-bin\/koha\/sco\/help.pl\">click here<\/a> for instructions.<\/div>');
	else $('#scomainuserblock').html('<div class=\"alert\">Please now scan the barcode on the first page of your book(s) to check them out, renew them, or return them.<br \/>If you need additional help, please <a href=\"\/cgi-bin\/koha\/sco\/help.pl\">click here<\/a> for instructions.<\/div>');

	// prep for use
	$('html').addClass('fonts-loaded'); // 'load' fonts
	$('#logout_form').find('button').addClass('btn-primary'); // make finish button stand out

	// tidy up
	$('style').first().remove(); // remove ptfs css
});
