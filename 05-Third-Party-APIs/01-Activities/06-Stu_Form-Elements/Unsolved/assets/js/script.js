var shoppingFormEl = $('#shopping-form'); // to grab the form from html file.
var shoppingListEl = $('#shopping-list'); // to grab the ul in the html file.

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit(event) {  //event is preventing the default
    event.preventDefault();


    // select the form element by its `name` attribute and get its' value:
var shoppingItem = $('input[name="shopping-input"]').val();  //this is just the syntax jQuery uses to get the input field.

    //safety check, so that if there is no '!' shopping item entered by user, will not add anything.
if (!shoppingItem) {
    console.log('No shopping item filled out in the form!');
    return; //ends the function
}

    //print to the page: makes a new list item and appends it every time they click submit.
shoppingListEl.append('<li>' + shoppingItem + '</li>'); //adds the shoppingItem from line 10 that user submitted, to the shoppingList UL

    // clear out the form input element after each submission:
$('input[name="shopping-input"]').val('');
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission

shoppingFormEl.on('submit', handleFormSubmit); //when user clicks 'submit' button, it runs the function above.
//'submit' can only work with a form, otherwise we can just use 'click'