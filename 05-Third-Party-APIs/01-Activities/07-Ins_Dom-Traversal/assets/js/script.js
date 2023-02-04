// Highlight which elements in the DOM are the children of the parent element
// Uncomment the following two lines to see the which elements are the children to the #top
$('#top').children().css('color', 'yellow'); //.children only does the direct children, one level down.
console.log($('#top').children());

// Uncomment the following line to see the which element is the first direct child of the <main>
$('#top').children().eq(0).addClass('boxy'); //eq function lets you grab a specific child: index 0, added a boxy class to the header.

// Uncomment the following line to add a list item to the list
$('#top').children().eq(4).append($('<li>Classmates</li>')); //index 4 would be the fifth child of #top.
//appending a list item ^ "Classmates"

// Uncomment the following line to style the list items
$('#top').children('ul').children().addClass('bg-primary text-dark mb-3 p-3').css('border-radius', '.4rem');
 // .css is used to make new inline stying that does not already exist anywhere.
 // .addclass is used to call styling that already exists/defined in the jass.css file, more practical to use.