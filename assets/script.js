// Set Up Live Timer------------------------------------
function update() {
    $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(update, 1000);
// -----------------------------------------------------

// Timer Variables ---------------
var currentTime = moment().hours();
console.log(currentTime);
//--------------------------------


