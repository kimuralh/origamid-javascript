export default function tabMenuAction(){
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  if (tabContent.length && tabMenu.length){
    tabContent[0].classList.add('ativo');
    //tabContent[0].classList.add('show-right');
    function ativar(indice){
      tabContent.forEach((item)=> {
        item.classList.remove('ativo');
        item.classList.remove(item.dataset.anime);
      });
      tabContent[indice].classList.add('ativo'
      //,tabContent[indice].dataset.anime
      );
    }
    
    tabMenu.forEach((imagem,indice) => { 
      imagem.addEventListener('click', () => {
        ativar(indice);
      });
    });
  }  
}