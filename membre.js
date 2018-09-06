function validatename() {
    var name =document.getElementById("name").value;
    if (name=='')
    { document.getElementById("eresult1").innerHTML="name is Required";
    return false ;
        }
    if(name.length<6){ document.getElementById("eresult1").innerHTML="The password has less than 6 characters"; 
    return false ;
    }
    if(name.length>21){ document.getElementById("eresult1").innerHTML="The password has more than 20 characters";
    return false ;
    }
}

function validatepseudo() {
    var pseudo =document.getElementById("pseudo").value;
    if (pseudo=='')
    { document.getElementById("eresult2").innerHTML="pseudo is Required";
       return false; }
        var regex=/^\w+$/;
    if(regex.test(pseudo)==false)
        {  document.getElementById("eresult2").innerHTML="The pseudo must be a combination  numbers and  letter";
          return false ; }
}

function validatemail() { 
    var email1 =document.getElementById("email1").value;
    if (email1=='')
        { document.getElementById("eresult3").innerHTML="email is  Required";
    return false ;}
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email1)==false)
    {  document.getElementById("eresult3").innerHTML="email haven't email forme";
    return false ;}
}

function validatepassword() {
    var password =document.getElementById("password").value;
   if(password.length<6){ 
    document.getElementById("eresult4").innerHTML="The password has less than 6 characters ";
    return false ;}
    var regexp=/(\w*\d)/;
    var regexp1=/(\w*[a-z])/;
    var regexp2=/(\w*[A-Z])\w/;
    if(regexp.test(password)==false)
    {  document.getElementById("eresult4").innerHTML="The password must be a combination of charatacters , numbers and at least a capital letter";
    return false ;}
    if(regexp1.test(password)==false)
    {  document.getElementById("eresult4").innerHTML="The password must be a combination of charatacters , numbers and at least a capital letter";
    return false ;}
    if(regexp2.test(password)==false)
    {  document.getElementById("eresult4").innerHTML="The password must be a combination of charatacters , numbers and at least a capital letter";
    return false ;}
    }
    function validatepasswordconfirmation() {
      
    if ($('#password').val() == $('#confirmation_password').val()) {
        document.getElementById('eresult5').innerHTML = "password coforme";
        return false ; }
    else 
      { document.getElementById("eresult6").innerHTML="password non coforme" ;
      return false ;}
     }

    function validatemail1() { 
        var email =document.getElementById("email").value;
        if (email=='')
            { document.getElementById("eresult7").innerHTML="email is  Required"; }
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(email)==false)
        {  document.getElementById("eresult7").innerHTML="email haven't email forme";}
    }
    function validateform(){ 
        return (validatename() && validatepseudo() && validatemail() && validatepassword() && validatepasswordconfirmation());
    }
    function validateform1(){ 
        return (validatepseudo()  && validatepassword());
    }
    