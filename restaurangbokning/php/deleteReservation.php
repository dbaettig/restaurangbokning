<?
require 'fetchDatabase.php';

$formData = JSON_decode($_GET['formData']);
echo($formData);

$id = $formData;

$statement = $pdo->prepare(
    "DELETE FROM reservations WHERE id = '$id'"
);
  
$statement->execute(
);
