// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');
const totalCaracteres = Array.prototype.reduce.call(paragrafos,(acumulador, paragrafo)=>{
  return acumulador + paragrafo.innerText.length
},0);
console.log(totalCaracteres);


function criaElemento(tag,classe,conteudo){
  const novoElemento = document.createElement(tag);
  classe ? novoElemento.classList.add(classe):null;
  conteudo ? novoElemento.innerHTML = conteudo:null;
  return novoElemento;
}
// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

const criaH1 = criaElemento.bind(null, 'H1','titulo');
console.log(criaH1('blalbalbalblab'));
// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
