function tabMenuAction(){
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
}

tabMenuAction();

function accordionAction(){
  function ativarAccordion(){
    //event.currentTarget.nextElementSibling
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
  }
  const accordionDts = document.querySelectorAll('.js-accordion dt');

  if (accordionDts.length){
    accordionDts[0].classList.toggle('ativo');
    accordionDts[0].nextElementSibling.classList.toggle('ativo');
    accordionDts.forEach((item) => item.addEventListener('click', ativarAccordion));
  }
  
}

accordionAction();