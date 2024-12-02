<?php
include 'db_connection.php';
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$floorplan = $_POST['floorplan'];
$exterior = $_POST['exterior'];
$interior = $_POST['interior'];
$upgrade_bath_accessories = $_POST['upgrade_bath_accessories'];
$upgrade_light_fixtures = $_POST['upgrade_light_fixtures'];
$upgrade_kitchen_backsplash = $_POST['upgrade_kitchen_backsplash'];
/*Insert Test*/
$sql = "INSERT INTO customer (id, date, name, email, phone, floorplan, exterior, interior, upgrade_bath_accessories, upgrade_light_fixtures, upgrade_kitchen_backsplash)
VALUES (DEFAULT, Now(),'$name', '$email', '$phone', '$floorplan', '$exterior', '$interior', '$upgrade_bath_accessories', '$upgrade_light_fixtures', '$upgrade_kitchen_backsplash')";

if ($conn->query($sql) === TRUE) {
	echo "New record created successfully <br>";
} else {
	echo "Error: " . $sql . "<br>" . $conn->error . "<br>";
};

mysqli_close($conn);