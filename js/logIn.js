var list = JSON.parse(localStorage.getItem("usersData")) || [];

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
  var found = false;

  for (var i = 0; i < list.length; i++) {
    if (
      emailValue == list[i].userEmail &&
      passwordValue == list[i].userPassword
    ) {
      found = true;
      break;
    }
  }

  if (found) {
    localStorage.setItem("isVisited", "true");
    logIn.setAttribute("href", "./home.html"); //
    alert.classList.add("d-none");
  } else {
    alert.classList.remove("d-none");
    alert.innerHTML = "Incorrect email or password";
    logIn.removeAttribute("href");
  }
}

// 🔥 loading 
if (!localStorage.getItem("isVisited")) {
  setTimeout(() => {
    document.getElementById("start").style.display = "none";
  }, 7000);

  localStorage.setItem("isVisited", "true");
} else {
  document.getElementById("start").style.display = "none";
}
