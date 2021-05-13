// OPACUserJS, OPAC SPA Project, Jake Deery on behalf of City College Plymouth, 2021
$(document).ready(function () {
	//
	//
	// miniSpa class
	class miniSpaCls {
		//
		// initialiser
		constructor() {
			//
			// global vars
			this.title = '';
			this.headline = '';
			this.cd = '';

			//
			// local vars
			var header = '<div id=\"-ccp-header-region\" class=\"noprint\"><section class=\"-ccp-transparent-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-md\"><div class=\"-ccp-breadcrumb-container\"><\/div><img class=\"-ccp-logo\" src=\"\/\/ccp.vo.llownd.net\/library\/opac\/bitmaps\/static\/ccp-logo.png\"><h1 class=\"-ccp-site-title\"><\/h1><h1 class=\"-ccp-page-title -ccp-heading-u -ccp-heading-u-orange\"><\/h1><\/div><\/div><\/section><\/div>';
			var body = '<div id=\"-ccp-virtual-dom\"><p class=\"text-center\">Loading . . . <\/p><\/div>';

			//
			// set correct css
			$('.main').css('margin', '0');
			$('.main').css('padding', '0');
			$('.main').css('border', 'none');

			//
			// tidy up from the default page
			$('#opacheader').remove();
			$('#opac-main-search').remove();
			$('.main').html('');

			//
			// load the universal content
			$('.main').html(header + body);
		}

		// breadcrumb generation helper method
		generateBreadcrumbs(json) {
			//
			// vars
			var obj = JSON.parse(json);
	
			//
			// logic
			console.log(obj);
		}

		// page renderer helper method
		pageFactory(payload) {
			// set metadata
			$(document).attr('title', 'City College Plymouth Library catalogue ' + "\u00bb" + ' ' + this.title);
			// set pagematter
			$('.-ccp-site-title').html(this.title);
			$('.-ccp-page-title').html(this.headline);
			// now set the main body
			$('#-ccp-virtual-dom').html(payload);
		}

		// breadcrumb setter
		// todo: make this work a bit better
		breadcrumbFactory(payload) {
			// set html
			$('.-ccp-breadcrumb-container').html('<ul class=\"-ccp-breadcrumb-inner\">' + payload + '<\/ul>');
		}

		renderPage() {
			//
			// vars
			this.cd = '#!/' + window.location.hash.substring(3);

			//
			// logic
			if(this.cd == '#!/' || this.cd == '#!/hp') {
				// update globals
				this.title = 'City College Plymouth Library';
				this.headline = '';

				// configure the breadcrumbs
				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li>');

				// now set the main body
				this.pageFactory('<div class=\"-ccp-ql-wrapper\"><div class=\"-ccp-ql-container\"><h4 class=\"-ccp-heading-u -ccp-heading-u-white\">Related pages<\/h4><ul><li><a href=\"#!\/info\/about-us\/opening-hours\">Opening hours<\/a><\/li><li><a href=\"#!\/info\/about-us\/contact-us\">Contact us<\/a><\/li><li><a href=\"#!\/how-tos\/help-with-this-site\">Help with this site<\/a><\/li><\/ul><\/div><\/div><div id=\"-ccp-page-region\" class=\"col-md-12\" role=\"main\"><section class=\"-ccp-purple-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-purple2\">Search the catalogue<\/h2><div class=\"-ccp-searchform-container\"><form class=\"-ccp-searchform\" name=\"searchform\" method=\"get\" action=\"\/cgi-bin\/koha\/opac-search.pl\"><div class=\"-ccp-searchform-inner\"><input type=\"text\" title=\"Type search term\" placeholder=\"Search for books, eBooks, journal articles, DVDs...\" class=\"-ccp-searchform-input\" name=\"q\"><button type=\"submit\" class=\"-ccp-searchform-submit btn btn-primary\"><i class=\"fa fa-search fa-fw\"><\/i> Go<\/button><input type=\"hidden\" title=\"Limit\" name=\"limit\" value=\"\"><\/div><\/form><\/div><p><a href=\"\/cgi-bin\/koha\/opac-search.pl\">Advanced search &raquo;<\/a><\/p><\/div><\/div><\/section><section class=\"-ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-orange\">Databases &amp; Online Resources<\/h2><div class=\"-ccp-grid-container -ccp-offset-grid\"><div class=\"-ccp-grid-50 -ccp-offset-grid-this -ccp-white-section\"><div class=\"-ccp-grid-inner-lg\"><span class=\"-ccp-text-lg\"><strong>Our databases<\/strong><\/span><ul class=\"-ccp-padding-y-lg\"><li><a href=\"#!\/databases\/a-z\">Databases A-Z<\/a><\/li><li><a href=\"#!\/databases\/a-z\">Databases by Subject<\/a><\/li><li><a href=\"#!\/databases\/a-z\">Databases for University of Plymouth partner students<\/a><\/li><li><a href=\"#!\/databases\/a-z\">Databases for Marjon partner students<\/a><\/li><\/ul><a href=\"#!\/databases\" class=\"btn btn-primary -ccp-margin-y-sm\">Browse databases &raquo;<\/a><\/div><\/div><div class=\"-ccp-grid-50 -ccp-purple-section\"><div class=\"-ccp-grid-inner-lg \"><span class=\"-ccp-text-lg\"><strong>Our online resources<\/strong><\/span><ul class=\"-ccp-padding-y-lg\"><li><a href=\"#!\/online-resources\/ebooks-ejournals\">eBooks &amp; eJournals<\/a><\/li><li><a href=\"#!\/online-resources\/papers-projects\">Past projects &amp; exam papers<\/a><\/li><li><a href=\"#!\/online-resources\/reading-lists\">Reading lists<\/a><\/li><li><a href=\"#!\/online-resources\/study-skills-it-support\">Study Skills &amp; IT Support<\/a><\/li><li><a href=\"#!\/online-resources\/study-skills-it-support\/referencing\">Referencing<\/a><\/li><\/ul><a href=\"#!\/databases\" class=\"btn btn-primary -ccp-margin-y-sm\">Browse online resources &raquo;<\/a><\/div><\/div><\/div><\/div><\/div><\/section><section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-danger\">COVID-19 information for Library users<\/h2><div class=\"-ccp-grid-container\"><div class=\"-ccp-grid-50 -ccp-flex-center\"><div class=\"-ccp-grid-inner-lg\"><p>Visit this page regularly to find up-to-date information on our services, which services are available and which ones are not<\/p><a href=\"#!\/covid19\" class=\"btn btn-primary\">Visit page &raquo;<\/a><\/div><\/div><div class=\"-ccp-grid-50 -ccp-flex-center\"><div class=\"-ccp-grid-inner-lg\"><img src=\"\/\/ccp.vo.llownd.net\/library\/opac\/bitmaps\/uploads\/2021\/05\/cov-es-stock-img.png\" title=\"COVID-19 Guidance\" alt=\"Decorative: Man wearing mask stood next to mannequin\" class=\"-ccp-w-100 -ccp-r-33\"\/><\/div><\/div><\/div><\/div><\/div><\/section><section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg -ccp-padding-t-0\"><h2 class=\"-ccp-heading-u -ccp-heading-u-orange\">Effectively using the Library<\/h2><div class=\"-ccp-grid-container\"><div class=\"-ccp-grid-50\"><div class=\"-ccp-grid-inner-lg\"><ul class=\"-ccp-multilink-list\"><li><a href=\"#!\/how-tos\/logging-on\">Logging on to the Library<\/a><\/li><li><a href=\"#!\/how-tos\/google-workspace\">Accessing our Google services<\/a><\/li><li><a href=\"#!\/how-tos\/accessing-eresources\">Help accessing databases &amp; e-resources<\/a><\/li><\/ul><\/div><\/div><div class=\"-ccp-grid-50\"><div class=\"-ccp-grid-inner-lg\"><ul class=\"-ccp-multilink-list\"><li><a href=\"#!\/how-tos\/booking-resources\">Booking Library resources &amp; spaces<\/a><\/li><li><a href=\"#!\/how-tos\/booking-resources\">Booking Study Skills support<\/a><\/li><li><a href=\"#!\/how-tos\/booking-resources\">Booking IT Support<\/a><\/li><\/ul><\/div><\/div><\/div><\/div><\/div><\/section><section class=\"-ccp-purple-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-purple2\">Subject guides<\/h2><div class=\"-ccp-grid-container\"><div class=\"-ccp-grid-50 -ccp-flex-start\"><div class=\"-ccp-grid-inner-lg\"><img src=\"https:\/\/ccp.vo.llownd.net\/library\/opac\/bitmaps\/uploads\/2021\/05\/study-es-stock-img.png\" title=\"Students studying\" alt=\"Decorative: Student studying for exam\" class=\"-ccp-w-100 -ccp-r-33\"\/><\/div><\/div><div class=\"-ccp-grid-50 -ccp-flex-center\"><div class=\"-ccp-grid-inner-lg\"><p>For support and guidance on studying for your specific subject, take a look at our subject guides page.<\/p><a href=\"#!\/subject-guides\" class=\"btn btn-primary\">Visit page &raquo;<\/a><\/div><\/div><\/div><\/div><\/div><\/section><section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-green2\">Pop-Up Library<\/h2><div class=\"-ccp-grid-container\"><div class=\"-ccp-grid-50 -ccp-flex-center\"><div class=\"-ccp-grid-inner-lg\"><p>We can temporarily be found in a new space near the Refectory. If you\'re looking for us, or need more information, click the link below.<\/p><a href=\"#!\/pop-up-library\" class=\"btn btn-primary\">Visit page &raquo;<\/a><\/div><\/div><div class=\"-ccp-grid-50 -ccp-flex-start\"><div class=\"-ccp-grid-inner-lg\"><img src=\"\/\/ccp.vo.llownd.net\/library\/opac\/bitmaps\/uploads\/2021\/05\/library-es-stock-img.jpg\" title=\"Pop-up Library\" alt=\"Decorative: Library in Reina Sofia\" class=\"-ccp-w-100 -ccp-r-33\"\/><\/div><\/div><\/div><\/div><\/div><\/section><section class=\"-ccp-green-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-green2\">How-tos &amp; support<\/h2><div class=\"-ccp-grid-container -ccp-margin-y-1\"><div class=\"-ccp-grid-25\"><a href=\"#!\/how-tos\/using-the-library\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">How to use our services<\/h3><p>A breakdown of how to use our offerings, including what we provide digitally, our physical collection and, our equipment and facilities.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/how-tos\/loaning-books-and-equipment\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Loaning books &amp; equipment<\/h3><p>How borrowing, reserving, renewing and returning College books and equipment can be done, what you can expect from our services, and what we\'ll expect from our students.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/study-skills\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Study Skills &amp; IT Skills<\/h3><p>See how the Library\'s team of tutor librarians and IT technicians can help you become a better studier and get the most our of your College experience.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/how-tos\/google-workspace\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Google Workspace support<\/h3><p>Get support, tips, and tricks on the best practices with the full range of our College Google services - from Classroom to Gmail, Sites to Sheets.<\/p><\/div><\/div><\/a><\/div><\/div><div class=\"-ccp-grid-container -ccp-margin-y-1\"><div class=\"-ccp-grid-25\"><a href=\"#!\/how-tos\/it-support\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Technical Support<\/h3><p>Assistance with things such as incorrect passwords, disabled or unresponsive accounts and problems with College equipment.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/how-tos\/help-with-online-resources\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">eResource tips and help<\/h3><p>Guides to help you access and make the most out of our online and eResource catalogue, from eBooks and eJournals to Databases and open-access materials.<\/p><\/div><\/div><\/a><\/div><\/div><\/div><\/div><\/section><section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-orange\">Contact us<\/h2><div class=\"-ccp-grid-container\"><div class=\"-ccp-grid-50 -ccp-flex-start\"><div class=\"-ccp-grid-inner-lg\"><img src=\"\/\/ccp.vo.llownd.net\/library\/opac\/bitmaps\/uploads\/2021\/05\/friendly-es-stock-img.jpg\" title=\"Contact the Team\" alt=\"Decorative: Smiling lady in Library\" class=\"-ccp-w-100 -ccp-r-33\"\/><\/div><\/div><div class=\"-ccp-grid-50 -ccp-flex-center\"><div class=\"-ccp-grid-inner-lg\"><p>The Library can be contacted by email or by telephone during our opening hours. If you have an enquiry, please don\'t hesitate to get in touch.<\/p><ul><li><strong>Email:<\/strong> <a href=\"mailto:library&#64;cityplym&#46;ac&#46;uk\">library&#64;cityplym&#46;ac&#46;uk<\/a><\/li><li><strong>Phone:<\/strong> <a href=\"tel:+441752305366\">01752 305366<\/a><\/li><\/ul><a href=\"#!\/info\/about-us\/contact-us\" class=\"btn btn-primary\">More info &raquo;<\/a><\/div><\/div><\/div><\/div><\/div><\/section><section class=\"-ccp-purple-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><div class=\"-ccp-grid-container -ccp-margin-y-1\"><div class=\"-ccp-grid-25\"><p>&nbsp;<\/p><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/study-skills\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Study Skills &amp; IT Skills<\/h3><p>If you feel lost with your studies, consider booking a study or IT skills session with one of our tutor librarians or IT technicians.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/resource-booker\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Book a resource or space<\/h3><p>Click here to access our resource booking wizard, which will step you through how to book a resource with us.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><p>&nbsp;<\/p><\/div><\/div><\/div><\/section><\/div>');

			} else if(this.cd == '#!/test') {
				// update globals
				this.title= 'Test page';
				this.headline = 'Please ignore';

				// configure the breadcrumbs
				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li>');

				// now set the main body
				this.pageFactory('<div class=\"-ccp-ql-wrapper\"><div class=\"-ccp-ql-container\"><h4>Related pages<\/h4><ul><li><a href=\"#!\/hp\">Get to the choppa!<\/a><\/li><\/ul><\/div><\/div><div id=\"-ccp-page-region\" class=\"col-md-12\" role=\"main\"><section class=\"-ccp-section -ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2>Congratulations!<\/h2><p>A self-test of this SPA has been completed, and I am delighted to inform you that the script is functioning as expected.<\/p><\/div><\/div><\/section><\/div>');

			} else if(this.cd == '#!/info/about-us/contact-us') {
				// update globals
				this.title= 'Contact Us';
				this.headline = '';

				// configure the breadcrumbs
				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li><li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/info\/about-us\">About Us<\/a><\/li><li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/info\/about-us\/contact-us\">Contact Us<\/a><\/li>');

				// now set the main body
				this.pageFactory('<div class=\"-ccp-ql-wrapper\"><div class=\"-ccp-ql-container\"><h4>Related pages<\/h4><ul><li><a href=\"#!\/about-us\/opening-hours\">Opening hours<\/a><\/li><li><a href=\"#!\/about-us\">About us<\/a><\/li><\/ul><\/div><\/div><div id=\"-ccp-page-region\" class=\"col-md-12\" role=\"main\"><section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-orange\">Contact us<\/h2><p>You can contact the team through a variety of means. Please take a look below for a breakdown of our reachable contact points!<\/p><table class=\"table table-bordered table-striped -ccp-margin-y-lg\"><thead><tr role=\"row\"><th>Contact type<\/th><th>Contact name<\/th><th>Contact details<\/th><\/tr><\/thead><tbody><tr class=\"odd\"><td>Telephone<\/td><td>The team<\/td><td><a href=\"tel:+441752305366\">01752 305366<\/a><\/td><\/tr><tr class=\"even\"><td>Email<\/td><td>The team<\/td><td><a href=\"mailto:library&#64;cityplym&#46;ac&#46;uk\">library&#64;cityplym&#46;ac&#46;uk<\/a><\/td><\/tr><\/tbody><\/table><\/div><\/div><\/section><section class=\"-ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-orange\">Social Media<\/h2><p>We use social media! Connect with us for regular Library updates.<\/p><ul class=\"-ccp-multilink-list\"><li><a href=\"https:\/\/twitter.com\/cityplymlibrary\" target=\"_blank\">Twitter: @cityplymlibrary<\/a><\/li><\/ul><\/div><\/div><\/section><section class=\"-ccp-green-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-green2\">Our Tweets<\/h2><div class=\"-ccp-grid-container -ccp-margin-y-1\"><div class=\"-ccp-grid-33\"><p>&nbsp;<\/p><\/div><div class=\"-ccp-grid-33\"><a class=\"twitter-timeline\" data-height=\"576\" href=\"https:\/\/twitter.com\/cityplymlibrary?ref_src=twsrc%5Etfw\">Tweets by cityplymlibrary<\/a> <script async src=\"https:\/\/platform.twitter.com\/widgets.js\" charset=\"utf-8\"><\/script><\/div><div class=\"-ccp-grid-33\"><p>&nbsp;<\/p><\/div><\/div><\/div><\/div><\/section><section class=\"-ccp-purple-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><div class=\"-ccp-grid-container -ccp-margin-y-1\"><div class=\"-ccp-grid-25\"><p>&nbsp;<\/p><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/info\/about-us\/opening-hours\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Opening times<\/h3><p>Need to know when you can drop your items off? Click here to see our opening times, updated regularly.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/info\/about-us\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Meet the team<\/h3><p>We\'re a welcoming team here to help you discover a world of enriching knowledge. Meet us virtually!<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><p>&nbsp;<\/p><\/div><\/div><\/div><\/div><\/section><\/div>');

			} else if(this.cd == '#!/info/about-us/opening-hours') {
				// update globals
				this.title= 'Opening hours';
				this.headline = '';

				// configure the breadcrumbs
				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li><li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/info\/about-us\">About Us<\/a><\/li><li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/info\/about-us\/opening-hours\">Opening hours<\/a><\/li>');

				// now set the main body
				this.pageFactory('<div class=\"-ccp-ql-wrapper\"><div class=\"-ccp-ql-container\"><h4>Related pages<\/h4><ul><li><a href=\"#!\/about-us\/contact-us\">Contact us<\/a><\/li><li><a href=\"#!\/about-us\">About us<\/a><\/li><\/ul><\/div><\/div><div id=\"-ccp-page-region\" class=\"col-md-12\" role=\"main\"><section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-orange\">Opening hours<\/h2><p>We\'re open five days a week, Monday-Friday. Throughout the year, we sometimes change our hours depending on demand or the needs of our students.<br\/>Please check back on this page regularly to stay informed on our opening hours, as well as for updates on up-and-coming closures.<\/p><h3>Term 3<\/h3><table class=\"table table-bordered table-striped\"><thead><tr role=\"row\"><th>Day<\/th><th>Hours<\/th><\/tr><\/thead><tbody><tr class=\"odd\"><td>Monday<\/td><td>08:30-17:00 (8.30am-5pm)<\/td><\/tr><tr class=\"even\"><td>Tuesday<\/td><td>08:30-17:00 (8.30am-5pm)<\/td><\/tr><tr class=\"odd\"><td>Wednesday<\/td><td>08:30-17:00 (8.30am-5pm)<\/td><\/tr><tr class=\"even\"><td>Thursday<\/td><td>08:30-17:00 (8.30am-5pm)<\/td><\/tr><tr class=\"odd\"><td>Friday<\/td><td>08:30-17:00 (8.30am-5pm)<\/td><\/tr><\/tbody><\/table><\/div><\/div><\/section><section class=\"-ccp-purple-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><div class=\"-ccp-grid-container -ccp-margin-y-1\"><div class=\"-ccp-grid-25\"><p>&nbsp;<\/p><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/info\/about-us\/opening-hours\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Contact us<\/h3><p>If you have a question for the team or want to leave us feedback, you can find our contact details here.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/info\/about-us\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Meet the team<\/h3><p>We\'re a welcoming team here to help you discover a world of enriching knowledge. Meet us virtually!<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><p>&nbsp;<\/p><\/div><\/div><\/div><\/div><\/section><\/div>');

			} else {
				// set metadata
				$(document).attr('title', 'City College Plymouth Library catalogue | Error 404');
				
				// go to a proper 404 page (seo friendly)
				window.location.href = '/cgi-bin/koha/errors/404.pl';
			}

			// bonus: snap to the top to simulate a pageload event
			$('html,body').scrollTop(0);
		}
	}

	//
	// main site logic (MAIN FUNC)
	if(window.location.pathname == '/' || window.location.pathname == '/cgi-bin/koha/opac-main.pl') {
		//
		//
		// mini-spa

		// initialise site
		const miniSpa = new miniSpaCls;

		// render the page initially
		miniSpa.renderPage();
		// then listen for changes in the url
		window.addEventListener('popstate', function(event) {
			miniSpa.renderPage();
		});
	}

	//
	// site-wide logic (MAIN FUNC)

	// nav menus
	$('ul.nav').first().html('<li><a href=\"\/cgi-bin\/koha\/opac-shelves.pl?op=list&amp;category=2\" title=\"Lists\" id=\"listsmenu\"><i class=\"fa fa-list fa-icon-white\"><\/i> <span class=\"listslabel\">Lists<\/span><\/a><\/li>');

	// moresearches
	$('#moresearches').html('<ul><li><a href=\"\/cgi-bin\/koha\/opac-search.pl\">Advanced search<\/a><\/li><\/ul>');
});
