/*
const imgs = document.querySelectorAll('img');

function revelaFonte(event){
  console.log(event.currentTarget.getAttribute('src'));
  console.log(this.getAttribute('src'));
}

imgs.forEach((img) => {
  img.addEventListener('click', revelaFonte);
});
*/

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

/*
const linksInternos = document.querySelectorAll('a[href^="#"]');
function ativar (event){
  event.preventDefault();
  linksInternos.forEach((link) => link.classList.remove('ativo'));
  event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((link) => link.addEventListener('click', ativar));
*/

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
function fuiClicado(event){
  console.log(this.remove());
}
const elements = document.querySelectorAll("body *");
elements.forEach((element) => element.addEventListener('click', fuiClicado));

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function aumentaTexto(event){
  if (event.key == "t"){
    //document.body fala com body
    //document.documentElement fala com o html
    document.documentElement.classList.toggle('texto-maior');
  }

} 
window.addEventListener('keydown', aumentaTexto);