const btn = document.getElementById('emailbhejo');
const form = document.querySelector('.subscribe-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  btn.disabled = true; 
  btn.innerText = 'Sending...'; 

  const serviceID = 'service_mzzk4o8';
  const templateID = 'template_046438y';

  emailjs.sendForm(serviceID, templateID, form)
    .then(() => {
      btn.disabled = false;
      btn.innerText = 'Sent!'; 
      alert('Thank you for subscribing! We will get in touch with you shortly.');
    }, (err) => {
      btn.disabled = false;
      btn.innerText = 'Submit';
      alert('Failed to send email: ' + JSON.stringify(err));
    });
});
