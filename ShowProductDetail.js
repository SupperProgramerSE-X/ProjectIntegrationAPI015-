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
        pinid = pinid-1; //·ต้องมี-1 เพราะมันนับน้อย
      
    $.ajax({
      
            
        //CP1. Complete Ajax Code to GET ALL pin data 
    
        type: "GET",
        url: "https://soaproductapi.herokuapp.com/products",

    }).then(function (data) {

        addNewRow(data);
        console.log(data);
    });

    function addNewRow(data) {

        // for (var i = 0; i < data.length; i++) {
        //     var row = '<tr><td><a href="edit.html?id=' + data[i].id + '">' + data[i].photo + '</a></td><td>' + data[i].description + '</td><td>' + data[i].photo + '</td><td>' + data[i].price + '</td><td>' + data[i].weight +  '</td> </tr>';
        //     $('#pinlist').append(row);
        // }
var i =0;
var xrow =0;
        
    var row = '<div class="w3-thid w3-container"><div class="ex2"><tr><th><a href="Logistic.html?id=' + 
    data[pinid].id + '" style="text-decoration:none;"<br><img src="' + 
    data[pinid].photo + '"  alt="" style="width:104px;height:142px;"><br> Description:__' + 
    data[pinid].description + '<br> <p><h2> Price:__' + 
    data[pinid].price + '<br> Weight:__' +
    data[pinid].weight + '<br> </a></th></tr></div></div></p></h2>';
    $('#pinlist').append(row);


    $('#price').val(data[pinid].price);
console.log(data[pinid].price);
    var weight1 = data[pinid].weight;
    var res = weight1.substring(0, weight1.length-2);     //weight 
    console.log(res);
 
    $('#weight').val(res);

   
  
    var Total = parseFloat(1) * parseFloat(250)*parseFloat(res) + parseFloat(data[pinid].price); // total
        console.log(Total);
   





            
                // localStorage.setItem("z", dt);

                $(function () { 
                    $("#submit1").click(function() {
                        window.location.href = 'Payment.html?id='+data[pinid].id;
                
                });
                      
                  
                localStorage.setItem("x", Total);
                localStorage.setItem("y", data[pinid].id);
                });
                

        }
    
    });
  
      
   
