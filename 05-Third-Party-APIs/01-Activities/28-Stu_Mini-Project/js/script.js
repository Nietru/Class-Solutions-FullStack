/** ### Task 2: Capture Form Data:
 1. Using jQuery, set up functionality to capture the form's input elements on submit and use that data to create a 
     new table row on the page.
 2. Select and save references to every DOM element we will interact with to a variable 
     (i.e., `var projectFormEl = $("#project-form");`) so that we can use these elements later.
 3. Attach a submit event listener to the `<form>` element using jQuery.
 4. On submission, capture the input values from the form and update localStorage so that the projects that 
     have been added are persistent. Clear the form data so that the user can easily add additional projects.
 5. Call the function to print the project data on the page.
 6. Ensure the modal closes when the user submits the form.
*/

/** ### Task 3: Print Project Data to Page:
 1. Create a function that will read the saved projects from localStorage.
 2. Create a table row (`<tr>`) element and save it to a variable.
 3. If the project is past due, give the row a class so that the row for the project will have a light red 
     background. If the project is due today, give the row a class so that the row will have a light yellow background.
 4. Create a table detail (`<td>`) element for each of the corresponding project fields in Task 1.
 5. Append each `<td>` element to the `<tr>`.
 6. Append each `<tr>` to the `<tbody>` element on the page.
 7. Don't forget to clear the `<tbody>` before adding all the rows.
 8. Add a call to the function when the page loads.
 9. Update the function responsible for capturing form data so that it calls the function for printing the data.
*/

/** ### Task 4: Delete a Project From the Table:
 1. Update the table to accommodate one more column without a name.
 2. When generating a new `<tr>` for a project, add one more `<td>` that holds a button for deleting a project from the list.
 3. Use jQuery event delegation to attach an event listener to each of those buttons so that when clicked, 
     the parent `<tr>` element will be removed from the page and the project is removed from localStorage. 
     (HINT: How might using a data-* attribute be helpful?) 
*/

// save reference to important DOM elements
    // grabbing all of our useful html elements first:
var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
var projectTypeInputEl = $('#project-type-input');
var projectDateInputEl = $('#project-date-input');

// function to handle displaying the time
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');    //dayjs() means current day/time and the [at] allows you to put literal text.
  timeDisplayEl.text(rightNow);
}

// localStorage method: Reads projects from local storage and returns array of project objects.
// Returns an empty array ([]) if there aren't any projects.
function readProjectsFromStorage() {
  var projects = localStorage.getItem('projects'); 
  if (projects) {
    projects = JSON.parse(projects);    // JSON parse pulls from local storage, JSON stringify saves to local storage.
  } else {
    projects = [];
  }
  return projects;
}

// Takes an array of projects and saves them in localStorage.
function saveProjectsToStorage(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
}

// Gets project data from local storage and displays it
function printProjectData() {       // print function populates the table.
  // clear current projects on the page
  projectDisplayEl.empty();     // clearing the table..

  // get projects from localStorage
  var projects = readProjectsFromStorage();     // then reading the projects from storage..

  // loop through each project and create a row
  for (var i = 0; i < projects.length; i += 1) {    // then looping through all of the projects
    var project = projects[i];
    var projectDate = dayjs(project.date);  // whatever the user typed in "due date"
    // get date/time for start of today
    var today = dayjs().startOf('day'); // gets a dayjs object of today.

    // Create row and columns for project for the project table
    var rowEl = $('<tr>');
    var nameEL = $('<td>').text(project.name);
    var typeEl = $('<td>').text(project.type);
    var dateEl = $('<td>').text(projectDate.format('MM/DD/YYYY'));

    // Save the index of the project as a data-* attribute on the button. This
    // will be used when removing the project from the array.
    var deleteEl = $(           // button to delete projects from the table.
      '<td><button class="btn btn-sm btn-delete-project" data-index="' +
        i +
        '">X</button></td>'
    );

    // add class to row by comparing project date to today's date
    if (projectDate.isBefore(today)) {      // if the project is late, it will give it the 'project-late' class which gives different styling.
      rowEl.addClass('project-late');
    } else if (projectDate.isSame(today)) {
      rowEl.addClass('project-today');
    }

    // append elements to DOM to display them
    rowEl.append(nameEL, typeEl, dateEl, deleteEl);     // we have to append the elements we created from lines 83-86 ^ 
    projectDisplayEl.append(rowEl);
  }
}

// Removes a project from local storage and prints the project data
function handleDeleteProject() {
  var projectIndex = parseInt($(this).attr('data-index'));
  var projects = readProjectsFromStorage();
  // remove project from the array
  projects.splice(projectIndex, 1);     // using splice method (removing) deleted projects. 
  saveProjectsToStorage(projects);

  // print projects
  printProjectData();
}

// Adds a project to local storage and prints the project data
function handleProjectFormSubmit(event) {       // event handler for when the user clicks 'submit' button.
  event.preventDefault();   // preventing the default action of the form...

  // read user input from the form
  var projectName = projectNameInputEl.val().trim();        // were just pulling in the user's input..
  var projectType = projectTypeInputEl.val(); // don't need to trim select input
  var projectDate = projectDateInputEl.val(); // yyyy-mm-dd format

  var newProject = {        // made a new object from the things we pulled from the user input.
    name: projectName,
    type: projectType,
    date: projectDate,
  };

  // add project to local storage
  var projects = readProjectsFromStorage();     // now we want to add the new project (line 30) to local storage.
  projects.push(newProject);        // push method adds the new project
  saveProjectsToStorage(projects);      // then we save it.

  // print project data
  printProjectData();       //resetting the data table.

  // clear the form inputs
  projectNameInputEl.val('');
  projectTypeInputEl.val('');
  projectDateInputEl.val('');
}

projectFormEl.on('submit', handleProjectFormSubmit);    // calls line 122 on submit click.

// Use jQuery event delegation to listen for clicks on dynamically added delete
// buttons.
projectDisplayEl.on('click', '.btn-delete-project', handleDeleteProject);

displayTime();              // this is the interval for displaying the time, this makes it refresh every second.
setInterval(displayTime, 1000);

printProjectData();   // kicks everything off! (:
