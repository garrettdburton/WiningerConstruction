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
$emailMessage =
	'Customer Name: ' . $name . PHP_EOL 
. 'Customer Email: ' . $email . PHP_EOL 
. 'Customer Phone: ' . $phone . PHP_EOL 
. 'Floorplan: ' . $floorplan . PHP_EOL 
. 'Exterior: ' . $exterior . PHP_EOL
. 'Interior: ' . $interior . PHP_EOL
. 'Upgrade Bath: ' . $upgrade_bath_accessories . PHP_EOL
. 'Upgrade Light: ' . $upgrade_light_fixtures . PHP_EOL
. 'Upgrade Backsplash: ' . $upgrade_bath_accessories . PHP_EOL;



$emailMessage = wordwrap($emailMessage, 70);

/* Insert Test */
$sql = "INSERT INTO customer (id, date, name, email, phone, floorplan, exterior, interior, upgrade_bath_accessories, upgrade_light_fixtures, upgrade_kitchen_backsplash)
VALUES (DEFAULT, Now(),'$name', '$email', '$phone', '$floorplan', '$exterior', '$interior', '$upgrade_bath_accessories', '$upgrade_light_fixtures', '$upgrade_kitchen_backsplash')";


/* Send email */
mail('thenorthsider35@gmail.com', 'New Customer Request', $emailMessage);
mail('twininger@winingerconstruction.com', 'New Customer Request', $emailMessage);
mail('holland@winingerconstruction.com', 'New Customer Request', $emailMessage);

/* Confirmation of completed actions */
if ($conn->query($sql) === TRUE) {
	echo "New record created successfully <br>";
} else {
	echo "Error: " . $sql . "<br>" . $conn->error . "<br>";
};

mysqli_close($conn);