// Use Day.js to format the following variables:

// I went to this website to see how to format the following code:  https://day.js.org/docs/en/display/format


// 1. What is today's date in the following format: Jan 1, 1999?
    // first we have to create a day object 'var today', that we will use in the rest of the code:
var today = dayjs();    // dayjs specifically means today/now in DayJS.
$('#1a').text(today.format('MMM D, YYYY')); // we are setting the text to 'today' variable, and formatting it.

// 2. What is the day of the week today?
var dayWeek = today.format('[Today is] dddd'); // the square brackets return a string. See in browser.
$('#2a').text(dayWeek);

// 3. Parse the following date, 11/3/2020, and convert it into the following format: Sunday, February 14 2010, 3:25:50 pm.
var reformatDate = dayjs('2020-11-03').format('dddd, MMMM D YYYY, h:mm:ss a'); // had to pass a date through the dayjs() function.
$('#3a').text(reformatDate);

// 4. I need to place my recycling bin on the curb on every odd week of the year for collection. Do I need to put out my recycling bin out this week?
// Dayjs' .diff() method does NOT include partial weeks in its calculation.
var beginningOfYear = dayjs('2022-01-01');  // we passed in the object for the first day of the year.
var weekNum = today.diff(beginningOfYear, 'week');  //used today and the diff method, gives you the difference in days, but we passed in 'week' so it gives us weeks.

// Check for odd week, then assign boolean to variable
var takeOut = weekNum % 2 === 1;    // '%' = mod which returns the remainer. testing to see if odd week. weekNum passes which week of the year it is.
$('#4a').text(takeOut + ", because it's currently week " + weekNum);
