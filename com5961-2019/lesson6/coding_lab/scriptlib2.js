$(document).ready(function(){
  $("button#hide_h2").click(function() {
      $("h2").hide(500);
  });

  $("button#show_h2").click(function() {
      $("h2").show(300);
      $("h2").css("color","blue");
      $("h2").html("You clicked me hard.");
  });


  $("button#get_data").click(function() {
  var airtable_read_endpoint = "https://api.airtable.com/v0/appM38HXlEVhxmnqx/Design%20Projects?api_key=keyTcsTzckqyBTlk8&sortField=_createdTime&sortDirection=desc";

  $.getJSON('airtable_read_endpoint', function(data) {
          $("#items").append('<div class="row">');
         $.each(data.records, function(key,value) {
             // $("#lesson").append("<li>"+value.title+"</li>");
             $("#items").append('<div class=".col-lg-4">');
             $("#items").append("<h4>"+value.fields.name+"</h4>");
             $("#items").append("<p>"+value.fields.category +"</p>");
             $("#items").append('</div>');
       }); // end .each
   $("#item").append("</div>");
        }); // end .getJSON
   }); // end button
}); // end document ready
