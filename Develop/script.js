// variable to create date
var todaysDate = document.querySelector('#todayIs');

// function using moment to display current date
var displayTime = function() {
    var currentHr = moment().hours();
    var hours = document.querySelectorAll('.hour');
    var elements = document.querySelectorAll('.description'); 
        //set's todays current date at the top of the page 
    todayIs.textContent = "Today is: " + (moment().format('LLLL'));
    //    for loop to run throught the different times of day and change the color
    for (let i = 0; i < elements.length; i++) {
    function changeColor(element, i) {
        var hourEl = hours[i];
        var hour = hourEl.dataset.hour;
        console.log(hour, currentHr);
         if (hour < currentHr) {
            element.classList.add("past");
            console.log("less than");
        }
        if (hour == currentHr) {
            element.classList.remove("past");
            element.classList.add("present");
        }
        if (hour > currentHr) {
            element.classList.remove("past");
            element.classList.remove("present");
            element.classList.add("future");
        }
    };
    changeColor(elements[i], i);
} 
}
displayTime();

setInterval(displayTime, 60000);




//local storage 


var oneEvent= localStorage.getItem('task6');
var eventAtOne = document.getElementById('task6');
document.addEventListener("click", function(){
    var key = document.getElementById('task6');
    var value = eventAtOne.val;
    localStorage.setItem(key, value);
    
});
// event.preventDefault();
// document.getElementById("one").addEventListener("click", oneEvent);
