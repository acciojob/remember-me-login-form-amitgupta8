//your JS code here. If required.
const form = document.querySelector('form');
      const usernameInput = document.querySelector('#username');
      const passwordInput = document.querySelector('#password');
      const checkboxInput = document.querySelector('#checkbox');
      const submitButton = document.querySelector('#submit');

      // Load saved details from local storage
      if (localStorage.getItem('username') && localStorage.getItem('password')) {
        const existingButton = document.createElement('button');
        existingButton.id = 'existing';
        existingButton.textContent = 'Login as existing user';
        form.appendChild(existingButton);
      }

      // Submit form event handler
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;
        const rememberMe = checkboxInput.checked;

        if (rememberMe) {
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
        } else {
          localStorage.removeItem('username');
          localStorage.removeItem('password');
        }

        alert(`Logged in as ${username}`);

        // Remove existing button if it exists
        const existingButton = document.querySelector('#existing');
        if (existingButton) {
          form.removeChild(existingButton);
        }
      });

      // Existing button event handler
      form.addEventListener('click', (event) => {
        if (event.target.id === 'existing') {
          const savedUsername = localStorage.getItem('username');
          alert(`Logged in as ${savedUsername}`);
        }
      });
