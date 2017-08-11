<?php

/**
* This section ensures that Twilio gets a response.
*/

header('Content-type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8"?>'; 
echo '<Response></Response>'; // Place the desired response (if any) here.

/**
* This section actually sends the email.
*/

$From = $_GET['From'];
$RecordingUrl = $_GET['RecordingUrl'];

/* Your email address. */
$to = "info@redcarpetusa.com";
$subject = "Red Carpet Car Wash Voicemail: $From";
$message = "You have received a message from $From\n\n";
$message .= "To listen to this message, please visit this URL: $RecordingUrl";
$headers = "From: webmaster@example.com"; // Who should it come from?
mail($to, $subject, $message, $headers);