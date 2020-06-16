function validate(){
    var mob=document.getElementById("txtphonenumber").Value;
    var user=document.getElementById("txtusername").value;
    var email=document.getElementById("txtemailid").Value;
    var roll=document.getElementById("txtrollnumber").Value;
    var m=/^6-9][0-9]{9}$|^[0][6-9][0-9]{9}$|^[+][9][1][6-9][0-9]{9}$/;
    var e=/^[^0-9][A-Z a-z 0-9]{5,15}\@[A-Z a-z]{2,10}\.[A-Z a-z]{2,3}/;
    var r=/^[2][2][1][7][1][0][3][0-9]{2}[0-9]{3}$/;
    if(mob==''|| user==''|| email==''||roll==''){
        window.alert('please enter all the fields');
        return false;
    }
    else{
        if(m.test(mob)&&e.test(email)&&r.test(roll)){
            window.alert("valid");
            return true;
        }
        else{
            window.alert("invalid");
            return false;
        }
    }
}