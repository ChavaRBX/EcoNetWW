$.ajax({
    type:'POST',
    url:'EnviarForm.php',
    data:'ContactoEnviar=1&name='+name+'&email='+email+'&message='+message,
    beforeSend: function () {
        $('.submitBtn').attr("disabled","disabled");
        $('.modal-body').css('opacity', '.5');
    },
    success:function(msg){
        if(msg == 'bien'){
            $('#inputName').val('');
            $('#inputEmail').val('');
            $('#inputMessage').val('');
            $('.statusMsg').html('<span style="color:green;">Gracias por contactarnos, nos pondremos en contacto con usted pronto.</p>');
        }else{
            $('.statusMsg').html('<span style="color:red;">Ha ocurrido algún problema, por favor intente de nuevo.</span>');
        }
        $('.submitBtn').removeAttr("disabled");
        $('.modal-body').css('opacity', '');
    }
});