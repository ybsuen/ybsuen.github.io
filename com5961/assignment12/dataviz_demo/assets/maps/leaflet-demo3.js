       /* Step 1: Initialize Map */
       var map = L.map( 'map', {
              center: [20.0, 5.0],
              minZoom: 2,
              zoom: 2
            })

      /* Step 2a: Add Open Streetmap Map Tile */
      L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: ['a', 'b', 'c']
      }).addTo(map)

      /* Step 2b: Customize icon */
      
      var myURL = 'assets/maps/'
      var myIcon = L.icon({
        iconUrl: myURL + 'images/pin24.png',
        iconRetinaUrl: myURL + 'images/pin48.png',
        iconSize: [29, 24],
        iconAnchor: [9, 21],
        popupAnchor: [0, -14]
      })
      
      /* Step 3: Obtain GeoJSON Data */

        var markers = [];
        $.getJSON('http://localhost/d756a/leaflet_json_export.json', function(obj) {
            $.each(obj, function(key,value) {

      /* Step 4: Add Markers */
              var marker =  L.marker( [value.lat, value.lng],{icon: myIcon} )
                   .bindPopup( '<a href="' + value.url + '" target="_blank">' + value.name + '</a>' )         
                  .addTo(map);
              });
          });
        

