$(document).ready(function(){  
      $('#data-table').DataTable({  
           // "ajax"     :     "company_data.json",  
           // "ajax"     :     "http://localhost/workshop2/company_data.json",
          "ajax"     :     "assets/js/company-product.json",
           "pageLength": 5,
           "columns"     :     [  
           /*
                {     "data"     :     "name"     },  
                {     "data"     :     "gender"},  
                {     "data"     :     "designation"}  
           */
                {     "data"     :     "company"},  
                {     "data"     :     "product_code"},  
                {     "data"     :     "Number"},  
                {     "data"     :     "address"},
                {     "data"     :     "city"},
                {     "data"     :     "country"},
                {     "data"     :     "name"}
           ]  
      });  
 });   