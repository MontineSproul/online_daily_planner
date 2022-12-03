// variable to create date
var todaysDate = document.querySelector('#todayIs');

// function using moment to display current date
var displayTime = function() {
    var currentHr = moment().hours();
    var hours = document.querySelectorAll('.hour');
    var elements = document.querySelectorAll('.description'); 
    // var elements = element.length ++;
    todayIs.textContent = "Today is: " + (moment().format('LLLL'));
    // elements.forEach(changeColor);
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
// console.log(elements);
// console.log(currentHr);

}
displayTime();

setInterval(displayTime, 60000);


// if time === current time then display color x




//if time has past display color y

//if time is in the future display color z

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
