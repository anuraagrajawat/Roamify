// Initialize EmailJS with your user ID
emailjs.init('your_user_id'); // Replace 'your_user_id' with your actual EmailJS user ID

// Get the button and form elements
const bookNowBtn = document.getElementById('bookNowBtn');
const form = document.querySelector('.details');

// Add event listener to the "Book Now" button
bookNowBtn.addEventListener('click', function(event) {
  event.preventDefault();  // Prevent form submission

  // Disable the button and change its text
  bookNowBtn.disabled = true;
  bookNowBtn.innerText = 'Sending...';

  // Get form values
  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const mobile = form.querySelector('#mobile').value;
  const package = form.querySelector('#package').value;

  // Validate if all fields are filled
  if (!name || !email || !mobile || !package) {
    alert("Please fill out all required fields.");
    bookNowBtn.disabled = false;
    bookNowBtn.innerText = 'BOOK NOW';
    return;
  }

  // Prepare the template parameters
  const serviceID = 'service_mzzk4o8';  // Replace with your actual service ID
  const templateID = 'template_ud9vgw4';  // Replace with your actual template ID

  const templateParams = {
    name: name,
    email: email,
    mobile: mobile,
    package: package,
    user_email: email,
  };

  // Send the email using EmailJS
  emailjs.send(serviceID, templateID, templateParams)
    .then(() => {
      // On success
      bookNowBtn.disabled = false;
      bookNowBtn.innerText = 'BOOKED!';
      alert('Your booking is confirmed! We will get in touch with you shortly.');
    }, (err) => {
      // On failure
      bookNowBtn.disabled = false;
      bookNowBtn.innerText = 'BOOK NOW';
      alert('Failed to send email: ' + JSON.stringify(err));
    });
});
