function multiplica(num1,num2){
 
  if (num1 == undefined || num2 == undefined){
    console.log("não passou todos os argumentos");
  }
  
  else if(isNaN(num1) || isNaN(num2)){
    //caso num1 seja "oi"
    //apesar de ser uma string e não uma NaN, isNan() vai converter o conteudo de string para number e como não é um numero, vai virar NaN
    console.log("digite apenas numeros");
  }
  /*
  else if(typeof num1 != "number" || typeof num2 != "number"){
    console.log("digite apenas numeros");
  }
  */
  else{
    console.log(`o tipo do primeiro numero é: ${typeof num1}`, num1);
    console.log(`o tipo do segundo numero é: ${typeof num2}`, num2);
    return num1 * num2;
  }

}
//==============================
// Crie uma função para verificar se um valor é Truthy
function verificaVerdadeiro(valor){
  if (!!valor == true){
    console.log("Valor Truthy");
  }
  else{
    console.log("Valor Falsy");
  }
}
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function retornaPerimetro(lado){
  return lado*4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome,sobrenome){
    return `${nome} ${sobrenome}`;
}

// Crie uma função que verifica se um número é par
function par(numero){
  if (numero%2 == 0){
    return "é par";
  }
  else{
    return "é impar";
  }
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function qualTipo(dado){
  return typeof dado;
}
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
  console.log("lucas");
});

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;

  console.log(`Ainda faltam ${totalPaises - paisesVisitados} países para visitar`,
  `Já visitei ${paisesVisitados} do total de ${totalPaises} países`);
}
precisoVisitar(20);

