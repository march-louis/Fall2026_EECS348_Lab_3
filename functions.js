function changeColor() {
    var input = document.getElementById("input").value; // Get the input value from the text box
    var rgbValues = input.split(",").map(function(value) { // Split the input string by commas and convert each value to an integer
        return parseInt(value.trim()); // Trim whitespace and convert to integer
    });
    
    if (rgbValues.length === 3 && rgbValues.every(function(value) {
        return !isNaN(value) && value >= 0 && value <= 255;
    })) {
        var color = "rgb(" + rgbValues.join(",") + ")";
        document.getElementById("colorParagraph").style.color = color;
    } else {
        alert("Please enter valid RGB values in the format: R, G, B (0-255)");
    }
}
