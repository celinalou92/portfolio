const arrowButton = document.querySelector('.round')
const contact = document.querySelector('#contact')

arrowButton.addEventListener('click', function(){
  contact.scrollIntoView();
})