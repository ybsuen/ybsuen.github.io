function compute_x_plus_y(x,y) {
  var z = 0;
  x = parseInt(x);
  y = parseInt(y);
  z = x + y;
  return z;
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
  var x = document.getElementById("1st_num").value;
  var y = document.getElementById("2nd_num").value;
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

$(document).ready(function() {
    $("button#hide_h2").click(function() {
        $("h2").hide(500);
    });

    $("button#show_h2").click(function() {
        $("h2").show(300);
        $("h2").css("color","blue");
        $("h2").html("You clicked me hard.");
    });

    $("button#clear_screen").click(function() {
        var $x = $("container");
        $x.empty();
    });
    
}); // document ready
