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
})
// -----------------------------------------------------