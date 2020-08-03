// Retorne um número aleatório
const aleatório = Math.floor((Math.random() * (2000 - 1050 +1) + 1050));
console.log(aleatório);
// entre 1050 e 2000


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const maior = Math.max(...numeros.split(', '));
console.log(`O maior numero é ${maior}`);


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function arredonda(preco){
  const precoEditado = +preco.toUpperCase().replace('R$','').replace(',','.');
  const precoNumber = +precoEditado.toFixed(2);
  return precoNumber;
}
let somaTotal = 0.0;
listaPrecos.forEach((preco) => {
  somaTotal = somaTotal + arredonda(preco) ;
});

console.log(somaTotal.toLocaleString('pt-BR',{style:'currency',currency:'BRL' }));

