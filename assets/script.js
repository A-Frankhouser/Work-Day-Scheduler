// Set Up Live Timer------------------------------------
function update() {
    $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(update, 1000);
// -----------------------------------------------------


// Setting items to Local Storage-----------------------
$(document).ready(function() {
    // Save schedule
    $(".saveBtn").on("click", function()  {
    
        // Description Values
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        
        // Saving to Local Storage
        localStorage.setItem(time,text);
    })
// -----------------------------------------------------

// Tracks Time
function timeTracker() {
    var currentTime = moment().hour();

    $(".time-block").each(function () {
        var hourTime = parseInt($(this).attr("id").split("hour")[1]);


        // Will add class based on current time
        if (hourTime < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");

        } else if (hourTime === currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");

        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}

// Getting Items from local storage------------------------------
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
$("#hour18 .description").val(localStorage.getItem("hour18"));
// ---------------------------------------------------------------
    timeTracker();
})