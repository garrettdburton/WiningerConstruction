<?php

	$servername = "localhost";
	$database = "u269232858_homebuilder";
	$username = "u269232858_user";
	$password = "Winingerdb123";

	// Create connection

	$conn = mysqli_connect($servername, $username, $password, $database);

	// Check connection

	if (!$conn) {

		die("Connection failed: " . mysqli_connect_error());
	}
	echo "Connected successfully <br>";