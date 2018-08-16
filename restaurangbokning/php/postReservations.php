<?php
require 'fetchDatabase.php';

//header("Content-Type: application/json; charset=UTF-8");
echo "Formdata: " . $_GET['formData'];

echo "<br>";

$formData = JSON_decode($_GET['formData']);

var_dump($formData['participants']);


$statement = $pdo->prepare(
    "INSERT INTO reservations (participants) 
    VALUES (:participants)"
);
  
$statement->execute(array(
	":participants" => $formData->participants
));

//echo json_encode($reservations);