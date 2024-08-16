
// Get the form element
const form = document.getElementById('regForm');

// Add an event listener to the form submission
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Check if the form data is valid
  if (isValidFormData(formData)) {
    // If the data is valid, submit the form
    form.submit();
  } else {
    // If the data is not valid, display an error message
    alert('Please fill out the required fields');
  }
});

// Function to check if the form data is valid
function isValidFormData(formData) {
  // Get the form fields
  const fields = {
    'first-name': formData.get('first-name'),
    'last-name': formData.get('last-name'),
    'email': formData.get('email'),
    'location': formData.get('location'),
    'age': formData.get('age'),
  };

  // Check if all the required fields are filled out
  for (const field in fields) {
    if (!fields[field]) {
      return false;
    }
  }

  // If all the required fields are filled out, return true
  return true;
}
