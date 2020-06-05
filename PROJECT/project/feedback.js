
function validate(){
    var username=document.getElementById("txtusername").Value;
    var e=/^[^0-9][A-Z a-z 0-9]{5,15}\@[A-Z a-z]{2,10}\.[A-Z a-z]{2,3}/;
    var email=document.getElementById("txtemailid").value;
    var pass=document.getElementById("txtpass").value;
    var p=/^(?=.{6,12}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;
    if( username=='' || email=='' || pass==''){
        window.alert('please enter all the fields');
        return false;
    }
    else{
    if(e.test(email)&&p.test(pass)){
        window.alert("Valid");
    }
    else{
        window.alert("Invalid");
    }
}
}