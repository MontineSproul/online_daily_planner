// variable to create date
var todaysDate = document.querySelector('#todayIs');

// function using moment to display current date



setInterval(function() {
    var currentHr = moment().hours();
    var hour = document.querySelector('.hour').textContent;
    var elements = document.querySelectorAll('.description'); 
    // var elements = element.length ++;
    todayIs.textContent = "Today is: " + (moment().format('LLLL'));
    // elements.forEach(changeColor);
    for (let i = 0; i < elements.length; i++) {
    function changeColor() {
         if (hour < currentHr) {
            
            $(this).addClass("past");
            
        }
        if (hour === currentHr) {
            element.classList.remove("past");
            element.classList.add("present");
        }
        if (hour > currentHr) {
            element.classList.remove("past");
            element.classList.remove("present");
            element.classList.add("future");
        }
    };
} 
console.log(elements);
console.log(currentHr);
console.log(hour);
}, 5000);


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
