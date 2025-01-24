const btn = document.getElementById('emailbhejo');
const form = document.querySelector('.subscribe-form'); // or use getElementById if you have an ID for the form

form.addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = 'Sending...';

  const serviceID = 'service_mzzk4o8';
  const templateID = 'template_046438y';

  emailjs.sendForm(serviceID, templateID, form)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
