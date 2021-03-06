<?php
require 'fetchDatabase.php';

$formData = JSON_decode($_GET['formData']);

$statement = $pdo->prepare(
    "UPDATE reservations 
    SET participants = :participants, date = :date, time = :time
    WHERE resId = :resId"
);

$statement->execute(array(
    ":participants" => $formData->participants,
    ":resId" => $formData->resId,
	":date" => $formData->date,
	":time" => $formData->chosenSitting
));

