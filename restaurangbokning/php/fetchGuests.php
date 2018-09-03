<?php
require 'fetchDatabase.php';

$statement = $pdo -> prepare("SELECT * FROM guest");
$statement -> execute();
$guests = $statement -> fetchAll(PDO::FETCH_ASSOC);

echo json_encode($guests);