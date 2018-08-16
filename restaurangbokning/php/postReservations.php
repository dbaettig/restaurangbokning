<?php
require 'fetchDatabase.php';

header("Content-Type: application/json; charset=UTF-8");

$formData = JSON_decode($_GET['formData'], false);

echo $formData;

$statement = $pdo->prepare(
    "INSERT INTO reservations (participants) 
    VALUES (:participants)"
);
  
$statement->execute(array(
	":participants" => $formData->participants
));

//echo json_encode($reservations);