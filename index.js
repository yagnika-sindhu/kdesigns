// function weekday() {
//   var d = new Date().getDay();
//   var hours = ["Closed",          // Sunday
//              "7 AM to 5 PM",    // Monday
//              "8 AM to 5 PM",    // Tuesday
//              "9 AM to 5 PM",    // Wednesday
//              "8 AM to 5 PM",    // Thursday
//              "9 AM to 2 PM",    // Friday
//              "10 AM to 2 PM"];  // Saturday
// var todaysHours =hours[d];
//   document.getElementById("day-"+d).classList.add('opening-day');    
// }

$(document).ready(function() {
    $('.opening-hours tr').eq(new Date().getDay()).addClass('today');
    });








