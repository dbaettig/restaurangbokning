<?php
require 'fetchDatabase.php';

$statement = $pdo -> prepare("SELECT * FROM reservations
INNER JOIN guest
ON reservations.guestId = guest.id");
$statement -> execute();
$reservations = $statement -> fetchAll(PDO::FETCH_ASSOC);

echo json_encode($reservations);