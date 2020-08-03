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

function scrollToAction(){
  function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const target = document.querySelector(href);
    console.log(target);
    //window.scrollTo(0, target.offSetTop);
    /*
    window.scrollTo({
      behavior: 'smooth',
      top: target.offSetTop,
    });
    */
    target.scrollIntoView({
      behavior:'smooth',
      block:'start',
    });
  }
  
  
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  if (linksInternos.length){
    linksInternos.forEach((link) => link.addEventListener('click', scrollToSection));
  }

}
scrollToAction();

function scrollAnimationAction(){
  const sections = document.querySelectorAll('.js-scroll');
  const limiteVisivel = window.innerHeight*0.6;
  function scrollAnimation(){
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const visible = (sectionTop - limiteVisivel) <= 0;
      if(visible){
        section.classList.add('ativo');
      }
      else{
        section.classList.remove('ativo');
      }
      
    });
  }

  
 
  if (sections.length){
    scrollAnimation();
    window.addEventListener('scroll',scrollAnimation);
  }
  
}
scrollAnimationAction();