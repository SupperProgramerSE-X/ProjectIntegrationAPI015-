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

$(function(){
    
    $.get('ShowProductDetail.html', function(result){
        var x = localStorage.x;
        var y = localStorage.y;
       z = new Date();
        console.log(x+" "+y);
        var row = '<text> Order_id: '+y+'</text><br><text> Total Price: '+x+'</text><br><text> Date: ' +z;

        $('#pinlist').append(row);
       
      
        
    });





});

$(function () {
    var pinid = getUrlParameter('id');
    
   // var proxy = 'https://cors-anywhere.herokuapp.com/';
     var urlPayment ='https://api-payment.herokuapp.com/api/payment';
     
     
     
     
         $.ajax({
             
                     //Payment
                     type: "GET",
                     url:  urlPayment,
             
                 }).then(function (data) {
             
                     addNewRow(data);
                     console.log(data);
                     
                  
                     
                 });
             
                 function addNewRow(data) {

                   
                     for (var i = 0; i < data.length; i++) {
                        if(data[i].orderId == pinid){
                         var row = '<tr><td>' +
                          data[i]._id + '</td><td>' + 
                          data[i].userId + '</td><td>' +
                          data[i].orderId + '</td><td>' +
                          data[i].webName + '</td><td>' + 
                          data[i].price + '</td><td>'+ 
                          data[i].dateTime+'</td></tr>';
             
                         $('#importPayment2').append(row);
                        }

                     }
                     
                     
                     $("#CheckStatus").click(function() {
                        window.location.href = 'Logistic.html?id='+data[pinid].orderId;          
            });        
                        

                 }

               
                 
                });