<?php

    /**Related files */
    require "SqlConnection.php";
    require "SqlUtility.php";

    $idValue = null;

    /**Request for movie schedule */
    if (isset($_GET["id"])) {
        $idValue = $_GET["id"];

        $conn = openConnection();
        $sql = "SELECT schedule_id, date, time, (30 - COUNT(seat_num)) AS seat_count
                FROM movie_schedule_table NATURAL JOIN movie_user_table
                WHERE movie_schedule_table.movie_id = $idValue ORDER BY date GROUP BY schedule_id";
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