export default function accordionAction(){
  function ativarAccordion(){
    //event.currentTarget.nextElementSibling
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
  }
  const accordionDts = document.querySelectorAll('[data-anime="accordion"] dt');

  if (accordionDts.length){
    accordionDts[0].classList.toggle('ativo');
    accordionDts[0].nextElementSibling.classList.toggle('ativo');
    accordionDts.forEach((item) => item.addEventListener('click', ativarAccordion));
  }
  
}