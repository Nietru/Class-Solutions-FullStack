var alertButtonEl = $('#alert-btn');  // GIVING BUTTONS FROM HTML FILE, STYLE AND FUNCTIONALITY.
var themeButtonEl = $('#theme-btn');  // VANILLA JS EQUIVALENT WAS : DOCUMENT.QUERYSELECTOR
var lotteryButtonEl = $('#lottery-btn');
var lotteryNumberEl = $('#lottery-number');
var refreshButtonEl = $('#refresh-btn');

// light theme state
var isDark = true;

// Click event causes alert "Hello World"
// Vanilla JS equivalent: `addEventListener`
alertButtonEl.on('click', function () {   //  you can also use: alertButtononEl.click()(function () {
  alert('Hello World');
});

// Click event causes alert light theme toggle
themeButtonEl.on('click', function () {
  if (isDark) {
    $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
    isDark = !isDark;   // common way of toggling a boolean value
  } else {
    $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
    isDark = !isDark;
  }
});

// Click event causes random number
lotteryButtonEl.on('click', function () {
  var random = Math.floor(Math.random() * 100000000) + 10000000;
  console.log(random);
  lotteryNumberEl.text(random);
});

// Click event causes refresh
refreshButtonEl.on('click', function () {
  location.reload();  // location also means windows.location  and .reload() refreshes the page.
});
