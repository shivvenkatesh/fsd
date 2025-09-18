
function submit() {
    var name = document.getElementById("name");
    var age = document.getElementById("age");
    var email = document.getElementById("email");
    var DOB = document.getElementById("dob");
    var phone = document.getElementById("phone");
    var gender = document.getElementById("gender");

    console.log(name.value);
    console.log(age.value); 
    console.log(email.value);
    console.log(DOB.value);
    console.log(phone.value);
    console.log(gender.value);

    nameRegex = /^[a-zA-Z\s]+$/.test(name.value);
    ageRegex = /^[0-9]{2}$/.test(age.value);
    phoneRegex = /^[0-9]{10}$/.test(phone.value);
    emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value);
    genderRegex = /^(male|female)$/.test(gender.value);

    if(nameRegex){
                
                document.getElementById("hiddenName").style.display = "none";
        }
        else{
                document.getElementById("hiddenName").style.display = "block";
                
        }
    if(ageRegex){
                
                document.getElementById("hiddenage").style.display = "none";
        }
        else{
                document.getElementById("hiddenage").style.display = "block";
                
        }
    if(emailRegex){
                
                document.getElementById("hiddenemail").style.display = "none";
        }
        else{
                document.getElementById("hiddenemail").style.display = "block";
                
        }
    if(phoneRegex){
                
                document.getElementById("hiddenphone").style.display = "none";     
        }
        else{
                document.getElementById("hiddenphone").style.display = "block";

    
        }
     if(genderRegex){
               
                document.getElementById("hiddengender").style.display = "none";
     }
     else{
                document.getElementById("hiddengender").style.display = "block";
     }
     if(nameRegex && ageRegex && emailRegex ){
               window.open("new.html")
            document.getElementById(compiler).style.diaplay="block"


     }


  
     

    }