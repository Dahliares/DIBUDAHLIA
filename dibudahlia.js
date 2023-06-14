window.onload = function () {

  const menu = document.querySelector(".menu");
  const openMenuBtn = document.querySelector(".open-menu");
  const closeMenuBtn = document.querySelector(".close-menu");

  function toggleMenu() {
    menu.classList.toggle("menu_opened");
  }

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function () {
      menu.classList.remove("menu_opened");

    });

  });

  const btn = document.getElementById('button');

  document.getElementById('form')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      btn.value = 'Enviando...';

      const serviceID = 'default_service';
      const templateID = 'template_wnqf9sh';

      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Enviar mensaje';
          alert('Enviado!');
        }, (err) => {
          btn.value = 'Enviar mensaje';
          alert(JSON.stringify(err));
        });
    });


    fetch("dibujos.json")
    .then(response => response.json())
    .then(json => console.log(json));

 


}