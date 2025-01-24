emailjs.init('4sO-R-TYpnLPdB5Gm');

const btnn = document.getElementById('bookNowBtn');
const formm = document.querySelector('#mail-form');

const serviceID = 'service_mzzk4o8';
const templateID = 'template_ud9vgw4';

formm.addEventListener('submit', function(event) {
  event.preventDefault();

  btnn.disabled = true;
  btnn.innerText = 'Booking...';

  emailjs.sendForm(serviceID, templateID, formm)
    .then(() => {
      btnn.disabled = false;
      btnn.innerText = 'Booked!';
      alert('Thank you for booking! We will get in touch with you shortly.');
    })
    .catch((err) => {
      btnn.disabled = false;
      btnn.innerText = 'BOOK NOW';
      console.error('EmailJS Error:', err);
      alert('Failed to send email. Please check the console for details.');
    });
});
