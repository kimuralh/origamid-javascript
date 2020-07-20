export default function scrollAnimationAction(){
  const sections = document.querySelectorAll('[data-anime="scroll"]');
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