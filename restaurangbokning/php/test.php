<?php
// Database connection
$pdo = new PDO(
    "mysql:host=localhost;dbname=Restaurangbokning;charset=utf8",
    "root",
    "root"
);

// Select all todos in table

$statement = $pdo -> prepare("SELECT * FROM reservations");
$statement -> execute();
$reservations = $statement -> fetchAll(PDO::FETCH_ASSOC);


?>

<?php 
foreach($reservations as $list);
            echo $list ['id'] . " ".  " ". '</br>';   
      echo $list ['time'] . " ".  " ". '</br>';   
?>