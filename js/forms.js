
function check()
{
    var imie = document.getElementById("Imie");
    var nazwisko = document.getElementById("Nazwisko");
    var email = document.getElementById("email");
    var error = false; //to znaczy, że danych nie brakuje

    if(imie.value == "" || nazwisko.value == "")
    {
        document.getElementById("Imie").className='form-control is-invalid';
        document.getElementById("Nazwisko").className='form-control is-invalid';
        document.getElementById("errorImie_nazwisko").className='invalid-feedback';
        error = true;

    }

    if(email.value == "")
    {
        document.getElementById("email").className="formcontrol is-invalid";
        document.getElementById("errorEmail").className="invalid-feedback";
        error = true;
    } 
    else 
    {
        var email = contactEmail.value;
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if(regex.test(email)==false) 
        {
            document.getElementById("email").className="formcontrol is-invalid";
            document.getElementById("errorEmail").className="invalid-feedback";
            error = true;
        } 
        else 
        {
        document.getElementById("email").className="form-control is-valid"; 
        }
    }

    if(!error) {
        return true;
    }
    else{
        return false;
    }
    
}