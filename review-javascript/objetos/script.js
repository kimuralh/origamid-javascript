/*
var aluno = {
  nome:'Lucas',
  idade: 26,
  dados(){
    return this.nome+this.idade;
  }
}

function aluno(){
  var aluno = 'Lucas';
  var idade = 26;
  function dados() {
    return aluno + idade;
  }
  return dados();
}
*/

// Crie um objeto com os seus dados pessoais
var dados = {
  nome: 'Lucas',
  sobrenome: 'Kimura',
  idade: 26,
  nomeCompleto(){
    return `${this.nome} ${this.sobrenome}`;
  }
}
// Deve possui pelo menos duas propriedades nome e sobrenome

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco);

var cachorro = {
  raca:'Labrador',
  cor:'preto',
  idade: 10,
  late(viu){
    if(viu == 'homem'){
      return 'latiu';
    }
    else{
      return 'nao latiu';
    }
  }
}
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

