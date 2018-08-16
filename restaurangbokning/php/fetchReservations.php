<?php
require 'fetchDatabase.php';

$statement = $pdo -> prepare("SELECT * FROM reservations");
$statement -> execute();
$reservations = $statement -> fetchAll(PDO::FETCH_ASSOC);

echo json_encode($reservations);