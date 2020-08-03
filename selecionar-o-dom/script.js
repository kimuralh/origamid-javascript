// Retorne no console todas as imagens do site
const siteImagens = document.querySelectorAll("img");
console.log(siteImagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const siteImagensInicio = document.querySelectorAll('img[src^="img/imagem"]');
console.log(siteImagensInicio);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

// Selecione o último p do site
/*const ultimoP = document.querySelector('p:last-of-type');
console.log(ultimoP);
não funcionou, ultimo elemento de um elemento, não foi o ultimo elemento de fato
*/
const ps = document.querySelectorAll('p');
console.log(ps[--ps.length]);