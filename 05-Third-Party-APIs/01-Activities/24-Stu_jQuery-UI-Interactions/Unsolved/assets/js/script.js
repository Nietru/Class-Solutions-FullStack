// * As a user, I want to be able to sort my list of skills using the cursor to drag and drop them.

// ## Acceptance Criteria

// * It's done when the list of skills can be reorganized and sorted using drag-and-drop functionality.

// * It's done when a placeholder is filling empty space.

var formEl = $('#skills-form');
var nameInputEl = $('#skill-name');
var dateInputEl = $('#datepicker');
var skillsListEl = $('#skills-list');

var printSkills = function (name, date) {
  var listEl = $('<li>');
  var listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
};

var handleFormSubmit = function (event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput);

  nameInputEl.val('');
  dateInputEl.val('');
};

formEl.on('submit', handleFormSubmit);

// Autocomplete widget
$(function () {
  var skillNames = [
    'Bootstrap',
    'C',
    'C++',
    'CSS',
    'Express.js',
    'Git',
    'HTML',
    'Java',
    'JavaScript',
    'jQuery',
    'JSON',
    'MySQL',
    'Node.js',
    'NoSQL',
    'PHP',
    'Python',
    'React',
    'Ruby',
  ];
  $('#skill-name').autocomplete({
    source: skillNames,
  });
});

// Datepicker widget
$(function () {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
  });
});

// Add interaction here
// Have to use the sorted UI. I went to: https://jqueryui.com/sortable/  and clicked the "placeholder" option in the sidebar.
  // https://jqueryui.com/sortable/#placeholder   the readMe directions (at top of this page and the readme file) wanted us to do that:
  $( function() {
    $( "#skills-list" ).sortable({ // replaced #sortable (from the website),  with #skills-list from our code.
      placeholder: "ui-state-highlight"
  });
});