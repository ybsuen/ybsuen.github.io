<script>
            $(document).ready(function(){
                var items = [];
                var at_apiget = "https://api.airtable.com/v0/appKIU0zkdHt3AVTL/Venues?api_key=keycj6dRwXwYLEjiv";

                var data = [];
                $.getJSON(at_apiget, function(result) {
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

                function show_districts() {

                for (var i in data) {
                    var latlng = L.latLng({ lat: data[i].latitud, lng: data[i].longitud });
                    L.marker( latlng )
                        .bindPopup( '<a href="' + data[i].url + '" target="_blank">' + '<img src="' + data[i].image_url+'" width = "80px"><br>'+data[i].name + '</a>' )
                        .addTo(map);
                }
                }
            }); // end document ready    
        </script>