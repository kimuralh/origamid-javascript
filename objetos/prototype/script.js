/* funciona chamar a função adicionada ao prototipo mesmo ela tendo sido adicionada depois a instancia do obj
function Pessoa(nome){
  this.nome = nome
}
const lucas = new Pessoa('lucas');
Pessoa.prototype.falar = function(){console.log(this.nome)} 
lucas.falar()
*/ 

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade

function Pessoa(nome, sobrenome, idade){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

// Crie um método no protótipo que retorne
// o nome completo da pessoa
Pessoa.prototype.retornaNome = function(){
  return (`${this.nome} ${this.sobrenome}`);
}

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));

// Liste os construtores dos dados abaixo

const li = document.querySelector('li');
/*
li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();
*/

console.log(li.constructor.name,
  li.click.constructor.name,
  li.innerText.constructor.name,
  li.value.constructor.name,
  li.hidden.constructor.name,
  li.offsetLeft.constructor.name)
/*
Function String Number Boolean Number

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
//string (considerando tudo no final)
*/