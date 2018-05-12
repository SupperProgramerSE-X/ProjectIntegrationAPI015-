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
    

    $.ajax({

        //CP3. Complete Ajax code to GET the selected pin (pinid)  
        type: "GET",
        url: "https://soaproductapi.herokuapp.com/products/" + pinid,

    }).then(function (data) {

        $('#name').val(data.name);
        $('#description').val(data.description);
        var image = '<img src=" ' + 
        $('#photo').val(data.photo) + '" alt="" style="width:104px;height:142px;">';
        $('#photo').val(data.photo);
        $('#price').val(data.price);
        
        $('#weight').val(data.weight);
     
    });
});