<?php
// Database connection
$pdo = new PDO(
    "mysql:host=localhost;dbname=Restaurangbokning;charset=utf8",
    "root",
    "root"
);

header("Access-Control-Allow-Origin: *");

header("Access-Control-Allow-Methods: *");

header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");