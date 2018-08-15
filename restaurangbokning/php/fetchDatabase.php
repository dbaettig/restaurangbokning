<?php
// Database connection
$pdo = new PDO(
    "mysql:host=localhost;dbname=Restaurangbokning;charset=utf8",
    "root",
    "root"
);

header("Access-Control-Allow-Origin: *");