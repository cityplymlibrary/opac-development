// OPACUserJS, OPAC SPA Project, Jake Deery on behalf of City College Plymouth, 2021
document.addEventListener("DOMContentLoaded", function(event) { 
	//
	// gdpr
	if(localStorage.getItem('-ccp-gdrp-dismissed') == null) $('body').prepend('<div id=\"-gdpr-banner\"><p>This website uses cookies to ensure you get the best experience on our website <a id=\"-gdpr-moreinfo\" href=\"#!\/privacy-policy\">More info \u00BB<\/a><button id=\"-gdpr-dismiss\" class=\"btn btn-primary\">Dismiss<\/button><\/p><\/div>');
	$('#-gdpr-dismiss, #-gdpr-moreinfo').click(function() {
		localStorage.setItem('-ccp-gdrp-dismissed', 'true');
		$('#-gdpr-banner').remove();
	});

	//
	// site-wide logic (MAIN FUNC)

	// nav menus
	$('#cart-list-nav').html('<li class=\"nav-item\"><a href=\"\/cgi-bin\/koha\/opac-main.pl\" class=\"nav-link\" title=\"Homepage\" id=\"hmpmenu\"><i class=\"fa fa-home fa-icon-white\"><\/i><\/a><\/li><li class=\"nav-item\"><a href=\"\/cgi-bin\/koha\/opac-main.pl#!\/how-tos\/help-with-this-site\" class=\"nav-link\" title=\"Help\" id=\"hlpmenu\"><i class=\"fa fa-info-circle fa-icon-white\"><\/i> <span class=\"hlplabel\">Help<\/span><\/a><\/li><li class=\"nav-item dropdown\"><a href=\"#\" title=\"Show menu\" class=\"nav-link dropdown-toggle\" id=\"lrsmenu\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-graduation-cap fa-icon-black\" aria-hidden=\"true\"><\/i> <span class=\"lrslabel\">Learning resources<\/span><\/a><div aria-labelledby=\"lrsmenu\" role=\"menu\" class=\"dropdown-menu\"><a class=\"dropdown-item\" href=\"\/cgi-bin\/koha\/opac-course-reserves.pl\" role=\"menuitem\"><strong>Reading lists<\/strong><\/a><a class=\"dropdown-item\" href=\"\/cgi-bin\/koha\/opac-main.pl#!\/subject-guides\" role=\"menuitem\"><strong>Subject guides<\/strong><\/a><a class=\"dropdown-item\" href=\"\/cgi-bin\/koha\/opac-shelves.pl?op=list&amp;category=2\" role=\"menuitem\"><strong>Virtual shelves<\/strong><\/a><a class=\"dropdown-item\" href=\"\/cgi-bin\/koha\/opac-main.pl#!\/online-resources\" role=\"menuitem\"><strong>Online resources &amp; databases<\/strong><\/a><\/div><\/li><li class=\"nav-item dropdown\"><a href=\"#\" title=\"Show menu\" class=\"nav-link dropdown-toggle\" id=\"sskmenu\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-leanpub fa-icon-black\" aria-hidden=\"true\"><\/i> <span class=\"ssklabel\">Study Skills &amp; IT Support<\/span><\/a><div aria-labelledby=\"sskmenu\" role=\"menu\" class=\"dropdown-menu\"><a class=\"dropdown-item\" href=\"\/cgi-bin\/koha\/opac-main.pl#!\/study-skills\" role=\"menuitem\"><strong>Study Skills &amp; IT Support<\/strong><\/a><a class=\"dropdown-item\" target=\"_blank\" href=\"\/\/www.citethisforme.com\/\" role=\"menuitem\"><strong>Cite this for me<\/strong><\/a><a class=\"dropdown-item\" target=\"_blank\" href=\"\/\/moodle.cityplym.ac.uk\/mod\/url\/view.php?id=50013\" role=\"menuitem\"><strong>HE Cite them Right<\/strong><\/a><\/div><\/li><li class=\"nav-item dropdown\"><a href=\"#\" title=\"Show menu\" class=\"nav-link dropdown-toggle\" id=\"colmenu\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-cogs fa-icon-black\" aria-hidden=\"true\"><\/i> <span class=\"collabel\">College services<\/span><\/a><div aria-labelledby=\"colmenu\" role=\"menu\" class=\"dropdown-menu\"><a target=\"_blank\" class=\"dropdown-item\" href=\"\/\/accounts.google.com\/AccountChooser?service=mail&hd=cityplym.ac.uk&continue=https%3A%2F%2Fmail.google.com%2Fmail\" role=\"menuitem\"><strong>Gmail<\/strong><\/a><a target=\"_blank\" class=\"dropdown-item\" href=\"\/\/accounts.google.com\/AccountChooser?service=classroom&hd=cityplym.ac.uk&continue=https%3A%2F%2Fclassroom.google.com%2Fh\" role=\"menuitem\"><strong>Classroom<\/strong><\/a><a target=\"_blank\" class=\"dropdown-item\" href=\"\/\/moodle.cityplym.ac.uk\" role=\"menuitem\"><strong>Moodle<\/strong><\/a><a target=\"_blank\" class=\"dropdown-item\" href=\"\/\/cityplym.bksblive2.co.uk\/bksbLive2\/Login.aspx\" role=\"menuitem\"><strong>bksb<\/strong><\/a><a target=\"_blank\" class=\"dropdown-item\" href=\"\/\/estream.cityplym.ac.uk\/\" role=\"menuitem\"><strong>TV Archive<\/strong><\/a><\/div><\/li><li class=\"nav-item\"><a target=\"_blank\" href=\"\/\/forms.gle\/2NKzKTWrzHtcanuL7\" class=\"nav-link\" title=\"Feedback\" id=\"fbkmenu\"><i class=\"fa fa-comments fa-icon-white\"><\/i> <span class=\"fbklabel\">Feedback<\/span><\/a><\/li>');
	$('#members').prepend('<li class=\"nav-item\"><a href=\"\/cgi-bin\/koha\/opac-basket.pl\" class=\"nav-link\" title=\"Cart\" id=\"bkbmenu\"><i class=\"fa fa-shopping-bag fa-icon-white\"><\/i> <span class=\"bkblabel\">Cart<\/span><\/a><\/li>');

	// bookbag link handler
	$("#bkbmenu").click(function(event) {
		event.preventDefault();
		basketWindowHandler();
	});

	// bookbag opener - modified openBasket()
	function basketWindowHandler() {
		var strCookie = "";
		var nameCookie = "bib_list";
		var valCookie = readCookie(nameCookie);
		if (valCookie) {
			strCookie = nameCookie + "=" + valCookie;
		} else {
			strCookie = nameCookie + "=";
		}

		var iW = 800;
		var iH = 500;
		var optWin = "status=yes,scrollbars=yes,resizable=yes,toolbar=no,location=yes,height="+iH+",width="+iW;
		var loc = "/cgi-bin/koha/opac-basket.pl?" + strCookie;
		var basket = open(loc, "basket", optWin);
		if (window.focus) {
			basket.focus()
		}
	}

	// remove cart notice
	$('#cartDetails').remove();

	// login modal
	$('#loginModal').html('<div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><h2 class=\"modal-title\" id=\"modalLoginLabel\">Log in to your account<\/h2><button type=\"button\" class=\"closebtn\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">\u00D7<\/span><\/button><\/div><div id=\"modalAuth\" class=\"modal-body\"><h3>College student or staff?<\/h3><p><a href=\"\/Shibboleth.sso\/Login?target=https:\/\/ccp.koha-ptfs.co.uk+window.location.pathname+window.location.search+\" class=\"btn btn-primary\">Go to College login &raquo;<\/a><\/p><h3>College associate?<\/h3><p><a href=\"\/cgi-bin\/koha\/opac-user.pl\" class=\"btn btn-primary\">Go to local Koha login &raquo;<\/a><\/p><\/div><\/div><\/div>');

	// login page
	if($('#auth').length > 0 && $('#opac-auth').children('h3').eq(1).length > 0) {
		$('#opac-auth').children('h3').eq(0).text('College student or staff?');
		$('#opac-auth').children('p').eq(0).html('Please click the button below and login with your student ID number and College password.<br \/><a href=\"\/Shibboleth.sso\/Login?target=https:\/\/ccp.koha-ptfs.co.uk\/cgi-bin\/koha\/opac-main.pl\" class=\"btn btn-primary\">Go to College login &raquo;<\/a><br \/><br \/><a href=\"\/cgi-bin\/koha\/opac-main.pl#!\/faqs\">Forgot your password?<\/a>');
		$('#opac-auth').children('h3').eq(1).text('College associate?');
		$('#opac-auth').children('p').eq(1).text('Please enter the login details provided to you by the Library team');
		$('#nologininstructions').html('<p style=\"padding:1rem 0\">If you don\'t have a College ID card or password, visit the Library counter, where we will be able to provide these to you. Please note: if you need a College ID, please bring photo ID and proof of enrolment.<\/p>');
	} else if($('#auth').length > 0 && $('#opac-auth').children('h3').eq(1).length < 1) {
		$('#opac-auth').children('h3').eq(0).text('College associate?');
		$('#opac-auth').children('p').eq(0).text('Please enter the login details provided to you by the Library team');
		$('#nologininstructions').html('<p style=\"padding:1rem 0\">If you don\'t have a College ID card or password, visit the Library counter, where we will be able to provide these to you. Please note: if you need a College ID, please bring photo ID and proof of enrolment to be issued with a new card.<\/p>');
	}
});
