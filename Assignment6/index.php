<!DOCTYPE html>
<?php
    $con = mysqli_connect("localhost", "videogame_user", "passw0rd", "video_games");

    // Check connection
    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
    $sql_statement = "SELECT id, game_name, platform_name, release_year, publisher_name, global_sales FROM game ORDER BY global_sales DESC LIMIT 100;";
    $result = mysqli_query($con, $sql_statement);
?>

<html lang="en" data-bs-theme="dark">
    <head>
        <title>Welcome to the database page!</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
    <body>
        <div class="container">
            <h1 class="pt-3">Video Games:</h1>
            <p>Limited to 100 rows. Sorted by global sales in descending order.</p>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Game Title</th>
                        <th>Platform</th>
                        <th>Release</th>
                        <th>Publisher</th>
                        <th>Global Sales</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    while($row = mysqli_fetch_array($result)) {
                        # Global sales is a decimal number in millions. For example 50 is 50 million in sales.
                        # Convert global sales string to a float value
                        $global_sales = $row['global_sales'];
                        // // # Multiply global sales by 10^6 to get full sales number
                        $global_sales = $global_sales * 1000000;
                        $global_sales = number_format($global_sales);
                        echo "<tr>";
                        echo "<th scope=\"row\">" . $row['id'] . "</th>";
                        echo "<td>" . $row['game_name'] .  "</td>";
                        echo "<td>" . $row['platform_name'] .  "</td>";
                        echo "<td>" . $row['release_year'] .  "</td>";
                        echo "<td>" . $row['publisher_name'] .  "</td>";
                        echo "<td>" . $global_sales .  "</td>";
                        echo "</tr>";
                    }
                    // Free result set
                    mysqli_free_result($result);
                    mysqli_close($con);
                    ?>
                </tbody>
            </table>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </body>
</html>