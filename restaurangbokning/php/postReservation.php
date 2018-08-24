<?php
require 'fetchDatabase.php';

$formData = JSON_decode($_GET['formData']);

$statement = $pdo->prepare(
    "INSERT INTO reservations (guestId, date, time, participants)
	VALUES(:guestId, :date, :time, :participants);"	
);

$statement->execute(array(
    ":guestId" => $formData->guestId,
	":date" => $formData->date,
	":time" => $formData->chosenSitting,
    ":participants" => $formData->participants
));