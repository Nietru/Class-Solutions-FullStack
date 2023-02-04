var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

function handleFormSubmit(event) {
  event.preventDefault();

  var shoppingItem = $('input[name="shopping-input"]').val();

  if (!shoppingItem) {
    console.log('No shopping item filled out in form!');
    return; //clears form
  }

  var shoppingListItemEl = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  shoppingListItemEl.text(shoppingItem);

  // add delete button to remove shopping list item
  shoppingListItemEl.append(
    '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
  );

  // print to the page
  shoppingListEl.append(shoppingListItemEl);

  // clear the form input element
  $('input[name="shopping-input"]').val('');
}

// TODO: Create a function to handle removing a list item when `.delete-item-btn` is clicked
function handleRemoveItem(event) { //must have the event as the paramater
  // convert button we pressed (`event.target`) to a jQuery DOM object.
  var btnClicked = $(event.target); // .target gives you exactly what was clicked on.
  // get the parent `<li>` element from the button we pressed and remove it. All buttons are children of lis
  btnClicked.parent('li').remove(); //removes the parent which gets rid of the element holding the item.
}

/* TODO: Use event delegation and add an event listener to `shoppingListEl` to listen for a click event on any element 
   with a class of `.delete-item-btn` and execute the function created above */
shoppingListEl.on('click', '.delete-item-btn', handleRemoveItem); // '.delete-item-btn' is a cllass from line 20.

shoppingFormEl.on('submit', handleFormSubmit);
