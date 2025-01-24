// Function to get URL parameters
function getQueryParams() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        user_name: urlParams.get('user_name'),
        user_email: urlParams.get('user_email'),
        user_mobile: urlParams.get('user_mobile'),
        user_package: urlParams.get('user_package')
    };
}

// Set the form fields with the URL parameters
function populateForm() {
    const params = getQueryParams();
    if (params.user_name) {
        document.getElementById('name').value = params.user_name;
    }
    if (params.user_email) {
        document.getElementById('email').value = params.user_email;
    }
    if (params.user_mobile) {
        document.getElementById('mobile').value = params.user_mobile;
    }
    if (params.user_package) {
        document.getElementById('package').value = params.user_package;
    }
}

// Call populateForm on page load
window.onload = populateForm;

// Initialize EmailJS with your user ID
emailjs.init('4sO-R-TYpnLPdB5Gm'); // Replace with your actual user ID

const btn = document.getElementById('bookNowBtn');
const form = document.querySelector('.details');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  btn.disabled = true;
  btn.innerText = 'Booking...';

  const serviceID = 'service_mzzk4o8'; // Replace with your service ID
  const templateID = 'template_046438y'; // Replace with your template ID

  emailjs.sendForm(serviceID, templateID, form)
    .then(() => {
      btn.disabled = false;
      btn.innerText = 'Booked!';
      alert('Thank you for booking! We will get in touch with you shortly.');
    })
    .catch((err) => {
      btn.disabled = false;
      btn.innerText = 'BOOK NOW';
      console.error('EmailJS Error:', err);
      alert('Failed to send email. Please check the console for details.');
    });
});
