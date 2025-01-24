

const bookNowBtn = document.getElementById('bookNowBtn');
const form = document.querySelector('.details'); 

bookNowBtn.addEventListener('click', function(event) {
  event.preventDefault();
  console.log("Button clicked!");
});

bookNowBtn.addEventListener('click', function(event) {
  event.preventDefault();

  bookNowBtn.disabled = true;
  bookNowBtn.innerText = 'Sending...';

  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const mobile = form.querySelector('#mobile').value;
  const package = form.querySelector('#package').value;

  if (!name || !email || !mobile || !package) {
    alert("Please fill out all required fields.");
    bookNowBtn.disabled = false;
    bookNowBtn.innerText = 'BOOK NOW';
    return;
  }

  const serviceID = 'service_mzzk4o8';
  const templateID = 'template_ud9vgw4';

  const templateParams = {
    name: name,
    email: email,
    mobile: mobile,
    package: package,
    user_email: email,
  };

  emailjs.send(serviceID, templateID, templateParams)
    .then(() => {
      bookNowBtn.disabled = false;
      bookNowBtn.innerText = 'BOOKED!';
      alert('Your booking is confirmed! We will get in touch with you shortly.');
    }, (err) => {
      bookNowBtn.disabled = false;
      bookNowBtn.innerText = 'BOOK NOW';
      alert('Failed to send email: ' + JSON.stringify(err));
    });
});
