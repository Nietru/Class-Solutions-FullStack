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
  dateInputEl.val(''); // resets form.
};

formEl.on('submit', handleFormSubmit);

// ## Acceptance Criteria

// * It's done when the form input for entering a skill has an autocomplete feature added to it, to pick from a list of skills.

// * It's done when the form input for entering a date has a datepicker feature added to it, to select by month and year.

// Add Autocomplete widget here
//  I went to: https://jqueryui.com/autocomplete/ and clicked "view source" link on main page. 
$( function() {
  var skillNames = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  $( "#skill-name" ).autocomplete({ // changed it from "#tags" to "#skill-name" because checkout line 2 ^
    //sourse gives it the list for auto-complete options:
    source: skillNames // changed it from availableTags to skillNames because changed avail tags to "skillNames" on line 35
  });
} );

// Add Datepicker widget here
// I went to https://jqueryui.com/datepicker/ and clicked "Display month & year menus" in the sidebar, cuz the Readme directions asked us to.
// allows us to change the month and the year in the dropdown.
$( function() {
  $( "#datepicker" ).datepicker({
    changeMonth: true,
    changeYear: true,
  });
} );
