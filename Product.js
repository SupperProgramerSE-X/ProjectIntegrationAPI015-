$(function () {
    $.ajax({

        //CP1. Complete Ajax Code to GET ALL pin data 
        type: "GET",
        url: "https://soaproductapi.herokuapp.com/products/",

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
          for ( i = 0; i < data.length; i++) {

            var row = '<div class="w3-row w3-border"><div class="w3-thid w3-container"><div class="ex2"><tr><th><a href="ShowProduct.html?id=' + 
            data[i].id + '" style="text-decoration:none;"><br><img src=" ' + 
            data[i].photo + '" alt="" style="width:104px;height:142px;"><br> <p>Description:__' + 
            data[i].description + '<br><p><h2>  Price:__' + 
            data[i].price + '<br> Weight:__' +
            data[i].weight +  '</a><br></th></tr></div></div></h2></div>';

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
        }
    }

});