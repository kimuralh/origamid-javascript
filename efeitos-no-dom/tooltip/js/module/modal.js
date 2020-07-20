export default function modalAction(){


  const modalContainer = document.querySelector('.modal-container');
  const liModal = document.querySelector('[data-modal="abrir"]');
  const fechaModal = document.querySelector('[data-modal="fechar"]');

  if (modalContainer && liModal && fechaModal){


    function toggleModal(event){
      event.preventDefault();
      console.log('eu sou o currentTarget',event.currentTarget);
      console.log('eu sou o Target',event.target);
      modalContainer.classList.toggle('ativo');
  
    }
    function verificaClique(event){
      console.log('eu sou o currentTarget',event.currentTarget);
      console.log('eu sou o Target',event.target);
      //if (event.target == event.currentTarget) {
      //event.current target é em quem o evento está adicionado
      //no caso este evento foi chamado por estar anexado ao modalContainer
      //que é a mesma coisa que this
      if (event.target == this) {
        toggleModal(event);
      }
    }

    liModal.addEventListener('click',toggleModal);
    fechaModal.addEventListener('click',toggleModal);
    modalContainer.addEventListener('click',verificaClique);
  }

}