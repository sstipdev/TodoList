const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logout = document.querySelector("#logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  logout.classList.remove(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
}

function paintGreetings(username) {
  greeting.innerText = `안녕하세요 ${username} 님`;
  logout.addEventListener("click", logoutSystem);
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

window.addEventListener("load", () => {
  loginForm.addEventListener("submit", onLoginSubmit);

  const savedUserName = localStorage.getItem(USERNAME_KEY);
  if (!savedUserName) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    logout.classList.add(HIDDEN_CLASSNAME);
  } else {
    paintGreetings(savedUserName);
  }
});

function logoutSystem() {
  alert("로그아웃을 하였습니다. !");
  localStorage.removeItem(USERNAME_KEY);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
  logout.classList.add(HIDDEN_CLASSNAME);
}
