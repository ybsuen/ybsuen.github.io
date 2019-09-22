# ybsuen.github.io
 Personal Website
Demo website - https://ybsuen.github.io/workshop_demo

function show_topic() {
    x = parseInt(prompt("Enter x:"));
    y = parseInt(prompt("Enter y:"));
    z = x + y;
    var x = document.getElementById("demo");
    x.style.fontSize = "25px";
    x.style.color = "red";
    x.style.background = "green"
    document.getElementById("demo").innerHTML = "<center><h1 style='color:yellow;'>The answer is:" + z + "</h1></center>";
}
