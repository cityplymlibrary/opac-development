// sci user js, jake deery on behalf of city college plymouth, 2021
$(document).ready(function() {
	// engineer the page
	$('#opacheader').html('<h1 class=\"-ccp-heading-u -ccp-heading-u-orange\">City College Plymouth Library<\/h1>'); // inject header

	// finish the details
	$('#masthead').find('h1').text('Library Self-service systems'); // set title
	
	// set alert
	$('#SelfCheckInMainUserBlock').html('<div class=\"alert\">Please scan the barcode on the first page of your book(s) to check them in.');

	// prep for use
	$('html').addClass('fonts-loaded'); // 'load' fonts
	$('#sci_checkin_button').addClass('btn-primary'); // make finish button stand out

	// tidy up
	$('style').first().remove(); // remove ptfs css
});
