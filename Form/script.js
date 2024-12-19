function validateForm() {
  // Get the email and confirm email values
  var email = document.getElementById('email').value;
  var confirmEmail = document.getElementById('confirm-email').value;

  // Check if the email values match
  if (email !== confirmEmail) {
      alert("Email addresses do not match.");
      return false; // Prevent form submission
  }

  // If emails match, form is valid
  alert("Form submitted successfully!");
  return true;
}
