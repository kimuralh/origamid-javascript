// Por qual motivo o código abaixo retorna com erros?
/*
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
*/
//console.log(var, marca, portas);
// caso fosse escopo de função, ausaria erro para tudo de qualquer forma, mas 
// escopo de bloco não permite acesso ao seu conteudo ao usar const e let 
// var deixou vazar o conteudo de cor

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?

const numero = 50;
// só de ter colocado let aqui embaixo, mesmo que encima estivesse declarado como var, já teria resolvido o problema, já que está no escopo de bloco
for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
