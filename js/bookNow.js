// Initialize EmailJS with your user ID
emailjs.init('4sO-R-TYpnLPdB5Gm'); // Replace with your actual user ID
const btnn = document.getElementById('bookNowBtn');
const formm = document.querySelector('#mail-form');

formm.addEventListener('submit', function(event) {
  event.preventDefault();

  btnn.disabled = true;
  btnn.innerText = 'Booking...';

  const serviceID = 'service_mzzk4o8'; // Replace with your service ID
  const templateID = 'template_ud9vgw4'; // Replace with your template ID

  // Send the email using hardcoded values for testing
  emailjs.send('service_mzzk4o8', 'template_ud9vgw4', {
    user_name: 'Test User',
    user_email: 'testuser@example.com',
    user_mobile: '1234567890',
    user_package: 'Solo Traveler'
  }).then(() => {
    console.log('Email sent successfully!');
  }, (err) => {
    console.error('Error sending email:', err);
  });

  // Uncomment this block to send the actual form data once the test works
  // emailjs.sendForm(serviceID, templateID, formm)
  //   .then(() => {
  //     btnn.disabled = false;
  //     btnn.innerText = 'Booked!';
  //     alert('Thank you for booking! We will get in touch with you shortly.');
  //   })
  //   .catch((err) => {
  //     btnn.disabled = false;
  //     btnn.innerText = 'BOOK NOW';
  //     console.error('EmailJS Error:', err);
  //     alert('Failed to send email. Please check the console for details.');
  //   });
});
