<?php
require 'fetchDatabase.php';

$formData = JSON_decode($_GET['formData']);

print_r($formData);
print_r($formData -> date);

$date = $formData -> date;


$statement = $pdo -> prepare("SELECT time FROM reservations WHERE date = '$date'");
$statement -> execute();
$time = $statement -> fetchAll(PDO::FETCH_ASSOC);

echo json_encode($time);