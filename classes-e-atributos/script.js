// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelector('.menu');
const elementos = document.querySelectorAll('.menu a');
elementos.forEach((elemento) => elemento.classList.add('ativo'));

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
elementos.forEach((elemento, index) => {
    if(index != 0){
      elemento.classList.remove('ativo')
    }
  } 
)
// ou só remove acima e só elementos[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
let alts = 0;
const imagens = document.querySelectorAll('img');
imagens.forEach((imagem,index) => {
  if(imagem.hasAttribute('alt')){
    alts++;
  }
  else{
    console.log(`A imagem de indice ${index} não tem o attributo alt`);
    imagem.setAttribute('alt','settado');
  }
});

if (alts < imagens.length){
  console.log("Nem todas as imagens tem atributo alt")
}
else{
  console.log("Todas as imagens tem atributo alt");
}


// Modifique o href do link externo no menu
const elementoExterno = menu.querySelector('[href^=http');
elementoExterno.setAttribute('href','https://www.uol.com.br');
