var passwordBtnEl = $('#password-btn'); // changed this to #password-btn from .password-btn because it is an id in the html.
var passwordDisplayEl = $('#password-display');

// Returns a random character that includes alphanumeric and special character values
function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Returns a string of concatenated characters of length num
function passwordGenerator(num) {
  var password = '';
  for (var i = 0; i < num; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

passwordBtnEl.on('click', function () {   // changed to 'click' from 'dblclick' but 'dblclick' is an event too
  var newPassword = passwordGenerator(15);
  passwordDisplayEl.text(newPassword);
});
