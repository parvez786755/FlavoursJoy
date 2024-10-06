document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.querySelector('.registration-form');
    const loginButton = document.querySelector('.login-button');

    // Registration
    if (registrationForm) {
        registrationForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();
            alert(data.message);
        });
    }

    // Login
    if (loginButton) {
        loginButton.addEventListener('click', async (e) => {
            e.preventDefault();

            const email = prompt('Enter your email:');
            const password = prompt('Enter your password:');

            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            alert(data.message);
        });
    }
});
