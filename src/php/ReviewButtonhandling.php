<?php
	require "SqlConnection.php";
	require "SqlUtility.php";

	// Check browser's cookie
	$cookie = "-999";
	if (isset($_COOKIE["login_cookie"])) {
		$cookie = $_COOKIE["login_cookie"];
	}
	

	if ($_GET["button"] == -1){
		?>

		<script type = "text/javascript">alert("deleting review")</script>

		<?php
		$conn = openConnection();
		$sql = "UPDATE  movie_user_table SET review = NULL where schedule_id = \"".$_GET["button"]"."\" and 
				user_id = ( select id from user_table where token = \"" . $_COOKIE["login_cookie"] . "\" )"
		if ($conn -> query($sql) !== true) {
			array_push($errorList, ["Failure in database connection"]);
		}
		closeConnection($conn);
	} 

	$conn = openConnection();
	$sql = "SELECT review from movie_user_table where schedule_id = \"".$_GET["button"]"."\" and 
			user_id = ( select id from user_table where token = \"" . $_COOKIE["login_cookie"] . "\" )"

	$response = mysqli_query($conn, $sql);

	$review = mysqli_fetch_all($response);

echo $review;
closeConnection($conn);
header('Location: ../html/ReviewPage.html');
exit;
?>