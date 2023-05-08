var tabela = document.querySelector(".tabela-tmb");

tabela.addEventListener("dblclick", function (event) {
  event.target.parentNode.classList.add("tableOut");

  setTimeout(function () {
    event.target.parentNode.remove();
  }, 1000);
});
