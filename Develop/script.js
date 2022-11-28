// variable to create date
var todaysDate = document.querySelector('#todayIs')
// function using moment to display current date
setInterval(function() {
    todayIs.textContent = "Today is: " + moment().format('dddd, MMMM Do, YYYY')
})


// if time === current time then display color x


//if time has past display color y

//if time is in the future display color z

//local storage 


var oneEvent= localStorage.getItem('task6');
var EventAtOne = document.getElementById('task6');
EventAtOne.val(OneEvent);
document.addEventListener("click", function(oneEvent){});
Event.preventDefault();
// document.getElementById("one").addEventListener("click", oneEvent);
