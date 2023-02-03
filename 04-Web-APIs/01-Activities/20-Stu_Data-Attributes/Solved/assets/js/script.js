var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
    // started by creating the variable 'element' which is our event target.
  var element = event.target;

  if (element.matches(".box")) {    // if element is a box class, we will get the current data-state
    var state = element.getAttribute("data-state");

    // Use an if statement to conditionally render the number on the card
    if (state === "hidden") {
      // If the card is clicked while the state is "hidden", we set .textContent to the number 
      element.textContent = element.dataset.number;  // lines 13-18 in the html file.
      // Using the dataset property, we change the state to visible because the user can now see the number
      element.dataset.state = "visible";
   
    } else {
      // 'Hide' the number by setting .textContent to an empty string
      element.textContent= "";
      // Use .setAttribute() method
      element.setAttribute("data-state", "hidden")
     
    }  
  }
  
});
