// variable to create date
var todaysDate = document.querySelector('#todayIs')
// function using moment to display current date
setInterval(function() {
    todayIs.textContent = "Today is: " + moment().format('dddd, MMMM Do, YYYY')
})


// if time === current time then display color x


//if time has past display color y

//if time is in the future display color z

