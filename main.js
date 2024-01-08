//counter design 
document.addEventListener("DOMContentLoaded", ()=>{
   function counter(id,start,end,duration){
      let object=document.getElementById(id),
      current=start,
      range=end - start,
      increment=end>start? 1: -1,
      step=Math.abs(Math.floor(duration / range)),
      timer= setInterval(()=>{
current +=increment;
object.textContent= current;
if (current == end){
   clearInterval(timer);
}
      }, step)
   }
   counter("count1", 0, 1387, 1000);
   counter("count2", 0, 3389, 3000);
   counter("count3", 0, 4237, 3000);
   counter("count4", 0, 4190, 3000);
});


 //Animation
 function reveal() {
   var reveals = document.querySelectorAll(".reveal");
 
   for (var i = 0; i < reveals.length; i++) {
     var windowHeight = window.innerHeight;
     var elementTop = reveals[i].getBoundingClientRect().top;
     var elementVisible = 150;
 
     if (elementTop < windowHeight - elementVisible) {
       reveals[i].classList.add("active");
     } else {
       reveals[i].classList.remove("active");
     }
   }
 }
 
 window.addEventListener("scroll", reveal);


 //form validation 
document.getElementById("form").addEventListener("submit",function(event){
   event.preventDefault();
});
function validareFormular ()
{
var erori=[];
var inputName=document.getElementById("inputName").value;
if(isNaN(inputName)){ 
  erori.push("Numele este obligatoriu!");
}
if (inputName.length <=3){
   erori.push("Numele trebuie sa aiba cel putin 3 caractere");
}
if (inputName.length >=30){
   erori.push("Numele trebuie sa aiba maxim 30 caractere");
}
var inputSubject=document.getElementById("inputSubject").value;

if (inputSubject.length <3){
   erori.push("Subiectul trebuie sa fie mai lung");
}
else{ 
if (isNaN(inputSubject)){
   erori.push("Subiectul e obligatoriu");
}
}

var inputEmail=document.getElementById("inputEmail").value;

if (inputEmail.length <5){
   erori.push("Email prea scurt");
}
if(!inputEmail.includes("@")){
   erori.push("@ e obligatoriu")
}
else{ 
if (isNaN(inputEmail)){
   erori.push("Emailul e obligatoriu");
}
}

if (erori.length ==0)
{
   document.getElementById("form").submit();
}
else{
   event.preventDefault();
   console.log(erori.toString());
   document.getElementById("erori").innerText=erori.toString();
   return false;
   
}
}

// validate newsletter subscription
function validateForm() {
   var y=document.forms["myForm"]["Email"].value;
      if (y==null || y=="") {
        alert("Lipseste email-ul");
         return false;
     }
    alert("Multumim pentru inscriere");
     }