function validate(){
    var username=document.getElementById("txtusername").Value;
    var p=/^[^0-9][A-Z a-z 0-9]{5,15}\@[A-Z a-z]{2,10}\.[A-Z a-z]{2,3}/;
    var user=document.getElementById("user").value;
    if( username=='' || p==''){
        window.alert('please enter all the fields');
        return false;
    }
    else{
    if(p.test(user)){
        window.alert("Valid");
    }
    else{
        window.alert("Invalid");
    }
}
}