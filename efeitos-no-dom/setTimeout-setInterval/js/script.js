// const tela = document.documentElement;
// setInterval(alternaCor,2000);
// var corAtual ="azul";
// function alternaCor(){
//   if(corAtual == "azul"){
//     tela.classList.add(corAtual);
//     tela.classList.remove("vermelho");
//     corAtual = "vermelho";
//   }
//   else if(corAtual == "vermelho"){
//     tela.classList.add(corAtual);
//     tela.classList.remove("azul");
//     corAtual = "azul";
//   }
// }

const cronometro = document.querySelector('[data-cronometro="digitos"]');
var contador = 0;
var interval;
const start = document.querySelector('[data-button="start"]');
const pause = document.querySelector('[data-button="pause"]');
start.addEventListener('click',startCronometro);
pause.addEventListener('click',pauseCronometro);
pause.addEventListener('dblclick',resetCronometro);

function startCronometro(){
  // if (!cronometro.hasAttribute('data-start')){
  //   setTimeout(()=> {
  //     cronometro.innerText = contador;
  //     cronometro.classList.add('ativo');
  //   },999);
  //   interval = setInterval(()=>{
  //     cronometro.innerText = contador;
  //     contador++;
  //   },1000);
  //   cronometro.setAttribute('data-start','');
  // }
  setTimeout(()=> {
    cronometro.innerText = contador;
    cronometro.classList.add('ativo');
  },999);
  interval = setInterval(()=>{
    cronometro.innerText = contador;
    contador++;
  },1000);
  start.setAttribute('disabled','');
}

function pauseCronometro(){
  console.log('nao implementado');
  clearInterval(interval);
  //cronometro.removeAttribute('data-start');
  start.removeAttribute('disabled');
}

function resetCronometro(){
  contador = 0;
  cronometro.innerText = contador;
}


