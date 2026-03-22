var Name = document.getElementById("inputName");
var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");
var confirmPassword = document.getElementById("inputConfirmPassword");
var signUpButton = document.getElementById("SignUp");
var alert = document.getElementById("alert");
var backLogin = document.getElementById("backLogin");

var registerList=[];

Name.addEventListener("input", function () {
  NameInput();
  console.log(NameInput());
  
});
email.addEventListener('input', function(){
    emailInput();
})
password.addEventListener('input', function(){
    passwordInput();
})
confirmPassword.addEventListener("input", function () {
  confirmPasswordInput();
});

function NameInput() {
  var NameValue = Name.value;
  console.log(NameValue);
  var regexName = /^[A-Za-z\s]{2,20}$/;
  if(regexName.test(NameValue)){
    Name.classList.add("is-valid");
    Name.classList.remove("is-invalid");
    return true;
  }
  else{
    Name.classList.add("is-invalid");
    Name.classList.remove("is-valid");
    return false;
  }
}

function emailInput() {
  var emailValue = email.value;
  console.log(emailValue);
  var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regexEmail.test(emailValue)) {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
    return true;
  } else {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
    return false;
  }
}

function passwordInput() {
  var passwordValue = password.value;
  console.log(passwordValue);
  var regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (regexPassword.test(passwordValue)) {
    password.classList.add("is-valid");
    password.classList.remove("is-invalid");
    return true;
  } else {
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
    return false;
  }
}

function confirmPasswordInput() {
  var confirmPasswordValue = confirmPassword.value;
  console.log(confirmPasswordValue);
  var regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (regexPassword.test(confirmPasswordValue) && password.value === confirmPasswordValue) {
    confirmPassword.classList.add("is-valid");
    confirmPassword.classList.remove("is-invalid");
    return true;
  } else {
    confirmPassword.classList.add("is-invalid");
    confirmPassword.classList.remove("is-valid");
    return false;
  }
}

function checkingPassword(){
    var passwordValue = password.value;
    var confirmPasswordValue = confirmPassword.value;
    if(passwordValue===confirmPasswordValue){
        alert.classList.add("d-none");
        return true;
    }
    else{
        alert.innerHTML = "Passwords do not match";
        alert.classList.remove("d-none");
        return false;
    }
}

function EmptyForm(){
    var NameValue = Name.value;
    var emailValue = email.value;
    var passwordValue = password.value;
    var confirmPasswordValue = confirmPassword.value;
    if(NameValue=="" || emailValue==""  || passwordValue =="" || confirmPasswordValue==""){
        alert.classList.remove("d-none");
        alert.innerHTML = "All Inputs are required";
        return true;
    }
    else{
        alert.classList.add("d-none");
        return false;
    }
}

function clearForm(){
    Name.value='';
    email.value='';
    password.value='';
    confirmPassword.value='';
}

function submit(){
    var userInfo = {
        userName: Name.value,
        userEmail: email.value,
        userPassword: password.value,
    };
    if(NameInput() && emailInput() && passwordInput() && confirmPasswordInput() && checkingPassword() && EmptyForm()===false){
        registerList.push(userInfo);
        localStorage.setItem('usersData', JSON.stringify(registerList));
        localStorage.setItem('isVisted', true);
        alert.classList.remove("d-none");
        alert.classList.add("alert-success");
        alert.classList.remove("alert-danger");
        alert.innerHTML = "Registration successful";     
        clearForm();
}
}

signUpButton.addEventListener("click" , function(){
    checkingPassword(); 
    EmptyForm();
    submit();
})

backLogin.addEventListener('click', function(){
  window.location.href = "../index.html";
})
