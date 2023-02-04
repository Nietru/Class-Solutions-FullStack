// Assemble: Create/select DOM elements
var rootEl = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.
$(rootEl).children('ul').children('li').css("background-color", "white");

// Select the llast `<ul>` or the third row.
// Long traversals can be segmented to provide better readability:
var rowThree = rootEl.children('ul').eq(2);  //index 2 of the uls from the html is the third ul.

// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning
rowThree.children().eq(0).text('O');
    //row nine and twelve could be chained together without a variable rowThree and gotten the same result.