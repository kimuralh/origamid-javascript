// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector('img');
console.log(primeiraImg.offsetLeft, primeiraImg.offsetTop);
console.log(primeiraImg.getBoundingClientRect());

// Retorne a soma da largura de todas as imagens
let totalSoma = 0;
const imagens = document.querySelectorAll('img');
function somaImagens(){
  imagens.forEach((imagem) => totalSoma += imagem.offsetWidth);
  console.log(`A soma das imagens é igual à ${totalSoma}`);
}
//só vai ser executado depois de acabar de carregar a pagina
//evita problema da função de cima que pega offsetWidth antes da imagem estar lá, logo pega 0
window.onload = () => somaImagens(); 

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');
links.forEach((link, index)=>{
  if (link.offsetLeft < 48 || link.offsetHeight < 48){
    console.log(`O link ${index} não atende as dimensões minimas`);
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
browserSmall = window.matchMedia('(max-width: 720px)');
const menu = document.querySelector('.menu');
if (browserSmall.matches){
  menu.classList.add('menu-mobile');
  console.log('mudando para modo mobile');
}
