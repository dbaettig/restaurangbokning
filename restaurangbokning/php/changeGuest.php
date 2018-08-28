<?php
require 'fetchDatabase.php';

$formData = JSON_decode($_GET['formData']);

$statement = $pdo->prepare(
    "UPDATE guest 
    SET firstName = :firstName, lastName = :lastName, phone = :phone, email = :email
    WHERE id = :id"
);

$statement->execute(array(
    ":firstName" => $formData->firstName,
    ":lastName" => $formData->lastName,
	":phone" => $formData->phone,
	":email" => $formData->email,
	":id"=> $formData->id
));