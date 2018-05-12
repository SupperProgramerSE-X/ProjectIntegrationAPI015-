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
var calprice =   data[pinid].price;
var calweight =        data[pinid].weight ;
    var row = '<div class="w3-row w3-border"><div class="w3-thid w3-container"><div class="ex2"><tr><th><a href="ShowProductDetail.html?id=' + 
    data[pinid].id + '" style="text-decoration:none;"><br><img src=" ' + 
    data[pinid].photo + '" alt="" style="width:104px;height:142px;"><br> Description:__' + 
    data[pinid].description + '<br><p><h2> Price:__' + 
    data[pinid].price + '<br> Weight:__' +
    data[pinid].weight +  '<br> </a><br><input type="button" class="btn btn-danger btn-lg scroll" id="buy" value="Buy Product" /></th></tr></div></div></h2></div>';

        
            //  if( i == 2+xrow ){
            //     var row = '<tr><th><a href="edit.html?id=' + 
            //     data[i].id + '" style="text-decoration:none;"><br><img src=" ' + 
            //     data[i].photo + '" alt="" style="width:104px;height:142px;"><br>' + 
            //     data[i].description + '<br>' + 
            //     data[i].price + '<br>' +
            //     data[i].weight +  '</a></th>';
            
            // xrow += 2;
            // console.log(xrow);
            //  }else{
            //     var row = '<th><a href="edit.html?id=' + 
            //     data[i].id + '" style="text-decoration:none;"><br><img src=" ' + 
            //     data[i].photo + '" alt="" style="width:104px;height:142px;"><br>Description:' + 
            //     data[i].description + '<br>' + 
            //     data[i].price + '<br>' +
            //     data[i].weight +  '</a></th>';

            //  }
            $('#pinlist').append(row);

            $("#buy").click(function() {
                 window.location.href="ShowProductDetail.html?amount="+$('#quantitiy').val();
                window.location.href = 'ShowProductDetail.html?id='+data[pinid].id;
            });
       
        
    }

});

$(function () {
    $('#alert').hide();
    
        var pinid = getUrlParameter('id');
pinid = pinid; 
       var urlProduct = 'https://pacific-peak-27279.herokuapp.com/api/ProductReview/?format=json';    
          $.ajax({
      
              //Logistic
              type: "GET",
              url:  urlProduct,
      
          }).then(function (data) {
      
              addNewRow(data);
              console.log(data);
              
           
              
          });
      
          function addNewRow(data) {
   
            var star1 = 0;
            var star2 = 0;
            var star3 = 0;
            var star4 = 0;
            var star5 = 0;
            var allstar = 0;
            for (var i = 0; i < data.length; i++) {
                

                if(data[i].productID == pinid){

                    if(data[i].rating == 1){
star1++;
                    }if(data[i].rating == 2){
                        star2++;
                                            }
                    if(data[i].rating == 3){
star3++;
                    }
                    if(data[i].rating == 4){
star4++;
                    }
                    if(data[i].rating == 5){
                        star5++;
                                            }                        
                    var row = '<tr><td>' + 
                    data[i].id + '</td><td>' + 
                    data[i].productID + '</td><td>' + 
                    data[i].rating + '</a></td><td>' + 
                    data[i].comment + '</td><td>' + 
                    data[i].date + '</td><td>'+ 
                    data[i].reviewer+ '</td> </tr>';
allstar++;
                    $('#importProduct').append(row);
                }
    
                
            }
            localStorage.setItem("star1",star1);
            localStorage.setItem("star2",star2);
            localStorage.setItem("star3",star3);
            localStorage.setItem("star4",star4);
            localStorage.setItem("star5",star5);
            localStorage.setItem("allstar",allstar);
           
            
            $("#addTbStar1").append(localStorage.getItem("star1"));
            $("#addTbStar2").append(localStorage.getItem("star2"));
            $("#addTbStar3").append(localStorage.getItem("star3"));
            $("#addTbStar4").append(localStorage.getItem("star4"));
            $("#addTbStar5").append(localStorage.getItem("star5"));
            var calrat =  (5*star5 + 4*star4 + 3*star3 + 2*star2 + 1*star1) / (star5+star4+star3+star2+star1);
            localStorage.setItem("ratStar",calrat);

          $("#addTbStarnum").append(localStorage.getItem("ratStar"));
   
        }
        
      
      });