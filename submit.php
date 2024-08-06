<?php
include 'db_connection.php';
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$floorplan = $_POST['floorplan'];
$exterior = $_POST['exterior'];
$interior = $_POST['interior'];

/*Insert Test*/
$sql = "INSERT INTO customer (id, date, name, email, phone, floorplan, exterior, interior)
VALUES (DEFAULT, Now(),'$name', '$email', '$phone', '$floorplan', '$exterior', '$interior')";

if ($conn->query($sql) === TRUE) {
	echo "New record created successfully <br>";
} else {
	echo "Error: " . $sql . "<br>" . $conn->error . "<br>";
};

mysqli_close($conn);
