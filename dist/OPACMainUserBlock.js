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
			var headerPre = '<div id=\"-ccp-header-region\">';
			var header = '<section class=\"-ccp-transparent-section\"><div class=\"-ccp-dark\"><div class=\"-ccp-container\"><img class=\"-ccp-logo\" src=\"https:\/\/www.dropbox.com\/s\/ew8ktssh0j64d5c\/ccp-logo.png?raw=1\"><div class=\"-ccp-inner-md\"><div class=\"-ccp-breadcrumb-container\"><ul id=\"-ccp-breadcrumb-region\" class=\"-ccp-breadcrumb-inner\">Loading . . . <\/ul><\/div><h1 class=\"-ccp-site-title\"><\/h1><h1 class=\"-ccp-page-title -ccp-heading-u\"><\/h1><\/div><\/div><\/div><\/section>';
			var headerPost = '<\/div>';

			var bodyPre = '<div id=\"-ccp-page-region\" class=\"col-md-12\" role=\"main\">';
			var quickLinks = '<div class=\"-ccp-ql-wrapper\"><div class=\"-ccp-ql-container\"><h4 class=\"-ccp-heading-u\">Related pages<\/h4><ul id=\"-ccp-ql-region\"><li>Loading . . . <\/li><\/ul><\/div><\/div>';
			var body = '<div id=\"-ccp-virtualdom-region\"><p class=\"text-center\">Loading . . . <\/p><\/div>';
			var relLinks = '<section class=\"-ccp-hue3-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><div class=\"-ccp-grid-container -ccp-margin-y-1\"><div class=\"-ccp-grid-25\"><p>&nbsp;<\/p><\/div><div id=\"-ccp-rel-links-a-region\" class=\"-ccp-grid-25\">Loading . . . <\/div><div id=\"-ccp-rel-links-b-region\" class=\"-ccp-grid-25\">Loading . . . <\/div><div class=\"-ccp-grid-25\"><p>&nbsp;<\/p><\/div><\/div><\/div><\/div><\/section>';
			var bodyPost = '<\/div>';

			var footerPre = '<div id=\"-ccp-footer-region\">';
			var footer = '<section class=\"-ccp-black-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-md\"><p>\u00a9 City College Plymouth, 2021 | <a href=\"\/\/www.cityplym.ac.uk\/accessibility\/\" target=\"_blank\">Accessibility<\/a> | <a href=\"\/\/www.cityplym.ac.uk\/privacy-notices\/\" target=\"_blank\">Cookies & Privacy<\/a><\/p><\/div><\/div><\/section>';
			var footerPost = '<\/div>';

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
			$('.main').html(headerPre + header + headerPost + bodyPre + quickLinks + body + relLinks + bodyPost);
			$('#opaccredits').html(footerPre + footer + footerPost);
		}

		// page renderer helper method
		pageFactory(payload) {
			// set metadata
			$(document).attr('title', 'City College Plymouth Digital Village catalogue ' + "\u00bb" + ' ' + this.pageTitle);
			// set pagematter
			$('.-ccp-site-title').html(this.pageHeadline);
			$('.-ccp-page-title').html(this.pageBlurb);
			// now set the main body
			$('#-ccp-virtualdom-region').html(payload);
		}

		// page redirect helper method
		pageRedirect(hash) {
			// just go + rerender
			window.location.hash(hash);
		}

		// breadcrumb setter
		// todo: make this work a bit better
		breadcrumbFactory(payload) {
			// set html
			$('#-ccp-breadcrumb-region').html(payload);
		}

		// quick links setter
		// todo: make this work a bit better
		quickLinksFactory(payload) {
			// set html
			$('#-ccp-ql-region').html(payload);
		}

		// quick links setter
		// todo: make this work a bit better
		relLinksFactory(id, payload) {
			// set html
			if(id == 0) $('#-ccp-rel-links-a-region').html(payload);
			else if(id == 1) $('#-ccp-rel-links-b-region').html(payload);
			else console.log('[W] Invalid rel link ID!');

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
				this.pageTitle = 'Homepage'; // tab/window title
				this.pageHeadline = 'City College Plymouth Digital Village'; // heading
				this.pageBlurb = ''; // subheading

				// first, configure the breadcrumbs
				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li>');

				// next, configure the quick links
				this.quickLinksFactory('<li><a href=\"#!\/info\/opening-hours\">Opening hours<\/a><\/li><li><a href=\"#!\/contact-us\">Contact us<\/a><\/li><li><a href=\"#!\/how-tos\/help-with-this-site\">Help with this site<\/a><\/li>');

				// now, set the main body
				this.pageFactory('<section class=\"-ccp-hue1-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u\">Search the catalogue<\/h2><div class=\"-ccp-searchform-container\"><form class=\"-ccp-searchform\" name=\"searchform\" method=\"get\" action=\"\/cgi-bin\/koha\/opac-search.pl\"><div class=\"-ccp-searchform-inner\"><input type=\"text\" title=\"Type search term\" placeholder=\"Search for books, eBooks, journal articles, DVDs...\" class=\"-ccp-searchform-input\" name=\"q\"><button type=\"submit\" class=\"-ccp-searchform-submit btn btn-default\"><i class=\"fa fa-search fa-fw\"><\/i> Go<\/button><input type=\"hidden\" title=\"IDX\" name=\"idx\" value=\"\"><\/div><\/form><\/div><p><a href=\"\/cgi-bin\/koha\/opac-search.pl\">Advanced search &raquo;<\/a><\/p><\/div><\/div><\/section><section class=\"-ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u\">Databases &amp; Online Resources<\/h2><div class=\"-ccp-grid-container -ccp-offset-grid -ccp-margin-t-sm\"><div class=\"-ccp-grid-50 -ccp-offset-grid-bottom -ccp-offset-grid-left -ccp-white-section\"><div class=\"-ccp-grid-inner-lg\"><span class=\"-ccp-text-lg\"><strong>Our external resources<\/strong><\/span><ul class=\"-ccp-padding-x-1 -ccp-padding-y-lg\"><li><a href=\"#!\/search\/ereadables\">eBook &amp; eJournal search<\/a><\/li><li><a href=\"#!\/online-resources\/search\">Database &amp; online resource search<\/a><\/li><li><a href=\"#!\/online-resources\/open-access\">Open access resources<\/a><\/li><li><a href=\"https:\/\/www.plymouth.ac.uk\/student-life\/your-studies\/library\" target=\"_blank\">University of Plymouth Library services<\/a><\/li><li><a href=\"https:\/\/www.marjon.ac.uk\/student-life\/library\/\" target=\"_blank\">Marjon Library services<\/a><\/li><\/ul><a href=\"#!\/online-resources\" class=\"btn btn-primary\">Visit online resources &raquo;<\/a><\/div><\/div><div class=\"-ccp-grid-50 -ccp-offset-grid-right -ccp-hue2-section\"><div class=\"-ccp-grid-inner-lg\"><span class=\"-ccp-text-lg\"><strong>Our internal resources<\/strong><\/span><ul class=\"-ccp-padding-x-1 -ccp-padding-y-lg\"><li><a href=\"#!\/subject-guides\">Subject guides<\/a><\/li><li><a href=\"\/cgi-bin\/koha\/opac-course-reserves.pl\">Reading lists<\/a><\/li><li><a href=\"#!\/online-resources\/papers-projects\">Past projects &amp; exam papers<\/a><\/li><li><a href=\"#!\/study-skills\">Study Skills &amp; IT Support<\/a><\/li><li><a href=\"#!\/study-skills\/referencing\">Referencing<\/a><\/li><\/ul><a href=\"#!\/study-skills\" class=\"btn btn-primary\">Visit Study Skills &raquo;<\/a><\/div><\/div><\/div><\/div><\/div><\/section><section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-md\"><h2 class=\"-ccp-heading-u\">News &amp; events<\/h2><div class=\"-ccp-grid-container\"><div class=\"-ccp-grid-50\"><div class=\"-ccp-grid-inner-x-0 -ccp-grid-inner-y-lg\"><h4>Example news article 1<\/h4><p>Llorem ipsum . . . <\/p><hr \/><h4>Example news article 2<\/h4><p>Llorem ipsum . . . <\/p><\/div><\/div><div class=\"-ccp-grid-50\"><div class=\"-ccp-grid-inner-lg\"><div class=\"-ccp-embed -ccp-embed-4by3\"><iframe class=\"-ccp-embed-item\" src=\"\/\/calendar.google.com\/calendar\/embed?src=c_r7pihn14ic1mm5j956dspro1jo%40group.calendar.google.com&amp;ctz=Europe%2FLondon\" frameboarder=\"0\" scrolling=\"no\"><\/iframe><\/div><h3>&nbsp;<\/h3><div class=\"-ccp-embed -ccp-embed-4by3\"><a class=\"twitter-timeline -ccp-embed -ccp-embed-4by3\" data-width=\"100\" data-height=\"100\" data-dnt=\"true\" href=\"\/\/twitter.com\/cityplym?ref_src=twsrc%5Etfw\">Tweets by cityplym<\/a><script async src=\"\/\/platform.twitter.com\/widgets.js\" charset=\"utf-8\"><\/script> <style>iframe[id^=\"twitter-widget-\"]{position:absolute!important;top:0!important;bottom:0!important;left:0!important;width:100%!important;height:100%!important;border:0!important}<\/style><\/div><\/div><\/div><\/div><\/div><\/div><\/section><section class=\"-ccp-hue1-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u\">Study Skills &amp; IT Support<\/h2><div class=\"-ccp-grid-container\"><div class=\"-ccp-grid-50 -ccp-flex-start\"><div class=\"-ccp-grid-inner-x-0 -ccp-grid-inner-y-lg\"><img src=\"\/\/www.dropbox.com\/s\/jze78upy92y2fpv\/study-es-stock-img.jpg?raw=1\" title=\"Students studying\" alt=\"Decorative: Student studying for exam\" class=\"-ccp-w-100 -ccp-r-33\" \/><\/div><\/div><div class=\"-ccp-grid-50 -ccp-flex-center\"><div class=\"-ccp-grid-inner-r-0 -ccp-grid-inner-l-lg -ccp-grid-inner-y-lg\"><p>For support and guidance on studying for your specific subject, take a look at our Study Skills &amp; IT Support pages where you can find tips and book sessions with our Tutor Librarians.<\/p><a href=\"#!\/study-skills\" class=\"btn btn-primary\">Visit page &raquo;<\/a><\/div><\/div><\/div><\/div><\/div><\/section><section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-md\"><h2 class=\"-ccp-heading-u\">The Digital Village<\/h2><div class=\"-ccp-grid-container\"><div class=\"-ccp-grid-50 -ccp-flex-center\"><div class=\"-ccp-grid-inner-r-lg -ccp-grid-inner-l-0 -ccp-grid-inner-y-lg\"><p>The Digital Village encompases our Library and self-directed study spaces, as well as our events and lecturing theatre named \'The Apple\'. We\'re found on the first floor of the link building, accessed near the lifts on the first floor of the tower block.<br \/><br \/>If you\'re interested and want to learn more, click the button below to visit our Digital Village page - where you\'ll also find information about up-and-coming events and open-access lectures.<\/p><a href=\"#!\/info\/our-space\" class=\"btn btn-primary\">Visit page &raquo;<\/a><\/div><\/div><div class=\"-ccp-grid-50 -ccp-flex-start\"><div class=\"-ccp-grid-inner-x-0 -ccp-grid-inner-y-lg\"><img src=\"\/\/www.dropbox.com\/s\/nwbszvh2mkqv1y2\/library-es-stock-img.jpg?raw=1\" title=\"Digital Village\" alt=\"Decorative: Library in Reina Sofia\" class=\"-ccp-w-100 -ccp-r-33\" \/><\/div><\/div><\/div><\/div><\/div><\/section><section class=\"-ccp-hue1-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u\">Frequently asked questions<\/h2><div class=\"-ccp-grid-container\"><div class=\"-ccp-grid-50 -ccp-flex-start\"><div class=\"-ccp-grid-inner-x-0 -ccp-grid-inner-y-lg\"><img src=\"\/\/www.dropbox.com\/s\/2yxdeg0rp4i10lp\/questions-es-stock-img.jpg?raw=1\" title=\"Frequently asked questions\" alt=\"Decorative: Italian men in conversation\" class=\"-ccp-w-100 -ccp-r-33\" \/><\/div><\/div><div class=\"-ccp-grid-50 -ccp-flex-center\"><div class=\"-ccp-grid-inner-r-0 -ccp-grid-inner-l-lg -ccp-grid-inner-y-lg\"><p>If you have a question you think may have been asked before, try some of the FAQs below. If you think we\'ve missed something essential, please let us know using the Contact Us details below and we\'ll get it added!<\/p><a href=\"#!\/faqs\" class=\"btn btn-primary\">Visit page &raquo;<\/a><\/div><\/div><\/div><\/div><\/div><\/section><section class=\"-ccp-hue2-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u\">Service guides &amp; support<\/h2><div class=\"-ccp-grid-container -ccp-margin-y-1\"><div class=\"-ccp-grid-25\"><a href=\"#!\/how-tos\/using-the-digital-village\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">How to use our services<\/h3><p>A breakdown of how to use our offerings, including what we provide digitally, our physical collection and, our equipment and facilities.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/how-tos\/using-the-digital-village\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">How to use our services<\/h3><p>A breakdown of how to use our offerings, including what we provide digitally, our physical collection and, our equipment and facilities.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/how-tos\/using-the-digital-village\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">How to use our services<\/h3><p>A breakdown of how to use our offerings, including what we provide digitally, our physical collection and, our equipment and facilities.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/how-tos\/using-the-digital-village\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">How to use our services<\/h3><p>A breakdown of how to use our offerings, including what we provide digitally, our physical collection and, our equipment and facilities.<\/p><\/div><\/div><\/a><\/div><\/div><div class=\"-ccp-grid-container -ccp-margin-y-1\"><div class=\"-ccp-grid-25\"><a href=\"#!\/how-tos\/using-the-digital-village\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">How to use our services<\/h3><p>A breakdown of how to use our offerings, including what we provide digitally, our physical collection and, our equipment and facilities.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/how-tos\/using-the-digital-village\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">How to use our services<\/h3><p>A breakdown of how to use our offerings, including what we provide digitally, our physical collection and, our equipment and facilities.<\/p><\/div><\/div><\/a><\/div><\/div><\/div><\/div><\/section><section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-md\"><h2 class=\"-ccp-heading-u\">Contact us<\/h2><div class=\"-ccp-grid-container\"><div class=\"-ccp-grid-50 -ccp-flex-center\"><div class=\"-ccp-grid-inner-x-0 -ccp-grid-inner-y-lg\"><p>The Digital Village can be contacted by email or by telephone during our opening hours. If you have an enquiry, please don\'t hesitate to get in touch.<\/p><ul><li><strong>Email:<\/strong> <a href=\"mailto:library&#64;cityplym&#46;ac&#46;uk\">library&#64;cityplym&#46;ac&#46;uk<\/a><\/li><li><strong>Phone:<\/strong> <a href=\"tel:+441752305366\">01752 305366<\/a><\/li><\/ul><a href=\"#!\/contact-us\" class=\"btn btn-primary\">More info &raquo;<\/a><\/div><\/div><div class=\"-ccp-grid-50 -ccp-flex-start\"><div class=\"-ccp-grid-inner-r-0 -ccp-grid-inner-l-lg -ccp-grid-inner-y-lg\"><img src=\"\/\/www.dropbox.com\/s\/lxn6z3capd7884l\/friendly-es-stock-img.jpg?raw=1\" title=\"Contact the Team\" alt=\"Decorative: Smiling lady in Library\" class=\"-ccp-w-100 -ccp-r-33\" \/><\/div><\/div><\/div><\/div><\/div><\/section>');

				// lastly, set the related links
				this.relLinksFactory(0, '<a href=\"#!\/study-skills\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Study Skills &amp; IT Support<\/h3><p>If you feel lost with your studies, consider booking a study or IT Support session with one of our tutor librarians or IT technicians.<\/p><\/div><\/div><\/a>');
				this.relLinksFactory(1, '<a href=\"#!\/online-resources\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Search online resources<\/h3><p>Click here to search online resources, databases, and open access resources for your subject field - you\'ll need to use these in your coursework references.<\/p><\/div><\/div><\/a>');

				// handle direct script entries
				if(this.cd == '#!/') window.history.replaceState({additionalInformation:'Updated the URL with JS'}, 'City College Plymouth Digital Village catalogue ' + "\u00bb" + ' ' + this.pageTitle, '#!/hp');

			} else if(this.cd == '#!/test') {
				//
				// test

				this.pageTitle = 'Test page';
				this.pageHeadline= 'Test page';
				this.pageBlurb = 'Please ignore';

				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li>');
				this.quickLinksFactory('<li><a href=\"#!\/hp\">It works!<\/a><\/li>');
				this.pageFactory('<div id=\"-ccp-page-region\" class=\"col-md-12\" role=\"main\"><section class=\"-ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2>Congratulations!<\/h2><p>A self-test of this SPA has been completed, and I am delighted to inform you that the script is functioning as expected.<\/p><\/div><\/div><\/section><\/div>');
				this.relLinksFactory(0, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');
				this.relLinksFactory(1, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');

			} else if(this.cd == '#!/contact-us') {
				//
				// contact-us
				this.pageTitle = 'Contact Us';
				this.pageHeadline= 'Contact Us';
				this.pageBlurb = 'A directory of how to contact the wider team as well as individual members, and links to our social media platforms';

				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li><li class=\"-ccp-breadcrumb-item\">Contact Us<\/li>');
				this.quickLinksFactory('<li><a href=\"#!\/info\/opening-hours\">Opening hours<\/a><\/li><li><a href=\"#!\/info\">Information for Library users<\/a><\/li>');
				this.pageFactory('<section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u\">Our contact details<\/h2><p>You can contact the team through a variety of means. Please take a look below for a breakdown of our reachable contact points!<\/p><table class=\"table table-bordered table-striped\"><thead><tr role=\"row\"><th>Contact type<\/th><th>Contact details<\/th><\/tr><\/thead><tbody><tr class=\"even\"><td>Telephone<\/td><td><a href=\"tel:+441752305366\">01752 305366<\/a><\/td><\/tr><tr class=\"odd\"><td>Email<\/td><td><a href=\"mailto:library&#64;cityplym&#46;ac&#46;uk\">library&#64;cityplym&#46;ac&#46;uk<\/a><\/td><\/tr><\/tbody><\/table><p>Alternatively, you can contact individuals within the team using the links below.<\/p><table class=\"table table-bordered table-striped\"><thead><tr role=\"row\"><th>Contact name<\/th><th>Contact details<\/th><\/tr><\/thead><tbody><tr class=\"even\"><td>Laura George, Tutor Librarian<\/td><td><a href=\"mailto:LGeorge&#64;cityplym&#46;ac&#46;uk\">LGeorge&#64;cityplym&#46;ac&#46;uk<\/a><\/td><\/tr><tr class=\"odd\"><td>Byron Love, Tutor Librarian<\/td><td><a href=\"mailto:BLove&#64;cityplym&#46;ac&#46;uk\">BLove&#64;cityplym&#46;ac&#46;uk<\/a><\/td><\/tr><tr class=\"odd\"><td>Rachel Harvey, Tutor Librarian<\/td><td><a href=\"mailto:RHarvey&#64;cityplym&#46;ac&#46;uk\">RHarvey&#64;cityplym&#46;ac&#46;uk<\/a><\/td><\/tr><tr class=\"odd\"><td>Ivana Skalicanova, Library Assistant<\/td><td><a href=\"mailto:ISkalicanova&#64;cityplym&#46;ac&#46;uk\">ISkalicanova&#64;cityplym&#46;ac&#46;uk<\/a><\/td><\/tr><tr class=\"odd\"><td>Lance Strawson, Digital Support Technician<\/td><td><a href=\"mailto:LStrawson&#64;cityplym&#46;ac&#46;uk\">LStrawson&#64;cityplym&#46;ac&#46;uk<\/a><\/td><\/tr><\/tbody><\/table><p>Want to get to know the team? Visit the Meet the Team page for an overview and bio of each staff member. You will almost definitely find a member of our team who can answer your query!<\/p><p><a href=\"#!\/info\/our-team\" class=\"btn btn-primary\">Meet the Team &raquo;<\/a><\/p><\/div><\/div><\/section><section class=\"-ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u\">Social Media<\/h2><p>We use social media! Connect with us for regular Library updates.<\/p><ul class=\"-ccp-multilink-list\"><li><a href=\"https:\/\/twitter.com\/cityplymlibrary\" target=\"_blank\">Twitter: @cityplymlibrary<\/a><\/li><\/ul><\/div><\/div><\/section>');
				this.relLinksFactory(0, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');
				this.relLinksFactory(1, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');

			} else if(this.cd == '#!/faqs') {
				//
				// faqs

				this.pageTitle = 'FAQs';
				this.pageHeadline= 'Frequently asked questions';
				this.pageBlurb = 'Some of our most-asked questions with regards to the Digital Village services';

				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li><li class=\"-ccp-breadcrumb-item\">Frequently asked questions<\/li>');
				this.quickLinksFactory('<li><a href=\"#!\/info\/opening-hours\">Opening hours<\/a><\/li><li><a href=\"#!\/contact-us\">Contact us<\/a><\/li><li><a href=\"#!\/how-tos\/help-with-this-site\">Help with this site<\/a><\/li>');
				this.pageFactory('<section class=\"-ccp-hue1-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u\">Here to help<\/h2><p>The Digital Village team is on-hand to help students orient themselves around the College\'s online and digital facilities. Through a combination of our experience and your questions, here are some of our most-commonly asked questions:<\/p><\/div><\/div><\/section><section class=\"-ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-x-1 -ccp-inner-t-lg -ccp-inner-b-1\"><h2 class=\"-ccp-numeral\">1<\/h2><h2 class=\"-ccp-heading-u\">Where is the Digital Village?<\/h2><p>The Digital Village is located on the first floor of the link building, joining the STEM Centre, Inovation &amp; refectory, and tower block buildings.<\/p><p>The space can be accessed either from the first floor of the STEM Centre by passing through the Maths Centre of Excellence (follow the signs from Reception) or on the first floor of the tower block near the double lifts (again, follow signs from the lifts).<\/p><p>For mor information, click the button below to see a map of the College including directions to the Digital Village.<\/p><p><a href=\"#!\/info\/our-space\" class=\"btn btn-primary\">Our space &raquo;<\/a><\/p><\/div><\/div><\/section><section class=\"-ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-1\"><h2 class=\"-ccp-numeral\">2<\/h2><h2 class=\"-ccp-heading-u\">What types of equipment are available through the Digital Village?<\/h2><p>The Digital Village plays host to the College\'s traditional Library services as well as a comprehensive collection of online resources, eBooks and physical digital equipment such as video cameras and loanable laptops.<\/p><p>The <a href=\"\/cgi-bin\/koha\/opac-search.pl\">Catalogue search<\/a> is usually a good place to start if you wish to search our offerings, however some of our digital equipment is off-Catalogue. To browse those offerings, please click the button below.<\/p><p><a href=\"#!\/info\/our-collection\" class=\"btn btn-primary\">Our collection &raquo;<\/a><\/p><\/div><\/div><\/section><section class=\"-ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-1\"><h2 class=\"-ccp-numeral\">3<\/h2><h2 class=\"-ccp-heading-u\">How long can I borrow items from the Digital Village for?<\/h2><p>To keep things simple, we\'ve recently introduced the \'Easy as 1, 2, 3\' rule for borrowing books, equipment and computers.<\/p><ol><li>Items such as short-term Laptop loans, tablets, etc are available for <strong>1-day loans<\/strong>.<\/li><li>Items that might be necessary to keep overnight such as cameras and camera accessories i.e. tripods are available for <strong>2-day loans<\/strong>.<\/li><li>Other items that are necessary for longer such as books, accessibility hardware, physical journals and, long-term laptop loans are available for <strong>3-week loans<\/strong>.<\/li><\/ol><p>It is worth noting that digital resources such as databases, eBooks and eJournals are usually made available for instant access on-demand. Please check the catalogue per-item for more information.<\/p><p>If you have more questions, its worth checking a Information for Borrwers page as this will give a wider breakdown on how we handle loans and overdue items. Click the button below to visit this part of the site.<\/p><p><a href=\"#!\/info\/for-borrowers\" class=\"btn btn-primary\">Information for borrowers &raquo;<\/a><\/p><\/div><\/div><\/section><section class=\"-ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-1\"><h2 class=\"-ccp-numeral\">4<\/h2><h2 class=\"-ccp-heading-u\">Help! I\'ve forgotten my College password! How can I get access to my College account again?<\/h2><p>Before coming to see us, make sure you\'re using the correct username for the service you want to access. Systems such as <strong>Moodle, bksb and Shibboleth (inc the Catalogue site)<\/strong> will expect <em>only your student ID number<\/em> (e.g. 10712345). To access <strong>Google services<\/strong>, you will need to put <em>cityplym.ac.uk<\/em> after your student ID number (e.g. 10712345@cityplym.ac.uk).<\/p><p>Provided you\'re confident you\'re using the correct username, or alltogether can\'t remember your password, you now have two options:<\/p><p>&nbsp;<\/p><ol><li>If you are <strong>able to come on-site<\/strong>, the fastest method of getting a new password is by visiting the <em>main counter at the Digital Village<\/em>. Refer to FAQ #1 for instructions on how to find us. Please remember to bring photo ID - <strong>preferably an up-to-date student ID card<\/strong>, otherwise a passport or driver\'s licence so we can issue you with a College ID card (\u00a31 charge for a replacement).<\/li><li>If you are <strong>unable to come on-site<\/strong>, you will need to complete the <a target=\"_blank\" href=\"\/\/docs.google.com\/forms\/d\/e\/1FAIpQLSeRNmQdgGWcOzi-NKVhpo-4Win1E92gMfCS1SA2-1sTHrGlxA\/viewform\">IT Support request form<\/a> and wait five working days for a password reset. Within this five working day window, you will receive a telephone call from the College so please be prepared to answer calls from unknown numbers.<\/li><\/ol><p>&nbsp;<\/p><p>For more information on password resets, please visit Student Central and look for the \'Password Reset\' link.<\/p><p><a target=\"_blank\" href=\"\/\/studentcentral.cityplym.ac.uk\" class=\"btn btn-primary\">Student Central &raquo;<\/a><\/p><\/div><\/div><\/section><section class=\"-ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-1\"><h2 class=\"-ccp-numeral\">5<\/h2><h2 class=\"-ccp-heading-u\">What academic support can I get from the Digital Village?<\/h2><p>The Digital Village is home to both the Tutor Librarian team, and the IT Support technicians. Between these two teams, you should find all the support you need to excel in your studies, both in-person and throughout your online studies.<\/p><ul><li><strong>Study Skills sessions<\/strong>, delivered by the Tutor Librarians, are by-appointment one-to-one sessions which can be arranged to help you become a better learner. This can be non-topical support on how to write a good essay, how to reference, the best resources and information sources for your essays, or grammar and literary support.<\/li><li><strong>IT Support sessions<\/strong>, delivered by the IT Support technicians, are by-appointment on-to-one sessions which can be arranged to give you the confidence you need to improve your IT and Google skills. From Docs to Sheets, Classroom to Koha, we can help through tailored tutoring sessions on whatever IT-related topic you need us to go over.<\/li><\/ul><p>If you would like more information on these sessions or would like to book, please click on the button below to get started!<\/p><p><a href=\"#!\/study-skills\" class=\"btn btn-primary\">Study Skills &amp; IT Support &raquo;<\/a><\/p><\/div><\/div><\/section><section class=\"-ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-1\"><h2 class=\"-ccp-numeral\">6<\/h2><h2 class=\"-ccp-heading-u\">Can I check books out myself, and if so, how?<\/h2><p>In short, <strong>yes<\/strong>.<\/p><p>Books and some other items can be checked out using our new self-service kiosks. These kiosks can be found near the main entrance to the Digital Village along with instructional materials to help you navigate through the system.<\/p><p>If you\'re unsure where the self-service kiosks are, ask a member of staff in the space or click the button below to find a map of the space.<\/p><p><a href=\"#!\/info\/our-space\" class=\"btn btn-primary\">Our space &raquo;<\/a><\/p><\/div><\/div><\/section><section class=\"-ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-x-1 -ccp-inner-t-1 -ccp-inner-b-lg\"><h2 class=\"-ccp-numeral\">7<\/h2><h2 class=\"-ccp-heading-u\">How can I get in touch with the Digital Village team?<\/h2><p>To get in touch with the Digital Village team, beit for general Library enquiries, to book sessions or to arrange the return of a borrowed item, visit the Contact Us page where various details can be found for different contact rasons.<\/p><p><a href=\"#!\/contact-us\" class=\"btn btn-primary\">Contact us &raquo;<\/a><\/p><\/div><\/div><\/section>');
				this.relLinksFactory(0, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');
				this.relLinksFactory(1, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');

			} else if(this.cd == '#!/info') {
				//
				// info
				this.pageTitle = 'Information';
				this.pageHeadline = 'Information';
				this.pageBlurb = 'A brief overview of who we are, how we can help you and useful links for finding out about us';

				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li><li class=\"-ccp-breadcrumb-item\">Information<\/li>');
				this.quickLinksFactory('<li><a href=\"#!\/contact-us\">Contact us<\/a><\/li><li><a href=\"#!\/info\/opening-hours\">Opening hours<\/a><\/li>');
				this.pageFactory('<section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u\">We are The Library<\/h2><p>Section 1<\/p><\/div><\/div><\/section><section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u\">Our offerings<\/h2><p>Section 2<\/p><\/div><\/div><\/section><section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u\">Information for borrowers<\/h2><p>Section 3<\/p><\/div><\/div><\/section>');
				this.relLinksFactory(0, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');
				this.relLinksFactory(1, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');

			} else if(this.cd == '#!/info/opening-hours') {
				//
				// info/opening-hours
				this.pageTitle = 'Opening hours';
				this.pageHeadline= 'Opening hours';
				this.pageBlurb = 'A constantly updated source for our opening hours throughout the academic year';

				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li><li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/info\">Information<\/a><\/li><li class=\"-ccp-breadcrumb-item\">Opening hours<\/li>');
				this.quickLinksFactory('<li><a href=\"#!\/contact-us\">Contact us<\/a><\/li><li><a href=\"#!\/info\">Information for Library users<\/a><\/li>');
				this.pageFactory('<section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u\">Opening hours<\/h2><p>We\'re open five days a week, Monday-Friday. Throughout the year, we sometimes change our hours depending on demand or the needs of our students.<br \/>Please check back on this page regularly to stay informed on our opening hours, as well as for updates on up-and-coming closures.<\/p><h3>Term 3<\/h3><table class=\"table table-bordered table-striped\"><thead><tr role=\"row\"><th>Day<\/th><th>Hours<\/th><\/tr><\/thead><tbody><tr class=\"odd\"><td>Monday<\/td><td>08:30-17:00 (8.30am-5pm)<\/td><\/tr><tr class=\"even\"><td>Tuesday<\/td><td>08:30-17:00 (8.30am-5pm)<\/td><\/tr><tr class=\"odd\"><td>Wednesday<\/td><td>08:30-17:00 (8.30am-5pm)<\/td><\/tr><tr class=\"even\"><td>Thursday<\/td><td>08:30-17:00 (8.30am-5pm)<\/td><\/tr><tr class=\"odd\"><td>Friday<\/td><td>08:30-17:00 (8.30am-5pm)<\/td><\/tr><\/tbody><\/table><\/div><\/div><\/section>');
				this.relLinksFactory(0, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');
				this.relLinksFactory(1, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');

			} else if(this.cd == '#!/info/our-space') {
				//
				// info/opening-hours
				this.pageTitle = 'Our Space';
				this.pageHeadline= 'Our Space';
				this.pageBlurb = 'Where are we, and what do we have in our space?';

				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li><li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/info\">Information<\/a><\/li><li class=\"-ccp-breadcrumb-item\">The Space<\/li>');
				this.quickLinksFactory('<li><a href=\"#!\/info\/opening-hours\">Opening hours<\/a><\/li><li><a href=\"#!\/info\/our-team\">Meet the Team<\/a><\/li><li><a href=\"#!\/info\">Information for Library users<\/a><\/li>');
				this.pageFactory('<section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u\">Welcome to the Digital Village<\/h2><p>The Digital Village is the College\'s integrated learning resource & study space, found at the very heart of the campus. <\/p><\/div><\/div><\/section>');
				this.relLinksFactory(0, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');
				this.relLinksFactory(1, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');

			} else if(this.cd == '#!/info/our-team') {
				//
				// info/opening-hours
				this.pageTitle = 'Our Team';
				this.pageHeadline= 'Meet the Team';
				this.pageBlurb = 'Who are we, and what can we do for you?';

				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li><li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/info\">Information<\/a><\/li><li class=\"-ccp-breadcrumb-item\">The Team<\/li>');
				this.quickLinksFactory('<li><a href=\"#!\/info\/opening-hours\">Opening hours<\/a><\/li><li><a href=\"#!\/info\/our-team\">Meet the Team<\/a><\/li><li><a href=\"#!\/info\">Information for Library users<\/a><\/li>');
				this.pageFactory('<section class=\"-ccp-hue1-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u\">Get to know the team<\/h2><p>The Digital Village team exists cross-College and includes a diverse and multi-talented set of individuals. Whatever your academic, research, or Library needs, someone in our department will be able to help. If you\'d like to know us better, why not pop in? You can find information on how to find us on the <a href=\"#!\/info\/our-space\">Our Space<\/a> page.<\/p><\/div><\/div><\/section><section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><div class=\"-ccp-grid-container\"><div class=\"-ccp-grid-25 -ccp-flex-middle\"><div class=\"-ccp-grid-inner-lg -ccp-w-100\"><img src=\"\/\/www.dropbox.com\/s\/gqetpkis086j5qd\/lg.jpg?raw=1\" class=\"-ccp-w-100\" \/><\/div><\/div><div class=\"-ccp-grid-75 -ccp-flex-center\"><div class=\"-ccp-grid-inner-lg\"><h2 class=\"-ccp-heading-u\">Laura George<\/h2><p><strong>Tutor Librarian<\/strong><\/p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget purus ex. Aliquam pretium dapibus neque, eget lobortis tortor placerat a. Integer dapibus nisi vehicula risus tincidunt, eget varius tortor rhoncus. Quisque eu turpis turpis. Praesent sapien arcu, porta nec ligula vel, varius egestas nulla. Proin in urna purus. Nunc urna velit, dignissim eu placerat non, tempus a tellus. Donec pharetra ullamcorper mauris eu placerat. Cras at orci odio. Integer vel sem lacus. Etiam eu tellus gravida sem ornare faucibus. Nunc ut lacinia neque, in tempor nulla. Nam eu porttitor lectus, ac imperdiet lectus. Nullam tempus convallis sem quis aliquam. Morbi id bibendum risus.<br \/><br \/>Nunc at laoreet erat. Etiam eu sollicitudin nulla. Sed sit amet metus ac elit congue pellentesque. Nulla eget purus suscipit, vulputate nisi et, lobortis mi. Aenean eu diam porta, posuere neque in, euismod neque. Donec quis neque sit amet nunc luctus cursus. Nam elit ante, hendrerit eget nulla quis, luctus efficitur ligula. Cras id facilisis erat. Quisque eget arcu non metus consequat pharetra et quis sem.<\/p><p><a href=\"mailto:LGeorge&#64;cityplym&#46;ac&#46;uk\" class=\"btn btn-primary\">Email Laura &raquo;<\/a><\/p><\/div><\/div><\/div><div class=\"-ccp-grid-container\"><div class=\"-ccp-grid-75 -ccp-flex-center\"><div class=\"-ccp-grid-inner-lg\"><h2 class=\"-ccp-heading-u\">Byron Love<\/h2><p><strong>Tutor Librarian<\/strong><\/p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget purus ex. Aliquam pretium dapibus neque, eget lobortis tortor placerat a. Integer dapibus nisi vehicula risus tincidunt, eget varius tortor rhoncus. Quisque eu turpis turpis. Praesent sapien arcu, porta nec ligula vel, varius egestas nulla. Proin in urna purus. Nunc urna velit, dignissim eu placerat non, tempus a tellus. Donec pharetra ullamcorper mauris eu placerat. Cras at orci odio. Integer vel sem lacus. Etiam eu tellus gravida sem ornare faucibus. Nunc ut lacinia neque, in tempor nulla. Nam eu porttitor lectus, ac imperdiet lectus. Nullam tempus convallis sem quis aliquam. Morbi id bibendum risus.<br \/><br \/>Nunc at laoreet erat. Etiam eu sollicitudin nulla. Sed sit amet metus ac elit congue pellentesque. Nulla eget purus suscipit, vulputate nisi et, lobortis mi. Aenean eu diam porta, posuere neque in, euismod neque. Donec quis neque sit amet nunc luctus cursus. Nam elit ante, hendrerit eget nulla quis, luctus efficitur ligula. Cras id facilisis erat. Quisque eget arcu non metus consequat pharetra et quis sem.<\/p><p><a href=\"mailto:BLove&#64;cityplym&#46;ac&#46;uk\" class=\"btn btn-primary\">Email Byron &raquo;<\/a><\/p><\/div><\/div><div class=\"-ccp-grid-25 -ccp-flex-middle\"><div class=\"-ccp-grid-inner-lg -ccp-w-100\"><img src=\"\/\/www.dropbox.com\/s\/41l3swrf1rvkz2y\/bl.jpg?raw=1\" class=\"-ccp-w-100\" \/><\/div><\/div><\/div><div class=\"-ccp-grid-container\"><div class=\"-ccp-grid-25 -ccp-flex-middle\"><div class=\"-ccp-grid-inner-lg -ccp-w-100\"><img src=\"\/\/www.dropbox.com\/s\/5smdrkel1daeeh6\/rh.jpg?raw=1\" class=\"-ccp-w-100\" \/><\/div><\/div><div class=\"-ccp-grid-75 -ccp-flex-center\"><div class=\"-ccp-grid-inner-lg\"><h2 class=\"-ccp-heading-u\">Rachel Harvey<\/h2><p><strong>Library Assistant<\/strong><\/p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget purus ex. Aliquam pretium dapibus neque, eget lobortis tortor placerat a. Integer dapibus nisi vehicula risus tincidunt, eget varius tortor rhoncus. Quisque eu turpis turpis. Praesent sapien arcu, porta nec ligula vel, varius egestas nulla. Proin in urna purus. Nunc urna velit, dignissim eu placerat non, tempus a tellus. Donec pharetra ullamcorper mauris eu placerat. Cras at orci odio. Integer vel sem lacus. Etiam eu tellus gravida sem ornare faucibus. Nunc ut lacinia neque, in tempor nulla. Nam eu porttitor lectus, ac imperdiet lectus. Nullam tempus convallis sem quis aliquam. Morbi id bibendum risus.<br \/><br \/>Nunc at laoreet erat. Etiam eu sollicitudin nulla. Sed sit amet metus ac elit congue pellentesque. Nulla eget purus suscipit, vulputate nisi et, lobortis mi. Aenean eu diam porta, posuere neque in, euismod neque. Donec quis neque sit amet nunc luctus cursus. Nam elit ante, hendrerit eget nulla quis, luctus efficitur ligula. Cras id facilisis erat. Quisque eget arcu non metus consequat pharetra et quis sem.<\/p><p><a href=\"mailto:RHarvey&#64;cityplym&#46;ac&#46;uk\" class=\"btn btn-primary\">Email Rachel &raquo;<\/a><\/p><\/div><\/div><\/div><div class=\"-ccp-grid-container\"><div class=\"-ccp-grid-75 -ccp-flex-center\"><div class=\"-ccp-grid-inner-lg\"><h2 class=\"-ccp-heading-u\">Ivana Skalicanova<\/h2><p><strong>Library Assistant<\/strong><\/p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget purus ex. Aliquam pretium dapibus neque, eget lobortis tortor placerat a. Integer dapibus nisi vehicula risus tincidunt, eget varius tortor rhoncus. Quisque eu turpis turpis. Praesent sapien arcu, porta nec ligula vel, varius egestas nulla. Proin in urna purus. Nunc urna velit, dignissim eu placerat non, tempus a tellus. Donec pharetra ullamcorper mauris eu placerat. Cras at orci odio. Integer vel sem lacus. Etiam eu tellus gravida sem ornare faucibus. Nunc ut lacinia neque, in tempor nulla. Nam eu porttitor lectus, ac imperdiet lectus. Nullam tempus convallis sem quis aliquam. Morbi id bibendum risus.<br \/><br \/>Nunc at laoreet erat. Etiam eu sollicitudin nulla. Sed sit amet metus ac elit congue pellentesque. Nulla eget purus suscipit, vulputate nisi et, lobortis mi. Aenean eu diam porta, posuere neque in, euismod neque. Donec quis neque sit amet nunc luctus cursus. Nam elit ante, hendrerit eget nulla quis, luctus efficitur ligula. Cras id facilisis erat. Quisque eget arcu non metus consequat pharetra et quis sem.<\/p><p><a href=\"mailto:ISkalicanova&#64;cityplym&#46;ac&#46;uk\" class=\"btn btn-primary\">Email Ivana &raquo;<\/a><\/p><\/div><\/div><div class=\"-ccp-grid-25 -ccp-flex-middle\"><div class=\"-ccp-grid-inner-lg -ccp-w-100\"><img src=\"\/\/www.dropbox.com\/s\/dnsw1q3w3195x2o\/is.jpg?raw=1\" class=\"-ccp-w-100\" \/><\/div><\/div><\/div><div class=\"-ccp-grid-container\"><div class=\"-ccp-grid-25 -ccp-flex-middle\"><div class=\"-ccp-grid-inner-lg -ccp-w-100\"><img src=\"\/\/www.dropbox.com\/s\/31tme2lpzy5ff3d\/ls.jpg?raw=1\" class=\"-ccp-w-100\" \/><\/div><\/div><div class=\"-ccp-grid-75 -ccp-flex-center\"><div class=\"-ccp-grid-inner-lg\"><h2 class=\"-ccp-heading-u\">Lance Strawson<\/h2><p><strong>Digital Support Technician<\/strong><\/p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget purus ex. Aliquam pretium dapibus neque, eget lobortis tortor placerat a. Integer dapibus nisi vehicula risus tincidunt, eget varius tortor rhoncus. Quisque eu turpis turpis. Praesent sapien arcu, porta nec ligula vel, varius egestas nulla. Proin in urna purus. Nunc urna velit, dignissim eu placerat non, tempus a tellus. Donec pharetra ullamcorper mauris eu placerat. Cras at orci odio. Integer vel sem lacus. Etiam eu tellus gravida sem ornare faucibus. Nunc ut lacinia neque, in tempor nulla. Nam eu porttitor lectus, ac imperdiet lectus. Nullam tempus convallis sem quis aliquam. Morbi id bibendum risus.<br \/><br \/>Nunc at laoreet erat. Etiam eu sollicitudin nulla. Sed sit amet metus ac elit congue pellentesque. Nulla eget purus suscipit, vulputate nisi et, lobortis mi. Aenean eu diam porta, posuere neque in, euismod neque. Donec quis neque sit amet nunc luctus cursus. Nam elit ante, hendrerit eget nulla quis, luctus efficitur ligula. Cras id facilisis erat. Quisque eget arcu non metus consequat pharetra et quis sem.<\/p><p><a href=\"mailto:LStrawson&#64;cityplym&#46;ac&#46;uk\" class=\"btn btn-primary\">Email Lance &raquo;<\/a><\/p><\/div><\/div><\/div><\/div><\/div><\/section>');
				this.relLinksFactory(0, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');
				this.relLinksFactory(1, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');

			} else if(this.cd == '#!/online-resources') {
				//
				// online-resources
				this.pageTitle = 'Online resources';
				this.pageHeadline= 'Online resources';
				this.pageBlurb = 'A hub for all the College\'s online resources';

				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li><li class=\"-ccp-breadcrumb-item\">Reading lists<\/li>');
				this.quickLinksFactory('<li>&nbsp;<\/li>');
				this.pageFactory('<section class=\"-ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u\">What are reading lists?<\/h2><p>At a foundation level, you may feel that reading isn\'t something you yet need to worry about, however, many courses at this level still feature useful reading lists that can help you get the grade you need. Take a look at the lists below and choose your course to get started!<\/p><\/div><\/div><\/section><section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u\">Search for your course<\/h2><div class=\"-ccp-searchform-container\"><div class=\"-ccp-searchform\"><div class=\"-ccp-searchform-inner\"><input type=\"text\" title=\"Type search term\" placeholder=\"Search for course name, course code...\" id=\"-ccp-ajaxsearch-input\" class=\"-ccp-searchform-input -ccp-w-100\" \/><\/div><\/form><\/div><\/div><p>Hint: To see all results, type \'*\'<\/p><\/div><\/section><section id=\"-ccp-ajaxsearch-results\" class=\"-ccp-hue1-section\" style=\"display:none\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u\">Search results<\/h2><div id=\"-ccp-ajaxsearch-noresults\" style=\"display:none\"><h3 style=\"font-weight:normal\">No results! Try another search term<\/h3><\/div><div id=\"-ccp-ajaxsearch-list\"><a href=\"#!\/reading-lists\/aem\/math\" class=\"-ccp-card-link\" style=\"display:none\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Functional Skills in Mathematics<\/h3><\/div><\/div><\/a><a href=\"#!\/reading-lists\/aem\/eng\" class=\"-ccp-card-link\" style=\"display:none\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Functional Skills in English<\/h3><\/div><\/div><\/a><\/div><\/div><\/div><\/div><\/section>');
				this.relLinksFactory(0, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');
				this.relLinksFactory(1, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');

				$("#-ccp-ajaxsearch-input").on("input", function() {
					// vars
					var clock = 0;
					var filter = $(this).val().toUpperCase();
					var container = document.getElementById('-ccp-ajaxsearch-results');
					var noResults = document.getElementById('-ccp-ajaxsearch-noresults');
					var inner = document.getElementById('-ccp-ajaxsearch-list');
					var list = inner.getElementsByTagName('a');
			
					// hide everything unless input is
					if($(this).val() == '') container.style.display = '';
					else container.style.display = 'none';
			
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

			} else if(this.cd == '#!/search') {
				//
				// generic search page
				this.pageTitle = 'Search the catalogue';
				this.pageHeadline = 'Search the catalogue';
				this.pageBlurb = '';

				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li><li class=\"-ccp-breadcrumb-item\">Search the catalogue<\/li>');
				this.quickLinksFactory('<li><a href=\"#!\/search\/books\">Book search<\/a><\/li><li><a href=\"#!\/search\/equipment\">Equipment search<\/a><\/li><li><a href=\"#!\/search\/ereadables\">eReadable search<\/a><\/li>');
				this.pageFactory('<section class=\"-ccp-hue1-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u\">Search the catalogue<\/h2><div class=\"-ccp-searchform-container\"><form class=\"-ccp-searchform\" name=\"searchform\" method=\"get\" action=\"\/cgi-bin\/koha\/opac-search.pl\"><div class=\"-ccp-searchform-inner\"><input type=\"text\" title=\"Type search term\" placeholder=\"Search for books, eBooks, journal articles, DVDs...\" class=\"-ccp-searchform-input\" name=\"q\"><button type=\"submit\" class=\"-ccp-searchform-submit btn btn-default\"><i class=\"fa fa-search fa-fw\"><\/i> Go<\/button><input type=\"hidden\" title=\"IDX\" name=\"idx\" value=\"\"><\/div><\/form><\/div><p><a href=\"\/cgi-bin\/koha\/opac-search.pl\">Advanced search &raquo;<\/a><\/p><\/div><\/div><\/section><section class=\"-ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2>Help with this page<\/h2><p>If you\'d like to find an item with us, please use the search box above and enter key words about the item you\'d like to search for. For example, if you would like a book on Queen Mary\'s Scotland, try entering \'scotland queen mary\'. <\/p><p>If you\'re looking to refine your search further, you can either use the refinement tools per-search, click \'Advanced search\' and limit your searches that way, or, try searching specifically for <a href=\"#!\/search\/books\">books<\/a>, <a href=\"#!\/search\/equipment\">equipment<\/a>, or, <a href=\"#!\/search\/ereadables\">eBooks &amp; eJournals<\/a>.<\/p><\/div><\/div><\/section>');
				this.relLinksFactory(0, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');
				this.relLinksFactory(1, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');

			} else if(this.cd == '#!/search/books') {
				//
				// book searches
				this.pageTitle = 'Search for books & journals';
				this.pageHeadline = 'Search for books &amp; journals';
				this.pageBlurb = '';

				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li><li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/search\">Search the catalogue<\/a><\/li><li class=\"-ccp-breadcrumb-item\">Search for books<\/li>');
				this.quickLinksFactory('<li><a href=\"#!\/search\">Catalogue search<\/a><\/li><li><a href=\"#!\/search\/equipment\">Equipment search<\/a><\/li><li><a href=\"#!\/search\/ereadables\">eReadable search<\/a><\/li>');
				this.pageFactory('<section class=\"-ccp-hue1-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u\">Search the catalogue<\/h2><div class=\"-ccp-searchform-container\"><form class=\"-ccp-searchform\" name=\"searchform\" method=\"get\" action=\"\/cgi-bin\/koha\/opac-search.pl\"><div class=\"-ccp-searchform-inner\"><input type=\"text\" title=\"Type search term\" placeholder=\"Search for books...\" class=\"-ccp-searchform-input\" name=\"q\"><button type=\"submit\" class=\"-ccp-searchform-submit btn btn-default\"><i class=\"fa fa-search fa-fw\"><\/i> Go<\/button><input type=\"hidden\" title=\"IDX\" name=\"idx\" value=\"\"><input type=\"hidden\" title=\"LIMIT\" name=\"limit\" value=\"ccode:BOOK\"><\/div><\/form><\/div><p><a href=\"\/cgi-bin\/koha\/opac-search.pl\">Advanced search &raquo;<\/a><\/p><\/div><\/div><\/section><section class=\"-ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2>Help with this page<\/h2><p>If you\'d like to find a book with us, please use the search box above and enter key words about the item you\'d like to search for. For example, if you would like a book on Queen Mary\'s Scotland, try entering \'scotland queen mary\'. <\/p><p>If you\'re looking to refine your search further, you can either use the refinement tools per-search, click \'Advanced search\' and limit your searches that way, or, try searching specifically for <a href=\"#!\/search\/equipment\">equipment<\/a>, <a href=\"#!\/search\/ereadables\">eBooks &amp; eJournals<\/a>, or, <a href=\"#!\/search\">anything on our catalogue<\/a>.<\/p><\/div><\/div><\/section>');
				this.relLinksFactory(0, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');
				this.relLinksFactory(1, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');

			} else if(this.cd == '#!/search/equipment') {
				//
				// equipment searches
				this.pageTitle = 'Search for equipment';
				this.pageHeadline = 'Search for equipment';
				this.pageBlurb = '';

				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li><li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/search\">Search the catalogue<\/a><\/li><li class=\"-ccp-breadcrumb-item\">Search for equipment<\/li>');
				this.quickLinksFactory('<li><a href=\"#!\/search\">Catalogue search<\/a><\/li><li><a href=\"#!\/search\/books\">Book search<\/a><\/li><li><a href=\"#!\/search\/ereadables\">eReadable search<\/a><\/li>');
				this.pageFactory('<section class=\"-ccp-hue1-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u\">Search the catalogue<\/h2><div class=\"-ccp-searchform-container\"><form class=\"-ccp-searchform\" name=\"searchform\" method=\"get\" action=\"\/cgi-bin\/koha\/opac-search.pl\"><div class=\"-ccp-searchform-inner\"><input type=\"text\" title=\"Type search term\" placeholder=\"Search for cameras, tripods, digital eqipment, accessories...\" class=\"-ccp-searchform-input\" name=\"q\"><button type=\"submit\" class=\"-ccp-searchform-submit btn btn-default\"><i class=\"fa fa-search fa-fw\"><\/i> Go<\/button><input type=\"hidden\" title=\"IDX\" name=\"idx\" value=\"\"><input type=\"hidden\" title=\"LIMIT\" name=\"limit\" value=\"ccode:EQUIP\"><\/div><\/form><\/div><p><a href=\"\/cgi-bin\/koha\/opac-search.pl\">Advanced search &raquo;<\/a><\/p><\/div><\/div><\/section><section class=\"-ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2>Help with this page<\/h2><p>If you\'d like to find equipment with us, please use the search box above and enter key words about the item you\'d like to search for. For example, if you would like a video camera, try \'camcorder\'.<\/p><p>If you\'re looking to refine your search further, you can either use the refinement tools per-search, click \'Advanced search\' and limit your searches that way, or, try searching specifically for <a href=\"#!\/search\/books\">books<\/a>, <a href=\"#!\/search\/ereadables\">eBooks &amp; eJournals<\/a>, or, <a href=\"#!\/search\">anything on our catalogue<\/a>.<\/p><\/div><\/div><\/section>');
				this.relLinksFactory(0, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');
				this.relLinksFactory(1, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');

			} else if(this.cd == '#!/search/ereadables') {
				//
				// ebook searches
				this.pageTitle = 'Search for eReadables';
				this.pageHeadline = 'Search for eBooks &amp; eJournals';
				this.pageBlurb = '';

				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li><li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/search\">Search the catalogue<\/a><\/li><li class=\"-ccp-breadcrumb-item\">Search for eBooks &amp; eJournals<\/li>');
				this.quickLinksFactory('<li><a href=\"#!\/search\">Catalogue search<\/a><\/li><li><a href=\"#!\/search\/books\">Book search<\/a><\/li><li><a href=\"#!\/search\/equipment\">Equipment search<\/a><\/li>');
				this.pageFactory('<section class=\"-ccp-hue1-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u\">Search the catalogue<\/h2><div class=\"-ccp-searchform-container\"><form class=\"-ccp-searchform\" name=\"searchform\" method=\"get\" action=\"\/cgi-bin\/koha\/opac-search.pl\"><div class=\"-ccp-searchform-inner\"><input type=\"text\" title=\"Type search term\" placeholder=\"Search for eBooks, journal articles...\" class=\"-ccp-searchform-input\" name=\"q\"><button type=\"submit\" class=\"-ccp-searchform-submit btn btn-default\"><i class=\"fa fa-search fa-fw\"><\/i> Go<\/button><input type=\"hidden\" title=\"IDX\" name=\"idx\" value=\"\"><input type=\"hidden\" title=\"LIMIT\" name=\"limit\" value=\"ccode:EBK\"><\/div><\/form><\/div><p><a href=\"\/cgi-bin\/koha\/opac-search.pl\">Advanced search &raquo;<\/a><\/p><\/div><\/div><\/section><section class=\"-ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2>Help with this page<\/h2><p>If you\'d like to find an eBook or eJournal with us, please use the search box above and enter key words about the item you\'d like to search for. For example, if you would like an eBook on Queen Mary\'s Scotland, try entering \'scotland queen mary\'. <\/p><p>If you\'re looking to refine your search further, you can either use the refinement tools per-search, click \'Advanced search\' and limit your searches that way, or, try searching specifically for <a href=\"#!\/search\/books\">books<\/a>, <a href=\"#!\/search\/equipment\">equipment<\/a>, or, <a href=\"#!\/search\">anything on our catalogue<\/a>.<\/p><\/div><\/div><\/section>');
				this.relLinksFactory(0, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');
				this.relLinksFactory(1, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');

			} else if(this.cd == '#!/service-guides') {
				//
				// how-tos
				this.pageTitle = 'Service guides & support';
				this.pageHeadline= 'Service guides & support';
				this.pageBlurb = 'Need help with using our services? Try one of the helpful articles on this page.';

				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li><li class=\"-ccp-breadcrumb-item\">Service guides &amp; support<\/li>');
				this.quickLinksFactory('<li><a href=\"#!\/how-tos\/logging-on\">Logging on to the Library<\/a><\/li><li><a href=\"#!\/how-tos\/google-workspace\">Accessing our Google services<\/a><\/li><li><a href=\"#!\/how-tos\/accessing-eresources\">Help accessing databases & eResources<\/a><\/li><li><a href=\"#!\/how-tos\/accessing-eresources\">Booking resources<\/a><\/li>');
				this.pageFactory('<section class=\"-ccp-white-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u\">Most common queries<\/h2><p>Section 1<\/p><\/div><\/div><\/section><section class=\"-ccp-hue3-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><div class=\"-ccp-grid-container -ccp-margin-y-1\"><div class=\"-ccp-grid-25\"><p>&nbsp;<\/p><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/online-resources\/databases\/a-z\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Browse databases by subject<\/h3><p>Looking for our online databases? Click here to see a list of our databases broken down by subject field.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><a href=\"#!\/online-resources\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Browse online resources<\/h3><p>Want to browse all of our online resources? Click here to see a complete directory of all our online resources.<\/p><\/div><\/div><\/a><\/div><div class=\"-ccp-grid-25\"><p>&nbsp;<\/p><\/div><\/div><\/div><\/div><\/section><\/div>');
				this.relLinksFactory(0, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');
				this.relLinksFactory(1, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');

			} else if(this.cd == '#!/subject-guides') {
				//
				// subject guides landing page
				this.pageTitle = 'Subject guides';
				this.pageHeadline = 'Subject guides';
				this.pageBlurb = '';

				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li><li class=\"-ccp-breadcrumb-item\">Subject guides<\/li>');
				this.quickLinksFactory('<li><a href=\"\/cgi-bin\/koha\/opac-course-reserves.pl\">Reading lists<\/a><\/li><li><a href=\"#!\/online-resources\/papers-projects\">Past papers &amp; exam papers<\/a><\/li><li><a href=\"#!\/online-resources\/search\">Search online resources &amp; databases<\/a><\/li>');
				this.pageFactory('<section class=\"-ccp-hue1-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u\">What are subject guides?<\/h2><p>Subject guides are repositories of information that relate to your course. This will include information and reading lists you can use to pass your course, as well as additional knowledge that will be required for you to reach the higher mark boundaries and succeed. For HE students, you will be expected to access your subject guides regularly.<\/p><\/div><\/div><\/section><section class=\"-ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u\">Browse our subject guides<\/h2><div class=\"-ccp-grid-container -ccp-offset-grid -ccp-margin-t-sm\"><div class=\"-ccp-grid-50 -ccp-offset-grid-bottom -ccp-offset-grid-left -ccp-white-section\"><div class=\"-ccp-grid-inner-lg\"><span class=\"-ccp-text-lg\"><strong>Further Education guides<\/strong><\/span><br \/><a href=\"\/\/moodle.cityplym.ac.uk\/mod\/page\/view.php?id=36205\" target=\"_blank\" class=\"btn btn-primary -ccp-margin-y-md\">Browse FE subject guides &raquo;<\/a><\/div><\/div><div class=\"-ccp-grid-50 -ccp-offset-grid-right -ccp-charcoal-section\"><div class=\"-ccp-grid-inner-lg\"><span class=\"-ccp-text-lg\"><strong>Higher Education guides<\/strong><\/span><br \/><a href=\"\/\/moodle.cityplym.ac.uk\/mod\/page\/view.php?id=36160\" target=\"_blank\" class=\"btn btn-default -ccp-margin-y-md\">Browse HE subject guides &raquo;<\/a><\/div><\/div><\/div><\/div><\/div><\/section>');
				this.relLinksFactory(0, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');
				this.relLinksFactory(1, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Success!<\/h3><p>Related links work successfully.<\/p><\/div><\/div><\/a>');

			} else {
				//
				// 404 page
				this.pageTitle = 'Error 404 - Page not Found';
				this.pageHeadline = 'Oops!';
				this.pageBlurb = 'Error 404 - Page not Found';

				this.breadcrumbFactory('<li class=\"-ccp-breadcrumb-item\"><a href=\"#!\/hp\"><i class=\"fa fa-home fa-fw\"><\/i><\/a><\/li><li class=\"-ccp-breadcrumb-item\">Error 404 - Page not Found<\/li>');
				this.quickLinksFactory('<li><a href=\"#!\/hp\">Homepage<\/a><\/li><li><a href=\"javascript:history.go(-1)\">Go back a page<\/a><\/li>');
				this.pageFactory('<section class=\"-ccp-cloudy-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2>Error 404 - Page not Found<\/h2><p><strong>This message can have the following reason(s):<\/strong><\/p><ul><li>You made use of an external link to a catalog item that is no longer available.<\/li><li>You followed an outdated link e.g. from a search engine or a bookmark.<\/li><li>You tried to access a page that needs authentication.<\/li><li>An internal link in our catalog home page is broken and the page does not exist.<\/li><\/ul><p><strong>What\'s next?<\/strong><\/p><ul><li>You can use the menu and links at the top of the page<\/li><li>You can search our catalog using the search form at the bottom of this page.<\/li><li><a href=\"#!\/hp\">Return to the catalog home page.<\/a><\/li><\/ul><p><strong>Report issues and broken links<\/strong><ul><li>To report this error, please contact the Koha Administrator. <a href=\"mailto:library&#64;cityplym&#46;ac&#46;uk\">Send email.<\/a><\/li><\/ul><\/p><\/div><\/div><\/section><section class=\"-ccp-hue1-section\"><div class=\"-ccp-container\"><div class=\"-ccp-inner-lg\"><h2 class=\"-ccp-heading-u\">Search the catalogue<\/h2><div class=\"-ccp-searchform-container\"><form class=\"-ccp-searchform\" name=\"searchform\" method=\"get\" action=\"\/cgi-bin\/koha\/opac-search.pl\"><div class=\"-ccp-searchform-inner\"><input type=\"text\" title=\"Type search term\" placeholder=\"Search for books, eBooks, journal articles, DVDs...\" class=\"-ccp-searchform-input\" name=\"q\"><button type=\"submit\" class=\"-ccp-searchform-submit btn btn-default\"><i class=\"fa fa-search fa-fw\"><\/i> Go<\/button><input type=\"hidden\" title=\"IDX\" name=\"idx\" value=\"\"><\/div><\/form><\/div><p><a href=\"\/cgi-bin\/koha\/opac-search.pl\">Advanced search &raquo;<\/a><\/p><\/div><\/div><\/section>');
				this.relLinksFactory(0, '<a href=\"#!\/hp\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">Return home<\/h3><p>It looks like you\'ve taken a wrong turn. If you think this is an error or major omission, please let us know - otherwise you can go back to the homepage using this card.<\/p><\/div><\/div><\/a>');
				this.relLinksFactory(1, '<a href=\"#!\/info\/about-koha\" class=\"-ccp-card-link\"><div class=\"-ccp-card-white\"><div class=\"-ccp-card-inner\"><h3 class=\"-ccp-card-header\">About Koha<\/h3><p>Learn more about Koha - our premier integrated Library system which we use to power this website, host our how-to and help articles and catalogue and manage our entire stock.<\/p><\/div><\/div><\/a>');

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
