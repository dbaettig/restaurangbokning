<?php
require 'fetchDatabase.php';

echo "Formdata: " . $_GET['formData'];

echo "<br>";

$formData = JSON_decode($_GET['formData']);

var_dump($formData);

$statement = $pdo->prepare(
    "INSERT INTO guest (firstName, lastName, phone, email) 
    VALUES (:firstName, :lastName, :phone, :email);
	INSERT INTO reservations (guestId, date, time, participants)
	VALUES(LAST_INSERT_ID(), :date, :time, :participants);"
	
);
  
$statement->execute(array(
    ":firstName" => $formData->firstName,
    ":lastName" => $formData->lastName,
	":phone" => $formData->phone,
	":email" => $formData->email,
	":date" => $formData->date,
	":time" => $formData->chosenSitting,
	":participants" => $formData->participants
));




