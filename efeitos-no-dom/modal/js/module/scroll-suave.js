export default function scrollToAction(){
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
  
  
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
  if (linksInternos.length){
    linksInternos.forEach((link) => link.addEventListener('click', scrollToSection));
  }

}