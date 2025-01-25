emailjs.init('4sO-R-TYpnLPdB5Gm');

const btnn = document.getElementById('bookNowBtn');
const formm = document.querySelector('#mail-form');
const closePopupBtn = document.getElementById("closePopupBtn");

const serviceID = 'service_mzzk4o8';
const templateID = 'template_ud9vgw4';
const popup = document.getElementById("popup");

closePopupBtn.addEventListener("click", function() {
  popup.style.display = "none";
  btnn.disabled = true;
});

formm.addEventListener('submit', function(event) {
  event.preventDefault();

  btnn.disabled = true;
  btnn.innerText = 'Booking...';

  emailjs.sendForm(serviceID, templateID, formm)
    .then(() => {
      btnn.disabled = false;
      btnn.innerText = 'Booked!';
      const formElements = formm.elements;
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].disabled = true;  // Disable each form element
  }
      popup.style.display = "block"; // Show the popup on success
    })
    .catch((err) => {
      btnn.disabled = false;
      btnn.innerText = 'BOOK NOW';
      console.error('EmailJS Error:', err);
      popup.style.display = "block"; // Show the popup on error
    });
});
