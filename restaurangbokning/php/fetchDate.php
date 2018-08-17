<?php
require 'fetchDatabase.php';



$statement = $pdo -> prepare("SELECT * FROM reservations WHERE date = '2018-08-18'");
$statement -> execute();
$time = $statement -> fetchAll(PDO::FETCH_ASSOC);

var_dump($time);

echo json_encode($time);