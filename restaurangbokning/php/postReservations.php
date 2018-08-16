<?php
require 'fetchDatabase.php';

//header("Content-Type: application/json; charset=UTF-8");
echo "Formdata: " . $_GET['formData'];

echo "<br>";

$formData = JSON_decode($_GET['formData']);

var_dump($formData);



$statement = $pdo->prepare(
    "INSERT INTO reservations (participants, guestId) 
    VALUES (:participants, :guestId)"
);
  
$statement->execute(array(
    ":participants" => $formData->participants,
    ":guestId" => $formData->guestId
));

//echo json_encode($reservations);