<?php

// Related files
include "../utility/SqlConnection.php";
include "../utility/SqlUtility.php";

// Get movie for today's date
$conn = openConnection();
$sql = "SELECT "
?>