var mapboxTiles = L.tileLayer.grayscale('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>', maxZoom: 18,});
//  var mapboxTiles = L.tileLayer.grayscale
var map = L.map('map')
   .addLayer(mapboxTiles)
   .setView([22.287111, 114.191667], 13);

 layerGroup = L.layerGroup().addTo(map);

 var items = [];
 var airtable_read_endpoint = "https://api.airtable.com/v0/appKIU0zkdHt3AVTL/Venues?api_key=keycj6dRwXwYLEjiv";
 var data = [];
 $.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           items = {};
               items["name"] = value.fields.Name;
               items["url"] = value.fields.url;
               items["image_url"] = value.fields.img_url;
               items["latitud"] = value.fields.Lat;
               items["longitud"] = value.fields.Lng;
               data.push(items);
               console.log(items);
        }); // end .each
}); // end getJSON

function remove_map() {
    $('#map').hide();
    map.remove(); 
    // location.reload();
}


function clear_map() {
    $('#map').show();
    layerGroup.clearLayers();
    var mapboxTiles = L.tileLayer.grayscale('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>', maxZoom: 18,});

    var map = L.map('map')
      .addLayer(mapboxTiles)
      .setView([22.287111, 114.191667], 13);

    layerGroup = L.layerGroup().addTo(map);

    var items = [];
    var airtable_read_endpoint = "https://api.airtable.com/v0/appKIU0zkdHt3AVTL/Venues?api_key=keycj6dRwXwYLEjiv";
    var data = [];
    $.getJSON(airtable_read_endpoint, function(result) {
          $.each(result.records, function(key,value) {
              items = {};
                  items["name"] = value.fields.Name;
                  items["url"] = value.fields.url;
                  items["image_url"] = value.fields.img_url;
                  items["latitud"] = value.fields.Lat;
                  items["longitud"] = value.fields.Lng;
                  data.push(items);
                  console.log(items);
            }); // end .each
    }); // end getJSON
}

function place_marker() {
    // var place = document.getElementById("filter").value;
    place = parseInt(filter.value);
    var latlng = L.latLng({ lat: data[place].latitud, lng: data[place].longitud });
    L.marker( latlng )
      .bindPopup( '<a href="' + data[place].url + '" target="_blank">' + '<img src="' + data[place].image_url+'" width = "80px"><br>'+data[place].name + '</a>' )    
      .addTo(layerGroup);
    /* 
    var marker =  L.marker( data[place].lat, data[place].lng)
        .bindPopup( '<a href="' + data[place].url + '" target="_blank">' + data[place].name + '</a>' )         
        .addTo(map);
    */
}   


function show_districts(){
  for (var i in data) {
      var latlng = L.latLng({ lat: data[i].latitud, lng: data[i].longitud });
      L.marker( latlng )
          .bindPopup( '<a href="' + data[i].url + '" target="_blank">' + '<img src="' + data[i].image_url+'" width = "80px"><br>'+data[i].name + '</a>' )
          .addTo(layerGroup);
  }
}

function clear_markers () {
               // map.removeLayer(marker);
               layerGroup.clearLayers();
}

$(document).ready(function(){

  $("button#get_data1").click(function() {
      var dataSet = [];
      var items = [];
      var i = 0;
      $('.table-responsive').show();
      var airtable_read_endpoint = "https://api.airtable.com/v0/appKIU0zkdHt3AVTL/Roll-up?api_key=keycj6dRwXwYLEjiv";
      $.getJSON(airtable_read_endpoint, function(result) {
            $.each(result.records, function(key,value) {
                items = [];
                items.push(value.fields['Name']);
                items.push(value.fields['total_items_by_category']);
                dataSet.push(items);
                console.log(items);
              }); // end .each
              console.log(dataSet);

          $('#table1').DataTable( {
              data: dataSet,
              retrieve: true,
              columns: [
                  { title: "Product",
                    defaultContent:""},
                  { title: "Total Amount",
                      defaultContent:"" },
              ]
          } );

      }); // end .getJSON
   }); // end button

   $("button#get_data2").click(function() {
        var dataSet = [];
        var items = [];
        var i = 0;
        $('.table-responsive').show();
        var airtable_read_endpoint = "https://api.airtable.com/v0/appKIU0zkdHt3AVTL/Roll-up?api_key=keycj6dRwXwYLEjiv";
        $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  items = [];
                  items.push(value.fields['Name']);
                  items.push(value.fields['total_items_by_category']);
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
                    type : 'bar',
                    labels:true
                },
                axis: {
                  /*x: {label: 'Product'},*/
                  x: {
                    label: 'Products',
                    type: 'category',
                    categories:['','','','']
                   },
                  y: {label: '# of Items'}
                },
                bar: {
                    title: "# of Items by Product Category:",
                    width: {
                        ratio: .5 // this makes bar width 50% of length between ticks
                      }
                },
                tooltip: {
                  show: false,
              }
                
            }); // end c3.generate
            

            var chart = c3.generate({
                  data: {
                     columns:dataSet,
                     type : 'bar',
                     labels:true,
                     colors: {
                        radio: '#7FB3D5',
                        computer: '#5499C7',
                        tv: '#2980B9',
                        tablet: '#2471A3'
                        }
                   },
                  bar: {
                      title: "Product by Category:",
                      width: {
                        ratio: 0.5 // this makes bar width 50% of length between ticks
                      }
                  },
                  tooltip: {
                      show: false,
                  },
                  axis: {
                    x: {
                        label: 'Products',
                        type: 'category',
                        categories:['','','','']
                       },
                    y: {label: '# of Entries'}
                  },
                  bindto: '#chart1'
            }); // end c3.generate

          var chart = c3.generate({
                data: {
                    columns: dataSet,
                    type : 'donut',
                    colors: {
                      radio: '#7FB3D5',
                      computer: '#5499C7',
                      tv: '#2980B9',
                      tablet: '#2471A3'
                      }
                },
                donut: {
                    title: "Product Distribution",
                },
                bindto: '#chart2'
            }); // end c3.generate

        }); // end .getJSON
 }); // end button

 $("button#clear_tables").click(function() {
          $('.table-responsive').toggle();
          if ( $.fn.dataTable.isDataTable('#table1') ) {
              $('#table1').DataTable().destroy();
              $('#table1').empty();
          }
          if ( $.fn.dataTable.isDataTable('#table2') ) {
              $('#table2').DataTable().destroy();
              $('#table2').empty();
          }
          $('#chart').empty();
          $('#chart1').empty();
          $('#chart2').empty();
 }); // end clear tables

}); // document ready