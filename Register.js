$(function(){
    
  
    $('#alert').hide();

    $('#addnew').click(function(){
        
        var formdata = {
            Username: $('#username').val(),
            Password: $('#password').val(),   
            Fristname: $('#name').val(), //Firstname
            Lastname: $('#lastname').val(), 
            Address: $('#address').val(),        
            Email: $('#email').val(),
            Tel: $('#telephone').val()     
        }

        console.log(formdata);
        
        $.ajax({


            url: 'https://servicecustomer20180508102534.azurewebsites.net/Api/Customers',
            method: 'POST',
            data: formdata
            
        }).then(function(data) {
    
            $('#alert').show();   
            $('#username').val('');
            $('#password').val('');         
            $('#name').val('');
            $('#lastname').val('');
            $('#address').val('');      
            $('#email').val('');
            $('#telephone').val('');
            
            console.log('Added');
            window.location.href = 'login.html';
        });
    });
});