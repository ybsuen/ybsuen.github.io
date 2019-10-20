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
  var data = [];
  var airtable_read_endpoint = "https://api.airtable.com/v0/appM38HXlEVhxmnqx/Tasks?api_key=keyTcsTzckqyBTlk8&sortField=_createdTime&sortDirection=desc";

  $.getJSON(airtable_read_endpoint, function(data) {
          $("#items").append('<div class="row">');
         $.each(data.records, function(key,value) {
             var items = [];
             // $("#lesson").append("<li>"+value.title+"</li>");
             $("#items").append('<div class=".col-md-3">');
             $("#items").append("<h4>"+value.fields.Name+"</h4>");
             $("#items").append('</div>');
             $("#items").append('<div class=".col-md-3">');
             $("#items").append("<h4>"+value.fields.Completed+"</h4>");
             $("#items").append('</div>');
             $("#items").append('<div class=".col-md-3">');
             $("#items").append("<h4>"+value.fields.Time_Estimate+"</h4>");
             $("#items").append('</div>');
             $("#items").append('<div class=".col-md-3">');
             $("#items").append("<h4>"+value.fields.converted+"</h4>");
             $("#items").append('</div>');
             items.push();
       }); // end .each
   $("#item").append("</div>");
        }); // end .getJSON
   }); // end button

}); // document ready
