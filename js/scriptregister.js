
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const login = document.getElementById('login');

login.addEventListener('click',()=>{
 window.location.href="display.html"
})
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");

});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  
});


//Validation email
function ValidateEmail()
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}


// Validation Name 
function Validatename()
{
var nameformat = /^[a-z]{3,}.[a-z]+.[a-z]{3,}$/;
if(inputText.value.match(nameformat))
{
alert("Valid UserName");
document.form1.text2.focus();
return true;
}
else
{
alert("You have entered an invalid UserName!");
document.form1.text2.focus();
return false;
}
}

function signupform()
{var firstname =document.getElementsByClassName(sign-up-form).value ;
  localStorage.setItem("textvalue",firstname);
  return false;  
}
