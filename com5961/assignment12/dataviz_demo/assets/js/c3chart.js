$(document).ready(function() {

        $("#filter").click(function() {
              var modData = [];
              var ctype = filter.value;
              // $.getJSON('http://localhost/d756a/data_export.json/Computer+TV', function(obj) {
              $.getJSON('assets/js/data_export.json', function(obj) {  
               $.each(obj, function(key,value) {
                  modData.push(value);
                  console.log(value);
                }); /* end .each */

                var  chart = c3.generate({

                  data: {
                      json: modData,
                      type: ctype,
                      keys: {
                          x: 'x', 
                          value: ['Total_Count'],
                          }
                  },
            
                      axis: {
                          x: {
                             type: 'category'
                          }
                  }
                }); /* end c3.generate */
              }); /* end $.getJSON */
        }); /* end filter click */

        var modData = [];
        // $.getJSON('http://localhost/d756a/data_export.json/Computer+TV', function(obj) {
        $.getJSON('assets/js/data_export.json', function(obj) { 
               $.each(obj, function(key,value) {
                  modData.push(value);
                  console.log(value);
                }); /* end .each */

          var  chart = c3.generate({

            data: {
                json: modData,
                type: 'bar',
                keys: {
                    x: 'x', 
                    value: ['Total_Count'],
                    }
            },
            
            axis: {
                x: {
                   type: 'category'
                }
            }
          }); /* end c3.generate */
        }); /* end $.getJSON */
}); /* end document ready */