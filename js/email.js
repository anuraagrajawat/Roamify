<script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>

<script>
    emailjs.init('your_user_id'); 

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
                    alert('Sent! a mail to your E-Mail');
                }, (err) => {
                    btn.value = 'Send Email'; 
                    alert('Error: ' + JSON.stringify(err));
                });
        });
</script>
