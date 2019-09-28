<?php

    /**Related files */
    require "SqlConnection.php";
    require "SqlUtility.php";

    $idValue = null;

    /**Request for movie review */
    if (isset($_GET["id"])) {
        $idValue = $_GET["id"];

        $conn = openConnection();
        $sql = "SELECT rating, review, username, profile_pic
                FROM movie_user_table NATURAL JOIN user_table
                WHERE movie_id = " . $idValue . " LIMIT 3";
        $response = mysqli_query($conn, $sql);

        if (!empty($response)) {
            $result = array();

            while ($r = mysqli_fetch_assoc($response)) {
                $result[] = $r;
            }

            echo (json_encode($result));
        }
    }

?>