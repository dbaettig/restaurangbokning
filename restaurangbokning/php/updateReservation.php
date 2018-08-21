<?php
require 'fetchDatabase.php';

//header("Content-Type: application/json; charset=UTF-8");


$formData = JSON_decode($_GET['formData']);

$reservationId = $formData->reservationId;
$participants = $formData->participants;

var_dump($reservationId);



$statement = $pdo->prepare(
    "UPDATE reservations 
    SET participants = '$participants'
    WHERE resId = '$reservationId'
    "
);

$statement->execute(
);

//echo json_encode($reservations);