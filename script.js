var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var slider = document.querySelector(".slider");

btn1.addEventListener("click", function () {
  slider.style.marginLeft = "0px";
  btn1.style.backgroundColor = "#D7E690";
  btn2.style.backgroundColor = "transparent";
});

btn2.addEventListener("click", function () {
  slider.style.marginLeft = "-450px";
  btn2.style.backgroundColor = "#D7E690";
  btn1.style.backgroundColor = "transparent";
});

const btn = document.getElementById('submit');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_3u801x4';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
  });