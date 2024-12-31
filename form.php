<?php
include 'db_connection.php';
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$emailMessage =
	'Customer Name: ' . $name . PHP_EOL 
. 'Customer Email: ' . $email . PHP_EOL 
. 'Customer Phone: ' . $phone . PHP_EOL 
. 'Message: ' . $message . PHP_EOL;



$emailMessage = wordwrap($emailMessage, 70);

/* Insert */
$sql = "INSERT INTO form (id, name, email, phone, message)
VALUES (DEFAULT,'$name', '$email', '$phone', '$message')";


/* Send email */
mail('thenorthsider35@gmail.com', 'New Customer Form Submission', $emailMessage);
/*mail('twininger@winingerconstruction.com', 'New Customer Request', $emailMessage);
mail('holland@winingerconstruction.com', 'New Customer Request', $emailMessage);*/

/* Confirmation of completed actions */
if ($conn->query($sql) === TRUE) {
	echo "New record created successfully <br>";
} else {
	echo "Error: " . $sql . "<br>" . $conn->error . "<br>";
};

mysqli_close($conn);