<?php

// Related files
include "../utility/SqlConnection.php";
include "../utility/SqlUtility.php";


// Processing data from javascript
$target_dir = $_SERVER['DOCUMENT_ROOT'] . "/data/photos/";

$email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
$password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_STRING);

// SQL Connection
$conn = openConnection();

// Initiating variable
$validLogin = TRUE;


// Checking input errors
/* Check email and password error */
$sql = "SELECT * FROM user_table WHERE email=\"" . $email . "\"";
if (checkDataExists($conn, $sql)) {
    $sql2 = "SELECT password FROM user_table WHERE email=\"" . $email . "\"";
    $password_hash = executeSql($conn, $sql2);
    $password_hash = mysqli_fetch_row($password_hash);
    $password_hash = $password_hash[0];
    if (!password_verify($password, $password_hash)){
        $validLogin = FALSE;
    }
}
else {
    $validLogin = FALSE;
}

// Executing login
$result = ($validLogin) ? 200 : 403;
echo ($result);

?>