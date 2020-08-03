// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const cloneMenu = menu.cloneNode(true);
const copy = document.querySelector('.copy');
copy.appendChild(cloneMenu);
//copy.insertBefore(cloneMenu,copy.children[0]);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const dl = faq.querySelector('dl');
const primeiroDt = dl.querySelector('dt:first-child')
console.log(primeiroDt);


// Selecione o DD referente ao primeiro DT
//primeiroDt.nextElementSibling

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML;

