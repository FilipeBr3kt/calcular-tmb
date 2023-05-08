const login = document.querySelector("#login-link");
const menu = document.querySelector("#menu-button");

menu.addEventListener("click", () => {
  if (login.classList.contains("active") || menu.classList.contains("active")) {
    login.classList.remove("active");
    menu.classList.remove("active");
  } else {
    login.classList.add("active");
    menu.classList.add("active");
  }
});
