<?php
	require "SqlConnection.php";
	require "SqlUtility.php";

	if ($_GET["button"] == -1){
		?>

		<script type = "text/javascript">alert("deleting review")</script>

		<?php
	} 


?>

<script type = "text/javascript" src = "../js/ReviewPage.js"></script>

<?
header('Location: ../html/ReviewPage.html');
exit;
?>