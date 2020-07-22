export default function dropdownMenuAction(){
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  dropdownMenus.forEach((menu)=>{
    ['click','touchstart'].forEach((evento)=>{
      menu.addEventListener(evento,ativaMenu);
    })
  });
  function ativaMenu(event){
    event.preventDefault();
    console.log(this);
    this.classList.toggle('ativo');
  }
}