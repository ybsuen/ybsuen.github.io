
$(document).ready(function() {

  $(".desc").mouseover(function() {
      $(this).css("background-color","#94b8b8");
  });

  $(".desc").mouseout(function() {
      $(this).css("background-color","#e0e0d1");
  });  

   $("#hide_me").click(function(){
    $(".row").hide(1000);
  });

  $("#show_me").click(function(){
    $(".row").show(1000);
  });

  $("#getdata").click(function(){
 
      $("#box1").html('You an check out the product table from the menu. The red "Get Data" button below will let you aggregate the items by product category. <br/><br/>');
      $.getJSON('assets/js/product_count.json', function(obj) {
      $("#lesson").append("<ul>");
        $.each(obj.json, function(key,value) {
        $("#box1").append("<li>" + value.x + "(" + value.Total_Count + ")" + "</li>");
      }); 
      $("#box1").append("<br /><a href='table.html' style='color:black;'><button>Click here to see the details in a table.</button></a></ul>");
      
    });
  }); /* End getdata */

  $("#cleardata").click(function(){
    $("#box1").html('You an check out the product table from the menu. The red "Get Data" button below will let you aggregate the items by product category. <br/><br/>');
  });
  
        // alert("Menu clicked!");      
}); 
