document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing page
  
    const input = document.getElementById('student-id').value.trim();
    const message = document.getElementById('message');
  
    // Example of a valid ID check — you can customize or add real validation later
    const isValid = input.startsWith("B01") && input.length >= 6;
  
    if (isValid) {
      message.style.color = "green";
      message.textContent = "Login successful! Redirecting to laundry dashboard...";
      
      // Simulate redirect
      setTimeout(() => {
        window.location.href = "laundry_options.html";
      }, 1500);
    } else {
      message.style.color = "red";
      message.textContent = "Please enter a valid Student ID (e.g., B01...).";
    }
  });