<script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>

<script>
    emailjs.init('4sO-R-TYpnLPdB5Gm');  /

    const btn = document.getElementById('emailbhejo');

    document.getElementById('form')
        .addEventListener('submit', function(event) {
            event.preventDefault(); 

            btn.value = 'Sending...'; 
            const serviceID = 'service_mzzk4o8';  
            const templateID = 'template_046438y';  

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.value = 'Sent!';  
                    alert('Sent! a mail, Thank you for your query! We will get in touch with you shortly.');
                }, (err) => {
                    btn.value = 'Send Email';  // Reset button text on error
                    alert('Error: ' + JSON.stringify(err));  // Show error message
                });
        });
</script>
