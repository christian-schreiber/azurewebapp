function sendForm(event) {
  event.preventDefault(); // Prevent the form from submitting in the traditional way

  const firstnameInput = document.getElementById("firstname");
  const lastnameInput = document.getElementById("lastname");
  const emailInput = document.getElementById("email");

  const firstname = firstnameInput.value;
  const lastname = lastnameInput.value;
  const email = emailInput.value;

  fetch("https://azuresaturdayapi.azure-api.net/upload", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': '2c385dec383e419da10384e942d320b2',
    },
    body: JSON.stringify({
      "name": lastname,
      "firstname": firstname,
      "email": email
    }),          
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Response from server:', data);
    })
    .catch((error) => {
      console.error('Error sending form data:', error);
    });
}
