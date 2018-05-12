var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};


   
   
   
   $(function () {
    $('#alert').hide();
    
        var pinid = getUrlParameter('id');
        pinid = pinid -1;
console.log(pinid);
       var urlProduct = 'http://servicelogistics20180505020236.azurewebsites.net/Api/Logistics';    
          $.ajax({
      
              //Logistic
              type: "GET",
              url:  urlProduct,
      
          }).then(function (data) {
      
              addNewRow(data);
              console.log(data);
              
           
              
          });
      
          function addNewRow(data) {
   
           
            for (var i = 0; i < data.length; i++) {
                

                if(data[i].Payment_id == pinid){

                    var row = '<tr><td>' + 
                    data[i].Address + '</td><td>' + 
                    data[i].Amount + '</td><td>' + 
                    data[i].Delivery_Date + '</a></td><td>' + 
                    data[i].Delivery_status + '</td><td>' + 
                    data[i].Delivery_type + '</td><td>'+ 
                    data[i].Expected_date + '</td><td>'+ 
                    data[i].Logistic_id + '</td><td>'+ 
                    data[i].Order_id + '</td><td>'+
                     
                    data[i].Payment_id + '</td><td>'+ 
                    data[i].Price + '</td><td>'+ 
                    data[i].User_id+ '</td> </tr>';
                    
                    $('#importLogistic').append(row);
                }
    
                
            }
              
          
          }
      
          
      
      
      });