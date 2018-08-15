<?php
require 'fetchDatabase.php';

$statement = $pdo -> prepare("SELECT * FROM guest");
$statement -> execute();
$guest = $statement -> fetchAll(PDO::FETCH_ASSOC);

echo json_encode($guest);