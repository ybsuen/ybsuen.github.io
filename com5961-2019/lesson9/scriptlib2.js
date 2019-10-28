$(document).ready(function(){

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

    $("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appKIU0zkdHt3AVTL/Product?api_key=keycj6dRwXwYLEjiv";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.company);
                       items.push(value.fields.product_code);
                       items.push(value.fields.product_no);
                       items.push(value.fields.geocode2);
                       items.push(value.fields.json);
                       items.push(value.fields.gender);
                       items.push(value.fields.name);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#table1').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "Company",
                       defaultContent:""},
                     { title: "Product",
                         defaultContent:"" },
                     { title: "Number",
                       defaultContent:"" },
                     { title: "Geo Code",
                       defaultContent:""},
                     { title: "JSON",
                         defaultContent:""},
                     { title: "Gender",
                       defaultContent:""},
                     { title: "Name",
                       defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button

     $("button#get_data2").click(function() {
      var items = [];
      var i = 0;
      var airtable_read_endpoint = "https://api.airtable.com/v0/appKIU0zkdHt3AVTL/Roll-up?api_key=keycj6dRwXwYLEjiv";
      var dataSet = [];
      $.getJSON(airtable_read_endpoint, function(result) {
             $.each(result.records, function(key,value) {
                 items = [];
                     items.push(value.fields.Name);
                     items.push(value.fields.total_items_by_category);
                     dataSet.push(items);
                     console.log(items);
              }); // end .each
              console.log(dataSet);

           $('#table2').DataTable( {
               data: dataSet,
               retrieve: true,
               columns: [
                   { title: "Product",
                     defaultContent:""},
                   { title: "Total Amount",
                       defaultContent:"" },
               ]
           } );

           var chart = c3.generate({
                data: {
                    columns: dataSet,
                    type : 'bar'
                },
                axis: {
                  x: {label: 'Product'},
                  y: {label: '# of Items'}
                },
                bar: {
                    title: "# of Items by Product Category:",
                }
            });

      }); // end .getJSON

   }); // end button

}); // document ready
