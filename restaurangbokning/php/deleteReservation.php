<?
require 'fetchDatabase.php';

$id = JSON_decode($_GET['formData']);

$statement = $pdo->prepare(
    "DELETE FROM reservations WHERE resId = '$id'"
);
  
$statement->execute(
);
