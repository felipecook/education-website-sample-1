// change NAVBAR styles on scroll

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
});


// Show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () =>{
    faq.classList.toggle('open'); 


    //change icon
    const icon = faq.querySelector('.faq__icon i');
    if(icon.className === 'uil uil-plus') {
      icon.className = "uil uil-minus";
    } else {
      icon.className = 'uil uil-plus';
    }
  })

})


//show/hide nav menu
const menu = document.querySelector(".nav__menu");

const closeButton = document.querySelector("#close-menu-button");

const openButton = document.querySelector("#open-menu-button");

openButton.addEventListener('click', () => {
  menu.style.display = 'block';
  closeButton.style.display = 'block';
  openButton.style.display = 'none';
});

closeButton.addEventListener('click', () => {
  openButton.style.display = 'block';
  closeButton.style.display = 'none';
  menu.style.display = 'none';
})


