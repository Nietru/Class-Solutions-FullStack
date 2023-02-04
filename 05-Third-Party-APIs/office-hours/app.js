console.log(window.$); // this console logs jquery, open the console so that we can see that jquery was added.

/** VARIABLES: */

// var cartList = document.querySelector('#cart-list'); //vanilla js equivalent.
var cartList = $("#cart-list"); // now jquery will go query the DOM.

// we need on object to describe all of our list items via json:
var cartItems = [   // this excludes the remove button
    {
        name: "noodles",        // gave these names prices and unit amounts.
        price: 3.00,
        units: 1,
    },
    {
        name: "eyeshadow",
        price: 6.00,
        units: 1,
    },
    {
        name: "hairbrush",
        price: 7.00,
        units: 1,
    },
];

/** FUNCTIONS: */
function renderCartList () {
    //empty the cartlist first so that the old html entries arent shown in the browser:
    // .empty() removes all the child nodes: so that the text from the html is no longer rendered in the browser.
    cartList.empty();   // cartlist references our unordered list (see line 1) 
    // adding an old fashioned loop and wrapping the function in it:
    for (var i = 0; i < cartItems.length; i++) {

    var item = cartItems[i];    //changed this from 0 to i after making the loop.

    var li= $("<li>");   // jQuery is smart enough that if we use an opening tag, that we are creating an element.
    var name = $("<div>").text("description: " + item.name);  // creating divs (new jquery object) for all of our item content. .text() to add our content, is a jquery helper that sets the text content
    var price = $("<div>").text("price: " + item.price);    // passing .text an argument returns a jQuery object, if we call .text without an argument, it makes a string and not a jQuery object.
    var units = $("<div>").text("units: " + item.units); 
    var remove = $("<div>");
    //we need to add our button as well:
    var btn = $("<button>")
    .addClass("remove-item")    //added a class to button, next see line 56
    .text("remove")
    .attr("data-index", i); // added custom data attribute so let click event know which item to remove when clicked. see line 67

    remove.append(btn);

    li.addClass("cart-item"); // add this and then style it in the css

    //now we need to append these to our list item: can search append in the jQuery docs to find out how in jQuery:
    // .append(content[, content]) , anything in square brackets is optional in jQuery.
    li.append(name, price, units, remove);
    cartList.append(li);
    }
}

/** EVENT LISTENERS: */
    // use jQuery to listen to click-events to the remove buttons:
$("#cart-list").on("click", "button.remove-item", function() { 
    var btn = $(this);   // jQuery will now see that we want to take this element, and wrap it in a jquery object.
    console.log(typeof btn.attr("data-index"));  // this is a vanilla js reference to that DOM node. //since attr is a data attribute, it returns a string, so we need to include "typeof"
    // because we are dynamically creating the buttons, so we have to use "event delegation" because the buttons dont exist yet technically. browser reads Event Listeners First!
    // jQuery Docs: .on(events[, selectior] [, data] ,handler)  So, event and handler are required and selector and data are optional for .on() click events.
    // have to use $(#cart-list)  instead of  $("button.remove-item")  since we cant use our button yet (line 58).
    cartItems.splice(parseInt(btn.attr("data-index"), 10), 1);  // <--- FORGOT second arguments, 1 to only delete one item, we also need to refresh the dom with our new data: next line:
    renderCartList();
});



/** INIT APP */
//  you dont see the changes until  you call renderCartList
renderCartList();
