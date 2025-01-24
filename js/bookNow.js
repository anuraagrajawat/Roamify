// Initialize EmailJS with your user ID
emailjs.init('4sO-R-TYpnLPdB5Gm'); // Replace 'your_user_id' with your actual EmailJS user ID

const btn = document.getElementById('bookNowBtn');
const form = document.querySelector('.details');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  btn.disabled = true; 
  btn.innerText = 'Booking...'; 

  const serviceID = 'service_mzzk4o8';
  const templateID = 'template_046438y';

  emailjs.sendForm(serviceID, templateID, form)
    .then(() => {
      btn.disabled = false;
      btn.innerText = 'Booked!'; 
      alert('Thank you for booking! We will get in touch with you shortly.');
    }, (err) => {
      btn.disabled = false;
      btn.innerText = 'BOOK NOW';
      alert('Failed to send email: ' + JSON.stringify(err));
    });
});
