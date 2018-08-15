<?php
// Database connection
$pdo = new PDO(
    "mysql:host=localhost;dbname=Restaurangbokning;charset=utf8",
    "root",
    "root"
);

header("Access-Control-Allow-Origin: *");

// Select all todos in table

$statement = $pdo -> prepare("SELECT * FROM reservations");
$statement -> execute();
$reservations = $statement -> fetchAll(PDO::FETCH_ASSOC);

echo json_encode($reservations);

