document.getElementById('survey-form').addEventListener('submit', function(event) {
    let valid = true;
  
    const name = document.getElementById('name');
    if (name.value.trim() === '') {
      showError(name, 'Name is required.');
      valid = false;
    } else {
      clearError(name);
    }
  
    const username = document.getElementById('username');
    const usernamePattern = /^[A-Za-z0-9]{5,12}$/;
    if (!usernamePattern.test(username.value)) {
      showError(username, 'Username must be 5-12 alphanumeric characters.');
      valid = false;
    } else {
      clearError(username);
    }
  
    if (!valid) {
      event.preventDefault();
    }
  });
  
  function showError(input, message) {
    const error = input.nextElementSibling;
    error.textContent = message;
    error.style.color = 'red';
  }
  
  function clearError(input) {
    const error = input.nextElementSibling;
    error.textContent = '';
  }
  