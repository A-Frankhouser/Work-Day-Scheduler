// Set Up Live Timer------------------------------------
function update() {
    $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(update, 1000);
// -----------------------------------------------------

// Timer Variables ---------------
var currentTime = moment().hours();
console.log(currentTime);
var pastTime = pastTime < currentTime;
var futureTime = futureTime > currentTime;

$('timeBlockElement').each(function() {
    var blockHour = parseInt(
        $(this)
        .attr('id')
        .split('-')[1]
    );

    // check if we've moved past this time
    if (blockHour < currentTime) {
        $(this).addClass('past');
    } else if (blockHour === currentTime) {
        $(this).removeClass('past');
        $(this).addClass('present');
    } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
    }
});




// Container-----------------------------
var containerElement = $('div');
// --------------------------------------


// ----------------------------------------------------------
var times = ["  9 AM", "10 AM", '11 AM', '12 PM', '  1 PM', '  2 PM', '  3 PM', '  4 PM', '  5 PM'];
// ----------------------------------------------------------


//  Add a div for each work day hour
// for ( var i = 0; i < times.length; i++) {

//         // Time Block Div
//     var timeBlockElement = $('<div>');
//     timeBlockElement.addClass('row');
//     timeBlockElement.addId('')
    
//         // Hour
//     var timeHour = $('<p>');
//         timeHour.addClass('hour')
//         timeHour.text(times[i])
        
//         // Event
//     var inputSchedule = $('<input>');
//         inputSchedule.attr('text')
//         inputSchedule.addClass('textarea');
//         inputSchedule.attr('data-number', times[i])
//         inputSchedule.css('width', '70%')
//         // inputSchedule.addId('hours').foreach('')

//         // Save Button
//     var saveButton = $('<button>');
//         saveButton.addClass('saveBtn saveBtn i:hover textarea');
//         saveButton.text('Remember')
    
//         // Appending
//     containerElement.append(timeBlockElement)
//     timeBlockElement.append(timeHour)
//     timeBlockElement.append(inputSchedule)
//     timeBlockElement.append(saveButton)
// }

// Event listener
$('saveButton').on('click', function () {
    console.log('hello');
})