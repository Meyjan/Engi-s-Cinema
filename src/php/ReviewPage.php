<?php
	require "SqlConnection.php";
	require "SqlUtility.php";

	// Check browser's cookie
	$cookie = "-999";
	if (isset($_COOKIE["login_cookie"])) {
		$cookie = $_COOKIE["login_cookie"];
	}

	// Check the cookie in the database
	$result = "-999";
	
	$conn = openConnection();
		$sql = "UPDATE  movie_user_table SET review = \"".$_POST["review"]."\", rating = \"".$_POST["rating"]."\" 
				where schedule_id = \"".$_GET["button"]."\" and 
				user_id = ( select id from user_table where token = \"" . $_COOKIE["login_cookie"] . "\" )";
		if ($conn -> query($sql) !== true) {
			array_push($errorList, ["Failure in database connection"]);
		}
		closeConnection($conn);
?>