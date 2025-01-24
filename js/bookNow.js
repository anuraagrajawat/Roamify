// Initialize EmailJS with your user ID
emailjs.init('4sO-R-TYpnLPdB5Gm'); // Replace 'your_user_id' with your actual EmailJS user ID

// Add event listener for the "BOOK NOW" button
document.getElementById('bookNowBtn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Gather form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const package = document.getElementById('package').value.trim();

    // Validate form data
    if (!name || !email || !mobile || !package) {
        alert("Please fill all fields");
        return;
    }

    // Log form data for debugging
    console.log("Form Data:", { name, email, mobile, package });

    // Prepare email data for EmailJS
    const templateParams = {
        user_name: name,
        user_email: email,
        user_mobile: mobile,
        user_package: package,
    };

    // Send email using EmailJS
    emailjs
        .send('service_mzzk4o8', 'template_ud9vgw4', templateParams)
        .then(
            function (response) {
                console.log('Email sent successfully!', response);
                alert('Your booking has been received!');
            },
            function (error) {
                console.error('Error sending email:', error);
                alert('There was an issue sending your email. Please try again.');
            }
        );
});
