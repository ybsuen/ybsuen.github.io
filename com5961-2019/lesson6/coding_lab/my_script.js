$(document).ready(function() {
    $("button#hide_h2").on('click',function(){
             $("h2").hide();
    });

    $("button#show_h2").on(‘click’,function(){
             $("h2").show();
             $("h2”).css("color","blue");
             $("h2").html("You clicked me.");
 });
 });

function compute_x_plus_y(x,y) {
  var z = 0;
  x = parseInt(x);
  y = parseInt(y);
  z = x + y;
  return z;
}

function compute_x_minus_y(x,y) {
  var z = 0;
  x = parseInt(x);
  y = parseInt(y);
  z = x - y;
  return z;
}

function ask_for_x_minus_y() {
  // var x = prompt("Enter x value");
  // var y = prompt("Enter y value");
  var x = document.getElementById("myForm").elements[0].value;
  var y = document.getElementById("myForm").elements[1].value;
  var z = compute_x_minus_y(x,y);
  var x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
  document.getElementById("demo").innerHTML = "The answer is " + z;
  // alert("The answer is " + z)
}

function ask_for_x_n_y() {
  var x = prompt("Enter x value");
  var y = prompt("Enter y value");
  var z = compute_x_plus_y(x,y);
  var x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
  document.getElementById("demo").innerHTML = "The answer is " + z;
}

function ask_xy() {
  var x = document.getElementById("myForm").elements[0].value;
  var y = document.getElementById("myForm").elements[1].value;
  var z = compute_x_plus_y(x,y);
  var x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
  document.getElementById("demo").innerHTML = "The answer is " + z;
}

function show_topic() {
  var x = document.getElementById("welcome");
  x.style.fontSize = "25px";
  x.style.color = "red";
}
  