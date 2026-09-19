function changeColor() {
  var textR = (document.getElementById("R").value);
  var textG = (document.getElementById("G").value);
  var textB = (document.getElementById("B").value);
 
  var borderR = (document.getElementById("bR").value);
  var borderG = (document.getElementById("bG").value);
  var borderB = (document.getElementById("bB").value);
 
  var width = document.getElementById("borderWidth").value;
 
  var colorParagraph = document.getElementById("colorParagraph");
  colorParagraph.style.color = "rgb(" + textR + ", " + textG + ", " + textB + ")";
  colorParagraph.style.borderColor = "rgb(" + borderR + ", " + borderG + ", " + borderB + ")";
  colorParagraph.style.borderWidth = width + "px";
}