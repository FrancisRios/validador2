$(document).ready(function() {

    $('input[type=password]').keyup(function() {
        var pswd = $(this).val();
        //validate the length
        if ( pswd.length < 16 ) {
            $('#length').removeClass('valid').addClass('invalid');
        } else {
            $('#length').removeClass('invalid').addClass('valid');
        }
        //validate letter
        if ( pswd.match(/[a-z]/) ) {
            $('#letter').removeClass('invalid').addClass('valid');
        } else {
            $('#letter').removeClass('valid').addClass('invalid');
        }

        //validate capital letter
        if ( pswd.match(/[A-Z]/) ) {
            $('#capital').removeClass('invalid').addClass('valid');
        } else {
            $('#capital').removeClass('valid').addClass('invalid');
        }

        //validate number
        if ( pswd.match(/\d{4,6}/) ) {
            $('#number').removeClass('invalid').addClass('valid');
        } else {
            $('#number').removeClass('valid').addClass('invalid');
        }

        //validate special characters
        if ( pswd.match(/[-,=._*$@$!%*?&]/) ) {
            $('#characters').removeClass('invalid').addClass('valid');
        } else {
            $('#characters').removeClass('valid').addClass('invalid');
        }

        //validate coincidence the numbers
        if ( pswd.match(/([0-9])\1+/) ) {
            $('#coincidence').removeClass('valid').addClass('invalid');
        } else {
            $('#coincidence').removeClass('invalid').addClass('valid');
        }

        //validate coincidence the numbers
        if ( pswd.match(/([a-z])\1+/) ) {
            $('#coincidencemin').removeClass('valid').addClass('invalid');
        } else {
            $('#coincidencemin').removeClass('invalid').addClass('valid');
        }  
        
         //validate coincidence the numbers
         if ( pswd.match(/([A-Z])\1+/) ) {
            $('#coincidencemay').removeClass('valid').addClass('invalid');
        } else {
            $('#coincidencemay').removeClass('invalid').addClass('valid');
        } 

        //validate coincidence the special characters
        if ( pswd.match(/([-,=._*$@$!%*?+#|~:;&])\1+/) ) {
            $('#coincidencechar').removeClass('valid').addClass('invalid');
        } else {
            $('#coincidencechar').removeClass('invalid').addClass('valid');
        }

    }).focus(function() {
        $('#pswd_info').show();
    }).blur(function() {
        $('#pswd_info').hide();
    });

});