<?
require 'fetchDatabase.php';

$statement = $pdo->prepare(
    "DELETE FROM reservations WHERE id = :id") 
);
  
$statement->execute(array(
   ":id" => $_GET["id"];
));
