<?php
require 'fetchDatabase.php';

$formData = JSON_decode($_GET['formData']);

$firstName = $formData -> firstName;
$email = $formData -> email;
$date = $formData -> date;

$msg = "Thanks for your booking $date";

$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From: SC SPORTS <DONOTREPLY@example.com>' . "\r\n";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

echo json_encode($msg);

// send email
mail("evacamilla.s@gmail.com","Your booking",$msg, $headers);
?>