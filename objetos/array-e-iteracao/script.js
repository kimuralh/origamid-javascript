// Selecione cada curso e retorne uma array
function Curso(classeElemento){
  this.titulo = classeElemento.querySelector('h1').innerText;
  this.descricao = classeElemento.querySelector('p').innerText;
  this.aulas = classeElemento.querySelector('.aulas').innerText;
  this.horas = classeElemento.querySelector('.horas').innerText;
}
const cursos = Array.from(document.querySelectorAll('.curso'));
const objCursos = cursos.map((curso)=>{
  return new Curso(curso);
  //ou
  /*
  const titulo = classeElemento.querySelector('h1').innerText;
  const descricao = classeElemento.querySelector('p').innerText;
  const aulas = classeElemento.querySelector('.aulas').innerText;
  const horas = classeElemento.querySelector('.horas').innerText;
  //quando esta criando um objeto cujo nome da propriedade tem o mesmo nome da variavel (titulo:titulo), pode resumir assim
  return {
    titulo,
    descricao,
    aulas,
    horas,
  }
  */
});
console.log(objCursos);
// com objetos contendo o título, descricao,
// aulas e horas de cada curso


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiores100 = numeros.filter((numero)=>{
  return numero > 100
})
console.log(maiores100);


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const existeBaixo = instrumentos.some((item)=>{
  return item === 'Baixo'
})
console.log(existeBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const totalCompras = compras.reduce((acumulador,produto)=>{
  return acumulador + (+produto.preco.replace('R$ ','').replace(',','.').trim())
},0);
const totalFormatado = totalCompras.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
console.log(totalFormatado);
