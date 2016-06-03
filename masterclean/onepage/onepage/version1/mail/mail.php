<?php

	$to_email = "shoaibbajwa9@gmail.com"; //Recipient email, Replace with own email here
	
	
	
	//Sanitize input data using PHP filter_var().
	$name		= filter_var($_POST["name"], FILTER_SANITIZE_STRING);
	$date		= filter_var($_POST["date"], FILTER_SANITIZE_STRING);
	$email		= filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
	$message	= filter_var($_POST["message"], FILTER_SANITIZE_EMAIL);
	$subject		= $name;
	$subject_2		= "Solarize";
	//additional php validation
	if(strlen($name)<4){ // If length is less than 4 it will output JSON error.
		$output = json_encode(array('Name is too short or empty!'));
		die($output);
	}
	if (!filter_var($email, FILTER_VALIDATE_EMAIL)){ //email validation
		$output = json_encode(array('Please enter a valid email!'));
		die($output);
	}
	
	
	
	
	//email body
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Appointment Date: ";
$Body .= $date;
$Body .= "\n";
$Body .= "Email ID: ";
$Body .= $email;
$Body .= "\n";
$Body .= "MESSAGE: ";
$Body .= $message;
$Body .= "\n";
	//email auto responder
$Body_2 = "";
$Body_2 .= "Thank you for your email our representative will contact you soon";
$Body .= "\n";
	
	//proceed with PHP email.
	$headers = 'From: '.$name.'' . "\r\n" .
	'Reply-To: '.$email.'' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();
	
	
	$send_mail = mail($to_email, $subject, $Body, $headers);
	echo "<h2>";
		  echo "Thank you for contact us Our Representative will contact you soon";
		 echo "</h2>";	
	$headers_2 = 'From: '.$to_email.'' . "\r\n" .
	mail($email, $subject_2, $Body_2, $headers_2);
	
	if ( $send_mail) {
		print "<meta http-equiv=\"refresh\" content=\"3;URL=../index.html \">";
		}
		else {
		print "<meta http-equiv=\"refresh\" content=\"3;URL=../index.html \">";
		}

?>
