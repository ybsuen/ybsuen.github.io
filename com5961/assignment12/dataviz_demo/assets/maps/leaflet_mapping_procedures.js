       /* Step 1: Initialize Map */
       
      var map = L.map('map').setView([22.3204, 114.17], 12);

      /* Step 2a: Add Open Streetmap Map Tile */
      /*
      L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: ['a', 'b', 'c']
      }).addTo(map)
      */

      mapLink = 
            '<a href="http://openstreetmap.org">OpenStreetMap</a>';
      L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; ' + mapLink,
            maxZoom: 18,
            }).addTo(map);

      /* Step 2b: Customize icon */
      /*
      var myURL = 'assets/maps/'
      var myIcon = L.icon({
        iconUrl: myURL + 'images/pin24.png',
        iconRetinaUrl: myURL + 'images/pin48.png',
        iconSize: [29, 24],
        iconAnchor: [9, 21],
        popupAnchor: [0, -14]
      })
      */

      /* Step 3: Obtain GeoJSON Data */

        var markers = [];
        $.getJSON('http://localhost/d756a/hk_markers.json', function(obj) {
            $.each(obj, function(key,value) {

      /* Step 4: Add Markers */
              var marker =  L.marker( [value.lat, value.lng])
                   .bindPopup( '<a href="' + value.url + '" target="_blank">' + value.name + '</a>' )         
                  .addTo(map);
              });
          });