$(document).ready(function() {
      var map = L.map( 'map', {
            center: [20.0, 5.0],
            minZoom: 2,
            zoom: 2
          })

          mapLink = 
            '<a href="http://openstreetmap.org">OpenStreetMap</a>';
      L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; ' + mapLink,
            maxZoom: 18,
            }).addTo(map);

      $("#filter").click(function() {
          // var map = L.map('map').setView([22.3204, 114.17], 12);

          
          var markers = [];
          var place = filter.value;/* filter.value */
          $.getJSON('http://localhost/d756a/hk_markers.json/'+place, function(obj) {
            $.each(obj, function(key,value) {

            /* Step 4: Add Markers */
              var marker =  L.marker( [value.lat, value.lng])
                   .bindPopup( '<a href="' + value.url + '" target="_blank">' + value.name + '</a>' )         
                  .addTo(map);
            }); /* end each */
          }); /* end getJSON */


        }); /* end filter click */  

}); /* end document ready */
