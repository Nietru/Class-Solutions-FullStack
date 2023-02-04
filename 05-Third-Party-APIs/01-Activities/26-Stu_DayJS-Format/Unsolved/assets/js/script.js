// Use Day.js to format the date and assign to the declared variable.

// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?

var gradDate = dayjs('2023-06-21').format('MMM D, YYYY');
$('#1a').text(gradDate);

// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)

var weekDay = dayjs('01-01-2027', 'M-D-YYYY').format('dddd'); // the 'M-D-YYYY' part is passing through which format we are using, but you dont have to include that.

// TODO: 3. What is the current time in the format: hours:minutes:seconds

var time = dayjs().format('hh:mm:ss');  // dayjs() gives current time.
$('#3a').text(time);

// TODO: 4. What is the current Unix timestamp?
    // unix is common in coding, to keep things with time uniform.
var unix = dayjs().unix();  // unix is how many seconds have passes since 01-01-1970
$('#4a').text(unix);

// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
    // converts unix to normal/more readable time format:
var unixFormat = dayjs.unix(1318781876).format('MMM D, YYYY, hh:mm:ss a');
$('#5a').text(unixFormat);

// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)

    //dayjs object for May 4, 2027
var targetDay = dayjs('2027-05-04'); // this would also work in the format '05-04-2027'

    // dayjs object for today
var today = dayjs();    // dayjs() does current day. it always does the current if you dont put anything in the parenthesis.

    // number of days btwn targetDay and today:
var days = targetDay.diff(today, 'days');   // asking for the result to be in 'days'
$('#6a').text(days);

