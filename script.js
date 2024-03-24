document.getElementById("concatinate").onclick = function(){
    // alert("hello")
    let num1="15"
    let num2= "30"
    let result1= num1 + " + "+num2 ;
    let result2= num1 +num2 ;
    //concatenating strings
    document.getElementById("input-box").innerHTML = result1
    document.getElementById("output-box").innerHTML= result2
}
// Ask name from user 
document.getElementById("askName").onclick = function(){
let  name1= prompt("Please enter your Firt Name");
let  name2= prompt("Please enter your Last Name");
let firstname= name1
let lastname= name2
let fullname= name1+" "+name2

document.getElementById("input-box").innerHTML = "First Name Is :   " +firstname+ "<br>Last Name is :  "+lastname;
document.getElementById("output-box").innerHTML= fullname
}

// Comparison Operator
document.getElementById("operator").onclick = function(){
    let  num1= prompt("Please enter First Number");
    let  num2= prompt("Please enter Second Number");
    let firstname= num1
    let lastname= num2
document.getElementById("input-box").innerHTML = "First Number :   " +firstname+ "<br>Second number :  "+lastname;

    if(num1==num2){
    document.getElementById("output-box").innerHTML= "Both numbers are equal.";
    }
    else{
    document.getElementById("output-box").innerHTML= "Both numbers are not equal.";
    }
}

// If else is statement 
document.getElementById("ifelseStatement").onclick = function(){
let number = prompt("Enter Your Marks out of 100=" )
if(number >=90) {
    alert("Excellent! You got an A+.")
    document.getElementById("input-box").innerHTML= "Obtain Marks: "+number
    document.getElementById("output-box").innerHTML= "Excellent! You got an A+.";
}
else if(number>=80){
    alert("Excellent! You got an B+.")

    document.getElementById("input-box").innerHTML= "Obtain Marks: "+number
    document.getElementById("output-box").innerHTML= "Excellent! You got an B+.";

}
else if(number>=60){
    alert("Excellent! You got an C.")

    document.getElementById("input-box").innerHTML= "Obtain Marks: "+number
    document.getElementById("output-box").innerHTML= "Excellent! You got an C.";

}
else{
    alert("You Are Fail! Best Luck For Next Time.")
    document.getElementById("input-box").innerHTML= "Obtain Marks: "+number
    document.getElementById("output-box").innerHTML= "You Are Fail! Best Luck For Next Time.";
}
}

// testingConditions like about your or weight then condition is run 
document.getElementById("testingConditions").onclick = function(){
    let  age= prompt("Please enter Your age:");
    let  weight= prompt("Please enter Your Weight: ");
    let enterAge= age
    let enterWeight= weight
document.getElementById("input-box").innerHTML = "Your Age Is :   " +enterAge+ "<br>Your Weight In Kg Is :  "+enterWeight;
if(age>=20 || weight>=40){
    alert("Tu badha ho gaya hai")
    document.getElementById("output-box").innerHTML= " You Need! Allah Tuba.";

}
else{
    alert("Tum Abhi Bachy ho")
    document.getElementById("output-box").innerHTML= " Stay Away From haram  things.";

}
}



document.getElementById("nestedif").onclick = function(){
    let  name= prompt("Please Enter Your Name:");
    let  userName=name
if(userName==="Ahmad"){
    let password= prompt("Enter Password: ");
    if(password==="302"){
        alert("Login Successfully Done!");
        document.getElementById("output-box").innerHTML=  " Login Successfully Done!";
        document.getElementById("input-box").innerHTML=  " Login Successfully Done!";
    }
    else{
        document.getElementById("output-box").innerHTML=  " Wrong Password ! Try Again."+"<br> Try  302 ";

    }
}
else{
    document.getElementById("input-box").innerHTML= userName+ " Wrong Name! <br> Try  Ahmad ";
    document.getElementById("output-box").innerHTML= userName+ " Wrong Name! <br> Try  Ahmad ";

}


}

document.getElementById("login").onclick = function(){
    let  name1= prompt("Please enter your Name");
    let  password= prompt("Please enter your Password Name");
    if (name1==="Ahmad Raza"){
        if(password==="302"){
       alert ("Correct UserName And Password.");
       document.getElementById("input-box").innerHTML= "User name and Password is correct.";
       document.getElementById("output-box").innerHTML= "User name and Password is correct.";

        }
        else{
       document.getElementById("input-box").innerHTML= "User name and Password is Inorrect.";
       document.getElementById("output-box").innerHTML= "User name and Password is Inorrect.";

        }
    }
    else {
         alert ("Try Ahmad  Raza For Admin Access.<br> 302  Is The Correct Password.") ;
         document.getElementById("input-box").innerHTML= "User name and Password is Inorrect.";
         document.getElementById("output-box").innerHTML= "User name and Password is Inorrect.";
    }

}







document.getElementById("clearInputBtn").onclick = function(){
    let space=" ";
    document.getElementById("input-box").innerHTML = space

}
document.getElementById("clearOutputBtn").onclick = function(){
    let space=" ";
    document.getElementById("output-box").innerHTML = space

}