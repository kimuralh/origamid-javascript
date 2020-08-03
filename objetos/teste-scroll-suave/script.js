function proximoVisivel(event){
	event.preventDefault();
	const sections = document.querySelectorAll('section');
  const sectionList = Array.from(sections);
  const indice = sectionList.findIndex((section) => {
  	let altura = section.getBoundingClientRect().top;
    
    return altura > 0;
  });
  console.log(indice);
  sectionList[indice].scrollIntoView({
  behaviour:'smooth',
  block:'start',
  });
}
window.addEventListener('scroll',proximoVisivel);
//nao funcionou, excesso de scroll e na volta não foi pensado