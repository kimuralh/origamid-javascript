export default function tooltipAction(){
  const tooltips = document.querySelectorAll('[data-tooltip]');
  function onMouseOver(){
    const tooltip = createToolTipBox(this);
    
    onMouseMove.tooltip = tooltip;
    onMouseLeave.tooltip = tooltip;
    onMouseLeave.elemento = this;

    this.addEventListener('mousemove',onMouseMove);
    this.addEventListener('mouseleave',onMouseLeave);
    
  }

  const onMouseMove = {
    
    handleEvent(event){
      this.tooltip.style.top = event.pageY + 10 + 'px';
      this.tooltip.style.left = event.pageX + 10 + 'px';
    }


  }

  const onMouseLeave = {
    handleEvent(){
      this.tooltip.remove();
      this.elemento.removeEventListener('mousemove',onMouseMove)
      this.elemento.removeEventListener('mouseleave',onMouseLeave)
    }
  }

  function createToolTipBox(elemento){
    const tooltipBox = document.createElement('div');
    tooltipBox.classList.add('tooltip');
    tooltipBox.textContent = elemento.getAttribute('aria-label');
    document.body.append(tooltipBox);
    return tooltipBox;
  }
  tooltips.forEach(
    (item) => {
      item.addEventListener('mouseover',onMouseOver);
    }
  );

  
    


}