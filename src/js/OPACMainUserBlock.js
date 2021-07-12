// OPACMainUserBlock.js, OPAC SPA Project, Jake Deery on behalf of City College Plymouth, 2021
document.addEventListener("DOMContentLoaded", function(event) { 
	//
	//
	// miniSpa class
	class miniSpaCls {
		//
		// initialiser
		constructor() {
			//
			// global vars
			this.pageTitle = '';
			this.pageHeadline = '';
			this.pageBlurb = '';
			this.cd = '';

			//
			// local vars
			var header = '<div id=\"-ccp-header-region\" class=\"noprint\"><section class=\"-ccp-transparent-section\"><div class=\"-ccp-container\"><img class=\"-ccp-logo\" src=\"\/cgi-bin\/koha\/opac-image.pl?imagenumber=326\"><div class=\"-ccp-inner-md\"><div class=\"-ccp-breadcrumb-container\"><\/div><h1 class=\"-ccp-site-title\"><\/h1><h1 class=\"-ccp-page-title -ccp-heading-u -ccp-heading-u-hue2\"><\/h1><\/div><\/div><\/section><\/div>';
			var body = '<div id=\"-ccp-virtual-dom\"><p class=\"text-center\">Loading . . . <\/p><\/div>';
			var footer = '';

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

		// page renderer helper method
		pageFactory(payload) {
			// set metadata
			$(document).attr('title', 'City College Plymouth Digital Village catalogue ' + "\u00bb" + ' ' + this.pageTitle);
			// set pagematter
			$('.-ccp-site-title').html(this.pageHeadline);
			$('.-ccp-page-title').html(this.pageBlurb);
			// now set the main body
			$('#-ccp-virtual-dom').html(payload);
		}

		// page redirect helper method
		pageRedirect(url) {
			// just go + rerender
			window.location.replace(url);
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
			$('#-404-flag').remove();

			//
			//
			// logic
			if(this.cd == '#!/' || this.cd == '#!/hp') {
				//
				// homepage

				// update globals
				this.pageTitle = 'Homepage';
				this.pageHeadline = 'City College Plymouth Digital Village';
				this.pageBlurb = '';

				// configure the breadcrumbs
				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li>');

				// now set the main body
				this.pageFactory('<div class=\"-ccp-ql-wrapper\"><div class=\"-ccp-ql-container\"><h4 class=\"-ccp-heading-u -ccp-heading-u-text2\">Related pages<\/h4><ul><li><a href=\"#!\/info\/opening-hours\">Opening hours<\/a><\/li><li><a href=\"#!\/info\/contact-us\">Contact us<\/a><\/li><li><a href=\"#!\/how-tos\/help-with-this-site\">Help with this site<\/a><\/li><\/ul><\/div><\/div><div id=\"-ccp-page-region\" class=\"col-md-12\" role=\"main\"><section class=\"-ccp-alert-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-md\"><h2 class=\"-ccp-heading-u -ccp-heading-u-charcoal\">Example temporary alert<\/h2><p>This could be where alerts or restrictions to service are placed, with a small descriptor and (optionally) a link<\/p><a href=\"#\" class=\"btn btn-primary\">Visit page &raquo;<\/a><\/div><\/div><\/section><section class=\"-ccp-hue1-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-text1\">Search the catalogue<\/h2><div class=\"-ccp-searchform-container\"><form class=\"-ccp-searchform\" name=\"searchform\" method=\"get\" action=\"\/cgi-bin\/koha\/opac-search.pl\"><div class=\"-ccp-searchform-inner\"><input type=\"text\" title=\"Type search term\" placeholder=\"Search for books, eBooks, journal articles, DVDs...\" class=\"-ccp-searchform-input\" name=\"q\"><button type=\"submit\" class=\"-ccp-searchform-submit btn btn-primary\"><i class=\"fa fa-search fa-fw\"><\/i> Go<\/button><input type=\"hidden\" title=\"IDX\" name=\"idx\" value=\"\"><\/div><\/form><\/div><p><a href=\"\/cgi-bin\/koha\/opac-search.pl\">Advanced search &raquo;<\/a><\/p><\/div><\/div><\/section><section class=\"-ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-hue2\">Databases &amp; Online Resources<\/h2><div class=\"-ccp-grid-container -ccp-offset-grid\" style=\"margin:3rem -1.5rem 0\"><div class=\"-ccp-grid-50 -ccp-offset-grid-bottom -ccp-offset-grid-left -ccp-white-section\"><div class=\"-ccp-grid-inner-lg\"><span class=\"-ccp-text-lg\"><strong>Our external resources<\/strong><\/span><ul class=\"-ccp-padding-x-1 -ccp-padding-y-lg\"><li><a href=\"#!\/online-resources\/search\">Database &amp; online resource search<\/a><\/li><li><a href=\"#!\/online-resources\/open-access\">Open access resources<\/a><\/li><li><a href=\"https:\/\/www.plymouth.ac.uk\/student-life\/your-studies\/library\" target=\"_blank\">University of Plymouth Library services<\/a><\/li><li><a href=\"https:\/\/www.marjon.ac.uk\/student-life\/library\/\" target=\"_blank\">Marjon Library services<\/a><\/li><\/ul><a href=\"#!\/online-resources\/search\" class=\"btn btn-primary -ccp-margin-y-sm\">Search online resources &raquo;<\/a><\/div><\/div><div class=\"-ccp-grid-50 -ccp-offset-grid-right -ccp-hue2-section\"><div class=\"-ccp-grid-inner-lg\"><span class=\"-ccp-text-lg\"><strong>Our internal resources<\/strong><\/span><ul class=\"-ccp-padding-x-1 -ccp-padding-y-lg\"><li><a href=\"#!\/online-resources\/search-ereadables\">eBooks &amp; eJournals<\/a><\/li><li><a href=\"#!\/online-resources\/papers-projects\">Past projects &amp; exam papers<\/a><\/li><li><a href=\"#!\/online-resources\/reading-lists\">Reading lists<\/a><\/li><li><a href=\"#!\/study-skills\">Study Skills &amp; IT Support<\/a><\/li><li><a href=\"#!\/study-skills\/referencing\">Referencing<\/a><\/li><\/ul><a href=\"#!\/online-resources\" class=\"btn btn-primary -ccp-margin-y-sm\">Visit online resources &raquo;<\/a><\/div><\/div><\/div><\/div><\/div><\/section><section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-md\"><h2 class=\"-ccp-heading-u -ccp-heading-u-hue2\">Effectively using the Digital Village<\/h2><div class=\"-ccp-grid-container\"><div class=\"-ccp-grid-50\"><div class=\"-ccp-grid-inner-x-0 -ccp-grid-inner-y-lg\"><ul class=\"-ccp-multilink-list\"><li><a href=\"#!\/how-tos\/logging-on\">Logging on to the catalogue site<\/a><\/li><li><a href=\"#!\/how-tos\/google-workspace\">Accessing our Google services<\/a><\/li><li><a href=\"#!\/how-tos\/accessing-eresources\">Help accessing eResources<\/a><\/li><\/ul><\/div><\/div><div class=\"-ccp-grid-50\"><div class=\"-ccp-grid-inner-x-0 -ccp-grid-inner-y-lg\"><ul class=\"-ccp-multilink-list\"><li><a href=\"#!\/how-tos\/booking-resources\">Booking Digital Village resources &amp; spaces<\/a><\/li><li><a href=\"#!\/how-tos\/booking-resources\">Booking Study Skills support<\/a><\/li><li><a href=\"#!\/how-tos\/booking-resources\">Booking IT Support<\/a><\/li><\/ul><\/div><\/div><\/div><\/div><\/div><\/section><section class=\"-ccp-hue1-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-text1\">Study Skills &amp; IT Support<\/h2><div class=\"-ccp-grid-container\"><div class=\"-ccp-grid-50 -ccp-flex-start\"><div class=\"-ccp-grid-inner-x-0 -ccp-grid-inner-y-lg\"><img src=\"https:\/\/ccp.vo.llownd.net\/library\/opac\/bitmaps\/uploads\/2021\/05\/study-es-stock-img.png\" title=\"Students studying\" alt=\"Decorative: Student studying for exam\" class=\"-ccp-w-100 -ccp-r-33\"\/><\/div><\/div><div class=\"-ccp-grid-50 -ccp-flex-center\"><div class=\"-ccp-grid-inner-r-0 -ccp-grid-inner-l-lg -ccp-grid-inner-y-lg\"><p>For support and guidance on studying for your specific subject, take a look at our Study Skills &amp; IT Support pages where you can find tips and book sessions with our Tutor Librarians.<\/p><a href=\"#!\/study-skills\" class=\"btn btn-primary\">Visit page &raquo;<\/a><\/div><\/div><\/div><\/div><\/div><\/section><section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-md\"><h2 class=\"-ccp-heading-u -ccp-heading-u-hue2\">The Digital Village<\/h2><div class=\"-ccp-grid-container\"><div class=\"-ccp-grid-50 -ccp-flex-center\"><div class=\"-ccp-grid-inner-r-lg -ccp-grid-inner-l-0 -ccp-grid-inner-y-lg\"><p>The Digital Village encompases our Library and self-directed study spaces, as well as our events and lecturing theatre named \'The Apple\'. We\'re found on the first floor of the link building, accessed near the lifts on the first floor of the tower block.<br\/><br\/>If you\'re interested and want to learn more, click the button below to visit our Digital Village page - where you\'ll also find information about up-and-coming events and open-access lectures.<\/p><a href=\"#!\/info\/our-space\" class=\"btn btn-primary\">Visit page &raquo;<\/a><\/div><\/div><div class=\"-ccp-grid-50 -ccp-flex-start\"><div class=\"-ccp-grid-inner-x-0 -ccp-grid-inner-y-lg\"><img src=\"\/\/ccp.vo.llownd.net\/library\/opac\/bitmaps\/uploads\/2021\/05\/library-es-stock-img.jpg\" title=\"Digital Village\" alt=\"Decorative: Library in Reina Sofia\" class=\"-ccp-w-100 -ccp-r-33\"\/><\/div><\/div><\/div><\/div><\/div><\/section><section class=\"-ccp-hue3-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-text3\">How-tos &amp; support<\/h2><div class=\"-ccp-grid-container -ccp-margin-y-1\"><div class=\"-ccp-grid-25\"><a href=\"#!\/how-tos\/using-the-digital-village\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">How to use our services<\/h3><p>A breakdown of how to use our offerings, including what we provide digitally, our physical collection and, our equipment and facilities.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/how-tos\/loaning-books-and-equipment\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Loaning books &amp; equipment<\/h3><p>How borrowing, reserving, renewing and returning College books and equipment can be done, what you can expect from our services, and what we\'ll expect from our students.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/study-skills\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Study Skills &amp; IT Skills<\/h3><p>See how the Digital Village\'s team of tutor librarians and IT technicians can help you become a better studier and get the most our of your College experience.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/how-tos\/google-workspace\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Google Workspace support<\/h3><p>Get support, tips, and tricks on the best practices with the full range of our College Google services - from Classroom to Gmail, Sites to Sheets.<\/p><\/div><\/div><\/a><\/div><\/div><div class=\"-ccp-grid-container -ccp-margin-y-1\"><div class=\"-ccp-grid-25\"><a href=\"#!\/how-tos\/it-support\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Technical Support<\/h3><p>Assistance with things such as incorrect passwords, disabled or unresponsive accounts and problems with College equipment.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/how-tos\/help-with-online-resources\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">eResource tips and help<\/h3><p>Guides to help you access and make the most out of our online and eResource catalogue, from eBooks and eJournals to Databases and open-access materials.<\/p><\/div><\/div><\/a><\/div><\/div><\/div><\/div><\/section><section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-md\"><h2 class=\"-ccp-heading-u -ccp-heading-u-hue2\">Contact us<\/h2><div class=\"-ccp-grid-container\"><div class=\"-ccp-grid-50 -ccp-flex-start\"><div class=\"-ccp-grid-inner-x-0 -ccp-grid-inner-y-lg\"><img src=\"\/\/ccp.vo.llownd.net\/library\/opac\/bitmaps\/uploads\/2021\/05\/friendly-es-stock-img.jpg\" title=\"Contact the Team\" alt=\"Decorative: Smiling lady in Library\" class=\"-ccp-w-100 -ccp-r-33\"\/><\/div><\/div><div class=\"-ccp-grid-50 -ccp-flex-center\"><div class=\"-ccp-grid-inner-r-0 -ccp-grid-inner-l-lg -ccp-grid-inner-y-lg\"><p>The Digital Village can be contacted by email or by telephone during our opening hours. If you have an enquiry, please don\'t hesitate to get in touch.<\/p><ul><li><strong>Email:<\/strong> <a href=\"mailto:library&#64;cityplym&#46;ac&#46;uk\">library&#64;cityplym&#46;ac&#46;uk<\/a><\/li><li><strong>Phone:<\/strong> <a href=\"tel:+441752305366\">01752 305366<\/a><\/li><\/ul><a href=\"#!\/info\/contact-us\" class=\"btn btn-primary\">More info &raquo;<\/a><\/div><\/div><\/div><\/div><\/div><\/section><section class=\"-ccp-hue3-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><div class=\"-ccp-grid-container -ccp-margin-y-1\"><div class=\"-ccp-grid-25\"><p>&nbsp;<\/p><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/study-skills\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Study Skills &amp; IT Skills<\/h3><p>If you feel lost with your studies, consider booking a study or IT skills session with one of our tutor librarians or IT technicians.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/resource-booker\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Search online resources<\/h3><p>Click here to search online resources, databases, and open access resources for your subject field - you\'ll need to use these in your coursework references.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><p>&nbsp;<\/p><\/div><\/div><\/div><\/section><\/div>');

				// handle direct script entries
				if(this.cd == '#!/') window.history.replaceState({additionalInformation:'Updated the URL with JS'}, 'City College Plymouth Digital Village catalogue ' + "\u00bb" + ' ' + this.pageTitle, '#!/hp');

			} else if(this.cd == '#!/test') {
				//
				// test

				this.pageTitle = 'Test page';
				this.pageHeadline= 'Test page';
				this.pageBlurb = 'Please ignore';

				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li>');
				this.pageFactory('<div class=\"-ccp-ql-wrapper\"><div class=\"-ccp-ql-container\"><h4 class=\"-ccp-heading-u -ccp-heading-u-text2\">Related pages<\/h4><ul><li><a href=\"#!\/hp\">Get to the choppa!<\/a><\/li><\/ul><\/div><\/div><div id=\"-ccp-page-region\" class=\"col-md-12\" role=\"main\"><section class=\"-ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2>Congratulations!<\/h2><p>A self-test of this SPA has been completed, and I am delighted to inform you that the script is functioning as expected.<\/p><\/div><\/div><\/section><\/div>');

			} else if(this.cd == '#!/info') {
				//
				// info
				this.pageTitle = 'Information';
				this.pageHeadline= 'Information';
				this.pageBlurb = 'A brief overview of who we are, how we can help you and useful links for finding out about us';

				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li><li class=\"-ccp-breadcrumb-item\">Information<\/li>');
				this.pageFactory('<div class=\"-ccp-ql-wrapper\"><div class=\"-ccp-ql-container\"><h4 class=\"-ccp-heading-u -ccp-heading-u-text2\">Related pages<\/h4><ul><li><a href=\"#!\/info\/contact-us\">Contact us<\/a><\/li><li><a href=\"#!\/opening-hours\">Opening hours<\/a><\/li><\/ul><\/div><\/div><div id=\"-ccp-page-region\" class=\"col-md-12\" role=\"main\"><section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-hue3\">We are The Library<\/h2><p>Section 1<\/p><\/div><\/div><\/section><section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-hue3\">Our offerings<\/h2><p>Section 2<\/p><\/div><\/div><\/section><section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-hue3\">Information for borrowers<\/h2><p>Section 3<\/p><\/div><\/div><\/section><section class=\"-ccp-hue3-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><div class=\"-ccp-grid-container -ccp-margin-y-1\"><div class=\"-ccp-grid-25\"><p>&nbsp;<\/p><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/info\/contact-us\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Contact us<\/h3><p>If you have a question for the team or want to leave us feedback, you can find our contact details here.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/info\/opening-hours\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Opening hours<\/h3><p>We\'re a welcoming team here to help you discover a world of enriching knowledge. Meet us virtually!<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><p>&nbsp;<\/p><\/div><\/div><\/div><\/div><\/section><\/div>');

			} else if(this.cd == '#!/info/contact-us') {
				//
				// info/contact-us
				this.pageTitle = 'Contact Us';
				this.pageHeadline= 'Contact Us';
				this.pageBlurb = 'A directory of how to contact the wider team as well as individual members, and links to our social media platforms';

				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li><li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/info\">Information<\/a><\/li><li class=\"-ccp-breadcrumb-item\">Contact Us<\/li>');
				this.pageFactory('<div class=\"-ccp-ql-wrapper\"><div class=\"-ccp-ql-container\"><h4 class=\"-ccp-heading-u -ccp-heading-u-text2\">Related pages<\/h4><ul><li><a href=\"#!\/info\/opening-hours\">Opening hours<\/a><\/li><li><a href=\"#!\/info\">Information for Library users<\/a><\/li><\/ul><\/div><\/div><div id=\"-ccp-page-region\" class=\"col-md-12\" role=\"main\"><section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-hue3\">Contact us<\/h2><p>You can contact the team through a variety of means. Please take a look below for a breakdown of our reachable contact points!<\/p><h3>The Library<\/h3><table class=\"table table-bordered table-striped -ccp-margin-y-lg\"><thead><tr role=\"row\"><th>Contact type<\/th><th>Contact name<\/th><th>Contact details<\/th><\/tr><\/thead><tbody><tr class=\"odd\"><td>Telephone<\/td><td>The team<\/td><td><a href=\"tel:+441752305366\">01752 305366<\/a><\/td><\/tr><tr class=\"even\"><td>Email<\/td><td>The team<\/td><td><a href=\"mailto:library&#64;cityplym&#46;ac&#46;uk\">library&#64;cityplym&#46;ac&#46;uk<\/a><\/td><\/tr><\/tbody><\/table><h3>Librarians<\/h3><table class=\"table table-bordered table-striped -ccp-margin-y-lg\"><thead><tr role=\"row\"><th>Contact type<\/th><th>Contact name<\/th><th>Contact details<\/th><\/tr><\/thead><tbody><tr class=\"odd\"><td>Email<\/td><td>Laura George<\/td><td><a href=\"mailto:LGeorge&#64;cityplym&#46;ac&#46;uk\">LGeorge&#64;cityplym&#46;ac&#46;uk<\/a><\/td><\/tr><tr class=\"even\"><td>Email<\/td><td>Rachel Harvey<\/td><td><a href=\"mailto:RHarvey&#64;cityplym&#46;ac&#46;uk\">RHarvey&#64;cityplym&#46;ac&#46;uk<\/a><\/td><\/tr><tr class=\"even\"><td>Email<\/td><td>Ivana Skalicanova<\/td><td><a href=\"mailto:ISkalicanova&#64;cityplym&#46;ac&#46;uk\">ISkalicanova&#64;cityplym&#46;ac&#46;uk<\/a><\/td><\/tr><\/tbody><\/table><h3>Learning Resources<\/h3><table class=\"table table-bordered table-striped -ccp-margin-y-lg\"><thead><tr role=\"row\"><th>Contact type<\/th><th>Contact name<\/th><th>Contact details<\/th><\/tr><\/thead><tbody><tr class=\"odd\"><td>Email<\/td><td>Byron Love<\/td><td><a href=\"mailto:LGeorge&#64;cityplym&#46;ac&#46;uk\">BLove&#64;cityplym&#46;ac&#46;uk<\/a><\/td><\/tr><tr class=\"even\"><td>Email<\/td><td>Jake Deery<\/td><td><a href=\"mailto:JDeery&#64;cityplym&#46;ac&#46;uk\">JDeery&#64;cityplym&#46;ac&#46;uk<\/a><\/td><\/tr><\/tbody><\/table><\/div><\/div><\/section><section class=\"-ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-hue3\">Social Media<\/h2><p>We use social media! Connect with us for regular Library updates.<\/p><ul class=\"-ccp-multilink-list\"><li><a href=\"https:\/\/twitter.com\/cityplymlibrary\" target=\"_blank\">Twitter: @cityplymlibrary<\/a><\/li><\/ul><\/div><\/div><\/section><section class=\"-ccp-hue2-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-hue2\">Our Tweets<\/h2><div class=\"-ccp-grid-container -ccp-margin-y-1\"><div class=\"-ccp-grid-33\"><p>&nbsp;<\/p><\/div><div class=\"-ccp-grid-33\"><a class=\"twitter-timeline\" data-height=\"576\" href=\"https:\/\/twitter.com\/cityplymlibrary?ref_src=twsrc%5Etfw\">Tweets by cityplymlibrary<\/a> <script async src=\"https:\/\/platform.twitter.com\/widgets.js\" charset=\"utf-8\"><\/script><\/div><div class=\"-ccp-grid-33\"><p>&nbsp;<\/p><\/div><\/div><\/div><\/div><\/section><section class=\"-ccp-hue3-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><div class=\"-ccp-grid-container -ccp-margin-y-1\"><div class=\"-ccp-grid-25\"><p>&nbsp;<\/p><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/info\/opening-hours\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Opening times<\/h3><p>Need to know when you can drop your items off? Click here to see our opening times, updated regularly.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/info\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Information for Library users<\/h3><p>We\'re a welcoming team here to help you discover a world of enriching knowledge. Meet us virtually!<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><p>&nbsp;<\/p><\/div><\/div><\/div><\/div><\/section><\/div>');

			} else if(this.cd == '#!/info/opening-hours') {
				//
				// info/opening-hours
				this.pageTitle = 'Opening hours';
				this.pageHeadline= 'Opening hours';
				this.pageBlurb = 'A constantly updated source for our opening hours throughout the academic year';

				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li><li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/info\">Information<\/a><\/li><li class=\"-ccp-breadcrumb-item\">Opening hours<\/li>');
				this.pageFactory('<div class=\"-ccp-ql-wrapper\"><div class=\"-ccp-ql-container\"><h4 class=\"-ccp-heading-u -ccp-heading-u-text2\">Related pages<\/h4><ul><li><a href=\"#!\/info\/contact-us\">Contact us<\/a><\/li><li><a href=\"#!\/info\">Information for Library users<\/a><\/li><\/ul><\/div><\/div><div id=\"-ccp-page-region\" class=\"col-md-12\" role=\"main\"><section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-hue3\">Opening hours<\/h2><p>We\'re open five days a week, Monday-Friday. Throughout the year, we sometimes change our hours depending on demand or the needs of our students.<br\/>Please check back on this page regularly to stay informed on our opening hours, as well as for updates on up-and-coming closures.<\/p><h3>Term 3<\/h3><table class=\"table table-bordered table-striped\"><thead><tr role=\"row\"><th>Day<\/th><th>Hours<\/th><\/tr><\/thead><tbody><tr class=\"odd\"><td>Monday<\/td><td>08:30-17:00 (8.30am-5pm)<\/td><\/tr><tr class=\"even\"><td>Tuesday<\/td><td>08:30-17:00 (8.30am-5pm)<\/td><\/tr><tr class=\"odd\"><td>Wednesday<\/td><td>08:30-17:00 (8.30am-5pm)<\/td><\/tr><tr class=\"even\"><td>Thursday<\/td><td>08:30-17:00 (8.30am-5pm)<\/td><\/tr><tr class=\"odd\"><td>Friday<\/td><td>08:30-17:00 (8.30am-5pm)<\/td><\/tr><\/tbody><\/table><\/div><\/div><\/section><section class=\"-ccp-hue3-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><div class=\"-ccp-grid-container -ccp-margin-y-1\"><div class=\"-ccp-grid-25\"><p>&nbsp;<\/p><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/info\/contact-us\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Contact us<\/h3><p>If you have a question for the team or want to leave us feedback, you can find our contact details here.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/info\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Information for Library users<\/h3><p>We\'re a welcoming team here to help you discover a world of enriching knowledge. Meet us virtually!<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><p>&nbsp;<\/p><\/div><\/div><\/div><\/div><\/section><\/div>');

			} else if(this.cd == '#!/how-tos') {
				//
				// how-tos
				this.pageTitle = 'How-tos & support';
				this.pageHeadline= 'How-tos & support';
				this.pageBlurb = 'Need help with using our services? Try one of the helpful articles on this page.';

				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li><li class=\"-ccp-breadcrumb-item\">How-tos &amp; support<\/li>');
				this.pageFactory('<div class=\"-ccp-ql-wrapper\"><div class=\"-ccp-ql-container\"><h4 class=\"-ccp-heading-u -ccp-heading-u-text2\">Related pages<\/h4><ul><li><a href=\"#!\/how-tos\/logging-on\">Logging on to the Library<\/a><\/li><li><a href=\"#!\/how-tos\/google-workspace\">Accessing our Google services<\/a><\/li><li><a href=\"#!\/how-tos\/accessing-eresources\">Help accessing databases & eResources<\/a><\/li><li><a href=\"#!\/how-tos\/accessing-eresources\">Booking resources<\/a><\/li><\/ul><\/div><\/div><div id=\"-ccp-page-region\" class=\"col-md-12\" role=\"main\"><section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-hue3\">Most common queries<\/h2><p>Section 1<\/p><\/div><\/div><\/section><section class=\"-ccp-hue3-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><div class=\"-ccp-grid-container -ccp-margin-y-1\"><div class=\"-ccp-grid-25\"><p>&nbsp;<\/p><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/online-resources\/databases\/a-z\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Browse databases by subject<\/h3><p>Looking for our online databases? Click here to see a list of our databases broken down by subject field.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/online-resources\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Browse online resources<\/h3><p>Want to browse all of our online resources? Click here to see a complete directory of all our online resources.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><p>&nbsp;<\/p><\/div><\/div><\/div><\/div><\/section><\/div>');

			} else if(this.cd == '#!/reading-lists') {
				//
				// reading-lists

				this.pageTitle = 'Reading lists';
				this.pageHeadline= 'Reading lists';
				this.pageBlurb = 'Useful reading lists and shelf locations for courses';

				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li><li class=\"-ccp-breadcrumb-item\">Reading lists<\/li>');
				this.pageFactory('<div class=\"-ccp-ql-wrapper\"><div class=\"-ccp-ql-container\"><h4 class=\"-ccp-heading-u -ccp-heading-u-text2\">Related pages<\/h4><ul><li>&nbsp;<\/li><\/ul><\/div><\/div><div id=\"-ccp-page-region\" class=\"col-md-12\" role=\"main\"><section class=\"-ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-hue3\">What are reading lists?<\/h2><p>At a foundation level, you may feel that reading isn\'t something you yet need to worry about, however, many courses at this level still feature useful reading lists that can help you get the grade you need. Take a look at the lists below and choose your course to get started!<\/p><\/div><\/div><\/section><section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-hue3\">Search for your course<\/h2><div class=\"-ccp-searchform-container\"><div class=\"-ccp-searchform\"><div class=\"-ccp-searchform-inner\"><input type=\"text\" title=\"Type search term\" placeholder=\"Search for course name, course code...\" id=\"-ccp-ajaxsearch-input\" class=\"-ccp-searchform-input -ccp-w-100\"\/><\/div><\/form><\/div><\/div><p>Hint: To see all results, type \'*\'<\/p><\/div><\/section><section id=\"-ccp-ajaxsearch-results\" class=\"-ccp-hue1-section\" style=\"display:none\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-text1\">Search results<\/h2><div id=\"-ccp-ajaxsearch-noresults\" style=\"display:none\"><h3 style=\"font-weight:normal\">No results! Try another search term<\/h3><\/div><div id=\"-ccp-ajaxsearch-list\"><a href=\"#!\/reading-lists\/aem\/math\" class=\"-ccp-card-link\" style=\"display:none\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Functional Skills in Mathematics<\/h3><\/div><\/div><\/a><a href=\"#!\/reading-lists\/aem\/eng\" class=\"-ccp-card-link\" style=\"display:none\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Functional Skills in English<\/h3><\/div><\/div><\/a><\/div><\/div><\/div><\/div><\/section><section class=\"-ccp-hue3-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><div class=\"-ccp-grid-container -ccp-margin-y-1\"><div class=\"-ccp-grid-25\"><p>&nbsp;<\/p><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/study-skills\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Study Skills &amp; IT Skills<\/h3><p>If you feel lost with your studies, consider booking a study or IT skills session with one of our tutor librarians or IT technicians.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/resource-booker\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Book a resource or space<\/h3><p>Click here to access our resource booking wizard, which will step you through how to book a resource with us.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><p>&nbsp;<\/p><\/div><\/div><\/div><\/div><\/section><\/div>');

				$("#-ccp-ajaxsearch-input").on("input", function() {
					// vars
					var clock = 0;
					var filter = $(this).val().toUpperCase();
					var container = document.getElementById('-ccp-ajaxsearch-results');
					var noResults = document.getElementById('-ccp-ajaxsearch-noresults');
					var inner = document.getElementById('-ccp-ajaxsearch-list');
					var list = inner.getElementsByTagName('a');
			
					// hide everything unless input is
					if($(this).val() == '') container.style.display = 'none';
					else container.style.display = '';
			
					// do search
					if(filter == '*') {
						for (var i = 0; i < list.length; i++) {
							noResults.style.display = 'none';
							list[i].style.display = "";
						}
					} else {
						for (var i = 0; i < list.length; i++) {
							// vars
							var h3 = list[i].getElementsByTagName("h3")[0];
							var txtValue = h3.textContent || h3.innerText;
			
							if (txtValue.toUpperCase().indexOf(filter) > -1) {
								list[i].style.display = "";
								clock++;
							} else {
								list[i].style.display = "none";
							}
			
							// show/hide noresults
							if(clock < 1) noResults.style.display = '';
							else noResults.style.display = 'none';
						}
					}
					
				});

			} else if(this.cd == '#!/reading-lists/aem/eng') {
				//
				// reading-lists

				this.pageTitle = 'Reading lists &raquo; Functional Skills in English';
				this.pageHeadline= 'Reading lists';
				this.pageBlurb = 'Useful reading lists and shelf locations for Functional Skills in English';

				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li><li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/reading-lists\">Reading lists<\/a><\/li><li class=\"-ccp-breadcrumb-item\">Functional Skills in English<\/li>');
				this.pageFactory('<div class=\"-ccp-ql-wrapper\"><div class=\"-ccp-ql-container\"><h4 class=\"-ccp-heading-u -ccp-heading-u-text2\">Related pages<\/h4><ul><li>&nbsp;<\/li><\/ul><\/div><\/div><div id=\"-ccp-page-region\" class=\"col-md-12\" role=\"main\"><section class=\"-ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-hue3\">About your course<\/h2><p>Functional Skills in English convers the fundamental literacy, language, and communcation skills required to progress both in life and the world of work.<\/p><\/div><\/div><\/section><section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-hue3\">Your reading list<\/h2><table class=\"table table-bordered table-striped\"><thead><tr role=\"row\"><th>Title<\/th><th>Item type<\/th><th>Call number<\/th><th>Link<\/th><\/tr><\/thead><tbody><tr class=\"odd\"><td>1960 Pontiac heating, ventilation, and air conditioning shop manual.<\/td><td>Physical book &amp; eBook<\/td><td>629.2\/77<\/td><td><a href=\"\/cgi-bin\/koha\/opac-detail.pl?biblionumber=2\">View record &raquo;<\/a><\/td><\/tr><\/tbody><\/table><\/div><\/div><\/section><section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-hue3\">Call numbers to search<\/h2><table class=\"table table-bordered table-striped\"><thead><tr role=\"row\"><th>Subject<\/th><th>Call number<\/th><th>Description<\/th><\/tr><\/thead><tbody><tr class=\"odd\"><td>English revision guides<\/td><td>428<\/td><td>Functional Skills English revision guides, including CGP Edexcel and IELTS.<\/td><\/tr><\/tbody><\/table><a href=\"#!\/how-tos\/what-is-ddc\" class=\"btn btn-primary\">What is Dewy Decimal?<\/a><\/div><\/div><\/section><section class=\"-ccp-hue3-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><div class=\"-ccp-grid-container -ccp-margin-y-1\"><div class=\"-ccp-grid-25\"><p>&nbsp;<\/p><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/study-skills\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Study Skills &amp; IT Skills<\/h3><p>If you feel lost with your studies, consider booking a study or IT skills session with one of our tutor librarians or IT technicians.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/resource-booker\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Book a resource or space<\/h3><p>Click here to access our resource booking wizard, which will step you through how to book a resource with us.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><p>&nbsp;<\/p><\/div><\/div><\/div><\/div><\/section><\/div>');

			} else {
				//
				// 404 page
				this.pageTitle = 'Error 404 - Page not Found';
				this.pageHeadline = 'Oops!';
				this.pageBlurb = 'Error 404 - Page not Found';

				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li><li class=\"-ccp-breadcrumb-item\">Error 404 - Page not Found<\/li>');
				this.pageFactory('<div class=\"-ccp-ql-wrapper\"><div class=\"-ccp-ql-container\"><h4 class=\"-ccp-heading-u -ccp-heading-u-text2\">Related pages<\/h4><ul><li><a href=\"#!\/hp\">Homepage<\/a><\/li><li><a href=\"javascript:history.go(-1)\">Go back a page<\/a><\/li><\/ul><\/div><\/div><div id=\"-ccp-page-region\" class=\"col-md-12\" role=\"main\"><section class=\"-ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2>Error 404 - Page not Found<\/h2><p><strong>This message can have the following reason(s):<\/strong><\/p><ul><li>You made use of an external link to a catalog item that is no longer available.<\/li><li>You followed an outdated link e.g. from a search engine or a bookmark.<\/li><li>You tried to access a page that needs authentication.<\/li><li>An internal link in our catalog home page is broken and the page does not exist.<\/li><\/ul><p><strong>What\'s next?<\/strong><\/p><ul><li>You can use the menu and links at the top of the page<\/li><li>You can search our catalog using the search form at the bottom of this page.<\/li><li><a href=\"#!\/hp\">Return to the catalog home page.<\/a><\/li><\/ul><p><strong>Report issues and broken links<\/strong><ul><li>To report this error, please contact the Koha Administrator. <a href=\"mailto:library&#64;cityplym&#46;ac&#46;uk\">Send email.<\/a><\/li><\/ul><\/p><\/div><\/div><\/section><section class=\"-ccp-hue3-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u -ccp-heading-u-text2\">Search the catalogue<\/h2><div class=\"-ccp-searchform-container\"><form class=\"-ccp-searchform\" name=\"searchform\" method=\"get\" action=\"\/cgi-bin\/koha\/opac-search.pl\"><div class=\"-ccp-searchform-inner\"><input type=\"text\" title=\"Type search term\" placeholder=\"Search for books, eBooks, journal articles, DVDs...\" class=\"-ccp-searchform-input\" name=\"q\"><button type=\"submit\" class=\"-ccp-searchform-submit btn btn-default\"><i class=\"fa fa-search fa-fw\"><\/i> Go<\/button><input type=\"hidden\" title=\"IDX\" name=\"idx\" value=\"\"><\/div><\/form><\/div><p><a href=\"\/cgi-bin\/koha\/opac-search.pl\">Advanced search &raquo;<\/a><\/p><\/div><\/div><\/section><\/div>');

				// set 404 error flag
				if(!$('#-404-flag').length) $('head').append('<meta id=\"-404-flag\" name=\"robots\" content=\"noindex\">');

			}

			// bonus: snap to the top to simulate a pageload event
			$('html,body').scrollTop(0);
		}
	}

	//
	// main site logic (MAIN FUNC)

	if(window.location.hostname == 'ccp-koha.aka-ish.ga') {
		// initialise site
		const miniSpa = new miniSpaCls;

		// render the page initially
		miniSpa.renderPage();
		// then listen for changes in the url
		window.addEventListener('popstate', function(event) {
			miniSpa.renderPage();
		});
	}

});
