function validate(){
    var user=document.getElementById("txtusername").value;
    var pass=document.getElementById("txtpass").value;
    var p=/^(?=.{6,12}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;
            if( user==''||pass==''){
                window.alert('please enter all the fields');
                return false;
            }
            else{
                if(p.test(pass)){
                    window.alert("valid");
                    return true;
                }
                else{
                    window.alert("invalid");
                    return false;
                }
            }
        }