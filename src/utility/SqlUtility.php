<?php

function checkDataExists($conn, $sql) {
    $result = mysqli_query($conn, $sql);
    return (mysqli_num_rows($result) > 0);
}

?>