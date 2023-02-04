var formEl = $('#pizza-form');
var firstNameEl = $('input[name="first-name"]'); //because this is an input tag, that how we have to pull it
var lastNameEl = $('input[name="last-name"]');
var emailEl = $('input[name="email"]');
var githubEl = $('input[name="github"]');

function handleFormSubmit(event) {
  // Prevent the default behavior
  event.preventDefault();

  console.log('First Name:', firstNameEl.val());
  console.log('Last Name:', lastNameEl.val());
  console.log('Email:', emailEl.val());
  console.log('GitHub:', githubEl.val());

  // Select all checked options
  var checkedEl = $('input:checked'); //jQuery magic: way to get all of the checked pizza toppings.
  var selected = [];

  // Loop through checked options to store in array
  $.each(checkedEl, function () {
    selected.push($(this).val()); //***** NOTE: */.push is the way to add something to a selected array.
  });
  console.log('Toppings: ', selected.join(', '));

  // Clear input fields
  $('input[type="text"]').val('');
  $('input[type="email"]').val('');
  $('input[type="checkbox"]').prop('checked', false); //unchecks all the checked options.
}

// Submit event on the form
formEl.on('submit', handleFormSubmit); // added an event with .on when submit is clicked, funs handleFormSubmit function.
