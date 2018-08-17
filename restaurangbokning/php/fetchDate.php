<?php
require 'fetchDatabase.php';


$formData = JSON_decode($_GET['formData']);

var_dump($formData);


$statement = $pdo -> prepare("SELECT time FROM reservations WHERE date = " . $formData);
$statement -> execute();

$time = $statement -> fetchAll(PDO::FETCH_ASSOC);

var_dump($time);


echo json_encode($time);