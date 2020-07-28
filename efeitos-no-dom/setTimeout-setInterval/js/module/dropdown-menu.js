export default function dropdownMenuAction(){
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  dropdownMenus.forEach((menu)=>{
    ['click','touchstart'].forEach((evento)=>{
      menu.addEventListener(evento,ativaMenu);
    })
  });
  
  function ativaMenu(event){
    event.preventDefault();
    console.log('tooglei');
    this.classList.toggle('ativo');
    //1. feito usando objeto e atribuindo valores pro objeto antes de passalo pro eventListener
    //porem não encapsula nem reaproveita esse codigo
    // clickOutside.menu = this;
    // clickOutside.html = html;
    // this.classList.contains('ativo') ? html.addEventListener('click',clickOutside): html.removeEventListener('click',clickOutside);
    // html.addEventListener('click',clickOutside)
    outsideClick(this, ['click','touchstart'], ()=>{
      this.classList.remove('ativo');
    });
  }

  function outsideClick(element, events, callback){
    const html = document.documentElement;
    const outside = 'data-outside';

    if (!element.hasAttribute(outside)){
      
      events.forEach((tipoEvento)=>{
        html.addEventListener(tipoEvento,handleOutsideClick);
      });
      element.setAttribute(outside,'');
    }

    function handleOutsideClick(event){
      if (!element.contains(event.target)){
        element.removeAttribute(outside);
        events.forEach((tipoEvento)=>{
          html.removeEventListener(tipoEvento,handleOutsideClick);
        })
        callback();
      }
    }
  }
  
  // Objeto 
/*   const clickOutside = {
    handleEvent(event){
      console.log(event.target,this.menu.contains(event.target))
      console.log(event.target, event.currentTarget, this.menu);
      if (this.menu.contains(event.target)){
        console.log('sinto muito');
      }
      else{
        
        console.log('removido');
        this.menu.classList.remove('ativo');
        this.html.removeEventListener('click',clickOutside);
      }
    }
  } */
}