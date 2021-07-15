<?php
// jake deery 2021
// this code is foss use it how you like yaddah yaddah

// set header now
header('Content-Type: text/plain');

if(isset($_POST['payload'])) {
	$payload = $_POST['payload'];

	// function first!
	function sanitise_output($buffer) {
			$search = array(
					'/\>[^\S ]+/s',		// strip whitespaces after tags, except space
					'/[^\S ]+\</s',		// strip whitespaces before tags, except space
					'/(\s)+/s',			// shorten multiple whitespace sequences
					'/<!--(.|\s)*?-->/'	// Remove HTML comments
			);

			$replace = array(
					'>',
					'<',
					'\\1',
					''
			);

			$buffer = preg_replace($search, $replace, $buffer); // minify
			$buffer = json_encode($buffer, JSON_HEX_QUOT|JSON_HEX_APOS); // escape
			$buffer = str_replace("\u0022", "\\\"", $buffer); // resolve double quotes
			$buffer = str_replace("\u0027", "\\'",	$buffer); // resolve quotes

			return $buffer;
	}

	// now we sanitise
	echo substr(sanitise_output($payload), 1, -1);

} else die('<span style="color:red">ERROR</span>: no payload posted<br /><a href="form.php">return to input form</a>');
