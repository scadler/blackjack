// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

setInterval(function(){ 
    var red = $("#inputRed").val();
    var redHex = parseInt(red, 10).toString(16);
    console.log(redHex);
    var blue = $("#inputBlue").val();
    var blueHex = parseInt(blue, 10).toString(16);
    console.log(redHex);
    var green = $("#inputGreen").val();
    var greenHex = parseInt(green, 10).toString(16);
    console.log(redHex);
    $("body").css("background-color", "#" + redHex + greenHex + blueHex );   
}, 15);
