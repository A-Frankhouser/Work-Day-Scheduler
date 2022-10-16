
// Set Up Live Timer------------------------------------
function update() {
    $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(update, 1000);
// -----------------------------------------------------



// Container-----------------------------
var containerElement = $('div');
// --------------------------------------



// ----------------------------------------------------------
var times = ["9", "10", '11', '12', '1', '2', '3', '4', '5'];
// ----------------------------------------------------------


//  Add a div for each work day hour
for ( var i = 0; i < times.length; i++) {

        // Time Block Div
    var timeBlockElement = $('<div>');
    timeBlockElement.addClass('row');
    
        // Hour
    var timeHour = $('<p>');
        timeHour.addClass('hour')
        timeHour.text(times[i])
        
        // What is in your schedule
    var inputSchedule = $('<span>');
        inputSchedule.addClass(' textarea')
        inputSchedule.attr('data-number', times[i])
        inputSchedule.text('hello')

        // Save Button
    var saveButton = $('<button>');
        saveButton.addClass('saveBtn saveBtn i:hover')
    
        // Appending
    containerElement.append(timeBlockElement)
    timeBlockElement.append(timeHour)
    timeBlockElement.append(inputSchedule)
    timeBlockElement.append(saveButton)
}


