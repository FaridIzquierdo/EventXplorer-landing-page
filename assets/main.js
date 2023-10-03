/*--------------------------------------------------------------
# Section-Home-Tarnsition
--------------------------------------------------------------*/

const btnGetStarted = document.querySelector('#btn-get-started')


btnGetStarted.addEventListener('click', ()=>{
  console.log("Me diste click JSJS");
});

document.getElementById('btn-get-started').addEventListener('click', function() {
    document.getElementById('section-our-benefits').scrollIntoView({ behavior: 'smooth' });
});

const menuItems = document.querySelectorAll('.navbar-nav a');

  menuItems.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const href = item.getAttribute('href');
      const body = document.querySelector('body');
      body.style.transition = 'opacity 2s';
      body.style.opacity = 0;
      setTimeout(() => {
        window.location.href = href;
      }, 1000);
    });
  });

/*--------------------------------------------------------------
# Section-Contact-Us-Successfull-Form
--------------------------------------------------------------*/
const btnSubmit = document.querySelector('#btnSubmit')

btnSubmit.addEventListener('click', ()=>{
  alert("Su formulario se ha llegado a procesar correctamente");
});
