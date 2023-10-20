const form = document.querySelector('#formBD');
const birthdateInput = document.querySelector('#birthdate');
const ageOutput = document.querySelector('#age');
const nameInput = document.querySelector('#namebirth');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const birthName = nameInput.value;
  const birthdateString = birthdateInput.value;
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  const dateRegex2 = /^\d{1}\/\d{1}\/\d{4}$/;
  if((!dateRegex.test(birthdateString)) && (!dateRegex2.test(birthdateString))) {
    alert('Please enter a valid birthdate in either MM/DD/YYYY or M/D/YYYY format.');
    return;
  }
  const birthdate = new Date(birthdateString);
  const ageInMilliseconds = Date.now() - birthdate.getTime();
  const ageDate = new Date(ageInMilliseconds);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  if((ageDate.getUTCFullYear() - 1970) <= -1) {
    alert('Please enter a valid year that is not in the future.');
    return;
  }
  ageOutput.textContent = `Hello ${birthName}, you are ${age} years old.`;
});

form.addEventListener('reset', function() {
    ageOutput.textContent = null;
  })