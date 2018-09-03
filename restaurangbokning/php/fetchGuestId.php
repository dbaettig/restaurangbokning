<?php
require 'fetchDatabase.php';

$formData = JSON_decode($_GET['formData']);

$email = $formData -> email;

$statement = $pdo -> prepare("SELECT id FROM guest WHERE email = '$email'");
$statement -> execute(
);
$id = $statement -> fetchAll(PDO::FETCH_ASSOC);

echo json_encode($id);