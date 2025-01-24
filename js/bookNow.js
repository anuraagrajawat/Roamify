document.getElementById('bookNowBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission, if any

    // Gather form data from the modal
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const package = document.getElementById('package').value;

    // Validate form data (you can add more validations here)
    if (!name || !email || !mobile || !package) {
        alert("Please fill all fields");
        return;
    }

    // Prepare email data for EmailJS
    const templateParams = {
        user_name: name,
        user_email: email,
        user_mobile: mobile,
        user_package: package
    };

    // Send email using EmailJS
    emailjs.send('service_mzzk4o8', 'template_ud9vgw4', templateParams)
        .then(function(response) {
            console.log('Email sent successfully!', response);
            alert('Your booking has been received!');
        }, function(error) {
            console.error('Error sending email:', error);
            alert('There was an issue sending your email. Please try again.');
        });
});
