// Seleciona os elementos HTML para obter os dados do usuário e a tabela de saída
var dadosDoUsuario = [
  document.querySelector(".nome"),
  document.querySelector(".idade"),
  document.querySelector(".altura"),
  document.querySelector(".peso"),
  document.querySelector(".sexo"),
];

var tbody = document.querySelector("table tbody");

// Adiciona um evento de clique ao botão "Adicionar valor"
var botaoAdicionar = document
  .querySelector("#adicionar-valor")
  .addEventListener("click", function (event) {
    event.preventDefault(); //impede que a página seja recarregada

    // Cria uma nova linha na tabela e preenche-a com os dados do usuário
    var tr = document.createElement("tr");

    dadosDoUsuario.forEach(function (dado) {
      var td = document.createElement("td");
      td.textContent = dado.value;
      tr.appendChild(td);
    });

    // Calcula a TMB do usuário com base em seus dados e exibe-a na tabela
    var tdTmb = document.createElement("td");
    var tmb = calcularTmb(
      dadosDoUsuario[4].value,
      dadosDoUsuario[3].value,
      dadosDoUsuario[2].value,
      dadosDoUsuario[1].value
    );

    tdTmb.textContent = tmb.toFixed(2);
    tr.appendChild(tdTmb);
    tbody.appendChild(tr);

    // reseta os dados do usuário ""
    dadosDoUsuario.forEach(function (resetar) {
      resetar.value = "";
    });
  });

// Define uma função para calcular a TMB com base nos dados do usuário
function calcularTmb(sexo, peso, altura, idade) {
  if (sexo === "M") {
    return 88.36 + 13.4 * peso + 4.8 * altura - 5.7 * idade;
  } else {
    return 447.6 + 9.25 * peso + 3.1 * altura - 4.33 * idade;
  }
}
