const tabContent = document.querySelectorAll('.js-tabcontent section');
const tabMenu = document.querySelectorAll('.js-tabmenu li');
if (tabContent.length && tabMenu.length){
  tabContent[0].classList.add('ativo');
  function ativar(indice){
    tabContent.forEach((item)=> item.classList.remove('ativo'));
    tabContent[indice].classList.add('ativo');
  }
  
  tabMenu.forEach((imagem,indice) => { 
    imagem.addEventListener('click', () => {
      ativar(indice);
    });
  });
}
