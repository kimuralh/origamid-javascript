// Crie uma função que verifique
// corretamente o tipo de dado

function verificaTipo(objeto){
  //impreciso para alguns casos, então errado
  //return typeof objeto
  return Object.prototype.toString.call(objeto);
}

const dado1 = { nome: 'lucas', idade:26};
const dado2 = 100;
const dado3 = document.querySelectorAll('p');
const dado4 = Array.prototype.map.call(dado3,(elemento)=>verificaTipo(elemento));
console.log(verificaTipo(dado1),verificaTipo(dado2),verificaTipo(dado3),dado4);

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {}
Object.defineProperty(quadrado, 'lados',{
  value:4,
  configurable:false,
  enumerable:true,
});

Object.freeze(quadrado);


// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyDescriptors(String.prototype));
console.log(Object.getOwnPropertyDescriptors(Array.prototype));