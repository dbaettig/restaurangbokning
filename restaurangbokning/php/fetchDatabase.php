<?php
// Database connection
$pdo = new PDO(
    "mysql:host=localhost;dbname=Restaurangbokning;charset=utf8",
    "root",
    "root"
);

header("Access-Control-Allow-Origin: *");

header("Access-Control-Allow-Methods : GET,POST,PUT,DELETE,OPTIONS");

header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");