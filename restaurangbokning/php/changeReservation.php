<?php
require 'fetchDatabase.php';

$formData = JSON_decode($_GET['formData']);

$statement = $pdo->prepare(
    "UPDATE reservations 
    SET participants = :participants
    WHERE resId = :reservationId"
);

$statement->execute(array(
    ":participants" => $formData->participants,
    ":reservationId" => $formData->reservationId
));