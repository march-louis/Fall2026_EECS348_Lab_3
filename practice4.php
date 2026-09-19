Hello there
<?php echo "<h1>Multiplication Table</h1> <title>multiplication table</title>"; ?>
<?php
function printMultiplicationTable($rows, $cols) {
    echo "<table border='1'>";

    echo "<tr><th></th>";
    for ($j = 1; $j <= $cols; $j++) {
        echo "<th>" . $j . "</th>";
    }
    echo "</tr>";

    for ($i = 1; $i <= $rows; $i++) {
        echo "<tr> <th>" . $i . "</th>";
        
        for ($j = 1; $j <= $cols; $j++) {
            echo "<td>" . ($i * $j) . "</td>";
        }
        echo "</tr>";
    }
    echo "</table>";
}

$size = filter_input(INPUT_POST, 'size', FILTER_VALIDATE_INT);

if ($size !== false && $size > 0) {
    printMultiplicationTable($size, $size);
} else {
    echo "Please enter a valid positive integer for the table size.";
}
?>