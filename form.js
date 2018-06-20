
var users = [];
if(localStorage.a_users){
    users = JSON.parse(localStorage.a_users);
}



document.querySelector("#btn").addEventListener('click',function(){
var sex;

    var gender = "";

            for(var i=0;i<document.getElementsByName("gender").length;i++){
                if(document.getElementsByName("gender")[i].checked){
                    gender=document.getElementsByName("gender")[i].value;
                }
            }



    var user = {
                'username': document.querySelector("#uname").value,
                'password': document.querySelector("#pass").value,
                'email'   : document.querySelector("#mail").value,
                'location': document.querySelector("#loc").value,
                'company' : document.querySelector("#comp").value,
                'sex'     : gender

    };

    if(user.username == ""){
        if(document.querySelector("#para1")){
           // return false;
        }
        else{
            document.querySelector("#uname").insertAdjacentHTML('afterend','<p id="para1" style="color:red">please write name</p>');
            //return false;
        }   
    }  
    else{
        if(document.querySelector("#para1")){
           document.querySelector("#para1").remove();

        }
    }


    if(user.password == ""){
        if(document.querySelector("#para2")){
            //return false;
        }
        else{
            document.querySelector("#pass").insertAdjacentHTML('afterend','<p id="para2" style="color:red">please write password</p>');
           // return false;
        }
    }
    else{
        if(document.querySelector("#para2")){
            document.querySelector("#para2").remove();
        }
       
    }
    
    if(user.email==""){
        if(document.querySelector("#para3")){
            //return false;
        }
        else{
            document.querySelector("#mail").insertAdjacentHTML('afterend','<p id="para3" style="color:red">please write email</p>');
          //  return false;
        }
    }
    else{
        if(document.querySelector("#para3")){
            document.querySelector("#para3").remove();
        }
    } 

    if(user.location==""){
        if(document.querySelector("#para4")){
           // return false;
        }
        else{
            document.querySelector("#loc").insertAdjacentHTML('afterend','<p id="para4" style="color:red">please write location</p>');
           // return false;
        }
    }
    else{
        if(document.querySelector("#para4")){
            document.querySelector("#para4").remove();
    }
}

    if(user.company==""){
        if(document.querySelector("#para5")){
           // return false;
        }
        else{
            document.querySelector("#comp").insertAdjacentHTML('afterend','<p id="para5" style="color:red">please write company name</p>');
          //  return false;
        }
    }

    else{
        if(document.querySelector("#para5")){
            document.querySelector("#para5").remove();
        }
    }

    
    if(user.sex==""){
        if(document.querySelector("#para6")){
          //  return false;
        }
        else{
            document.querySelector("#lbl").insertAdjacentHTML('afterend','<p id="para6" style="color:red">please select gender</p>');
            //return false;
        }
    }
    else{
        if(document.querySelector("#para6")){
             document.querySelector("#para6").remove();
    }   
} 
 if(user.usename != 0 && user.password != 0 && user.email != 0 && user.location != 0 && user.company != 0 && user.sex != 0){
     users.push(user);
     localStorage.a_users = JSON.stringify(users);
     tabular();
 }
       // console.log(users);
})    

        function tabular(){
            var rows="";
            rows= "<tr><th>Username</th><th>Password</th><th>Email</th><th>Location</th><th>Company</th><th>Gender</th></tr>";
            for(var i=0;i<users.length;i++){
                rows+="<tr><td>"+users[i].username+"</td><td>"+users[i].password+"</td><td>"+users[i].email+"</td><td>"+users[i].location+"</td><td>"+users[i].company+"</td><td>"+users[i].sex+"</td></tr>";
    }
       document.querySelector("#tbl").innerHTML=rows;
}
   

