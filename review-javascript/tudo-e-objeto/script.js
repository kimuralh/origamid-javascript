// nomeie 3 propriedades ou métodos de strings
var nome = "Lucas";
nome.toLowerCase();
nome.replace("L","R");
nome.length;

// nomeie 5 propriedades ou métodos de elementos do DOM
var botao = document.querySelector(".btn");
botao.outerHTML;
botao.classList.add("active");
botao.innerHTML;
botao.textContent;
botao.innerText;
botao.addEventListener("click", function(){});

function copy() {
  var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

