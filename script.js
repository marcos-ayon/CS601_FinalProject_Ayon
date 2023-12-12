document.addEventListener("DOMContentLoaded", function () {
    // Get the parallax image element
    var headerImage = document.getElementById("header_image");

    // Set the amount of parallax effect (adjust as needed)
    var parallaxStrength = 5;

    // Add mousemove event listener to the document
    document.addEventListener("mousemove", function (event) {
        // Calculate the parallax effect based on mouse position
        var mouseX = event.clientX / window.innerWidth - 0.5;
        var mouseY = event.clientY / window.innerHeight - 0.5;

        // Apply the parallax effect to the image
        if(headerImage != null){
            headerImage.style.transform = "translate(" + mouseX * parallaxStrength *1.5 + "px, " + mouseY * parallaxStrength + "px)";
        }
    });
});


function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    // validation
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // if the form is valid, proceed with sending the email
    sendEmail(name, email, message);

    // Prevent the form from submitting in the traditional way
    return false;
}

function sendEmail(name, email, message) {
    //will not actually send email since i dont have server set up
    //to actually send email

    //for demonstration purposes, i will log the data to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    //show success
    showSuccessBanner();

    // clear the fields after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

function showSuccessBanner() {
    var successBanner = document.getElementById('successBanner');
    successBanner.style.display = 'block';

    setTimeout(function () {
        successBanner.style.display = 'none';
    }, 5000);
}

function isValidEmail(email) {
    // regex for basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}