<?php
require 'fetchDatabase.php';

$statement = $pdo->prepare(
    "INSERT INTO reservations (participants) 
    VALUES (:participants)"
);
  
$statement->execute(array(
	":participants" => $_POST["participants"],
));

echo json_encode($reservations);