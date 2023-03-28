const form = document.querySelector('form');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const rememberMeCheckbox = document.getElementById('checkbox');
  const submitButton = document.getElementById('submit');
  const existingUserButton = document.createElement('button');
  existingUserButton.id = 'existing';
  existingUserButton.textContent = 'Login as existing user';

  submitButton.addEventListener('click', event => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (rememberMeCheckbox.checked) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

    alert(`Logged in as ${username}`);

    if (localStorage.getItem('username')) {
      form.appendChild(existingUserButton);
    }
  });

  existingUserButton.addEventListener('click', () => {
    const savedUsername = localStorage.getItem('username');
    alert(`Logged in as ${savedUsername}`);
  });