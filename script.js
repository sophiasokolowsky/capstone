document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form from refreshing page so that users can actually submit and see login or error
  
    const input = document.getElementById('student-id').value.trim();
    const message = document.getElementById('message');
  
    // is id valid or nah
    const isValid = input.startsWith("B01") && input.length >= 6;
  
    if (isValid) {
      message.style.color = "green";
      message.textContent = "Login successful! Just a moment...";
      
      // going to landing page 
      setTimeout(() => {
        window.location.href = "laundry_options.html";
      }, 1500);
      // error message if id is incorrect
    } else {
      message.style.color = "red";
      message.textContent = "Please enter a valid Student ID (e.g., B01...).";
    }
  });