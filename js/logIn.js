var list = JSON.parse(localStorage.getItem("usersData"));
var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");
var logIn = document.getElementById("log");
var alert = document.getElementById("alert");

console.log(list);

logIn.addEventListener("click", function (e) {
  submit();
});

function submit() {
  var emailValue = email.value;
  var passwordValue = password.value;
  for (i = 0; i < list.length; i++) {
    if (
      emailValue == list[i].userEmail &&
      passwordValue == list[i].userPassword
    ) {
      localStorage.setItem("isVisited", "true"); //
      logIn.setAttribute("href", "../home.html");
      alert.classList.add("d-none");
    } else {
      alert.classList.remove("d-none");
      alert.innerHTML = "Incorrect email or password";
      logIn.removeAttribute("href");
    }
  }
}

if (!localStorage.getItem("isVisited")) {
  //
  // First time → show loader
  setTimeout(() => {
    document.getElementById("start").style.display = "none";
  }, 7000);

  // Save that user has visited
  localStorage.setItem("isVisited", "true");
} else {
  // Not first time → hide loader immediately
  document.getElementById("start").style.display = "none";
}
