// OPACUserJS, OPAC SPA Project, Jake Deery on behalf of City College Plymouth, 2021
document.addEventListener("DOMContentLoaded", function(event) { 
	//
	// site-wide logic (MAIN FUNC)

	// nav menus
	$('ul.nav').first().html('<li><a href=\"\/cgi-bin\/koha\/opac-shelves.pl?op=list&amp;category=2\" title=\"Lists\" id=\"listsmenu\"><i class=\"fa fa-list fa-icon-white\"><\/i> <span class=\"listslabel\">Lists<\/span><\/a><\/li>');

	// login modal
	$('#loginModal').html('<div class=\"modal-header\"><button type=\"button\" class=\"closebtn\" data-dismiss=\"modal\" aria-hidden=\"true\">\u00D7<\/button><h2 id=\"modalLoginLabel\">Log in to your account<\/h2><\/div><div id=\"modalAuth\" class=\"modal-body\"><h3>College student?<\/h3><p><a href=\"\/Shibboleth.sso\/Login?target=https:\/\/ccp.koha-ptfs.co.uk'+window.location.pathname+window.location.search+'\" class=\"btn btn-primary\">Go to College login &raquo;<\/a><\/p><h3>Staff or associate?<\/h3><p><a href=\"\/cgi-bin\/koha\/opac-user.pl\" class=\"btn btn-primary\">Go to local Koha login &raquo;<\/a><\/p><\/div>');

	// moresearches
	$('#moresearches').html('<ul><li><a href=\"\/cgi-bin\/koha\/opac-search.pl\">Advanced search<\/a><\/li><\/ul>');

	// login page
	$('#opac-auth').html('<h2>Log in to your account<\/h2><h3>College student?<\/h3><p><a href=\"\/Shibboleth.sso\/Login?target=https:\/\/ccp.koha-ptfs.co.uk'+window.location.pathname+window.location.search+'\" class=\"btn btn-primary\">Go to College login &raquo;<\/a><\/p><h3>Staff or associate?<\/h3><form action=\"\/cgi-bin\/koha\/opac-user.pl\" name=\"auth\" id=\"auth\" method=\"post\" autocomplete=\"off\"><input type=\"hidden\" name=\"koha_login_context\" value=\"opac\"\/><fieldset class=\"brief\"><label for=\"userid\">Login<\/label><input type=\"text\" size=\"25\" id=\"userid\" name=\"userid\"\/><label for=\"password\">Password<\/label><input type=\"password\" size=\"25\" id=\"password\" name=\"password\"\/><\/fieldset><input type=\"submit\" value=\"Log in\" class=\"btn btn-primary\"\/><div id=\"nologininstructions\"><h3>Don\'t have a password yet?<\/h3><p>If you don\'t have a password yet, stop by the Library counter the next time you\'re in College. We\'ll happily set one up for you.<\/p><h3>Don\'t have a staff ID card?<\/h3><p>If you don\'t have a staff ID card, please come and see us and we can provide you with one. Remember to bring some proof of ID.<\/p><\/div><\/form>');

});
