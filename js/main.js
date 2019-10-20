//! DOM elements
const time = document.getElementById('time'), 
      greeting = document.getElementById('greeting'),
      name = document.getElementById('name'),
      focus = document.getElementById('focus');

//! Show the time
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();


//!Set AM or PM
const amPm = hour >= 12 ? 'PM' : 'AM';

//! 12 hr Format
hour = hour % 12 || 12;

//! Output Time
time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

setTimeout(showTime, 1000);
}

//Add Zeris 
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//! Set Background and Greeting 
function setBgGree() {
    let today = new Date(),
    hour = today.getHours();

    if (hour > 1 && hour >12) {
        //Morning
        document.body.style.backgroundImage = "url('../img/morning.jpeg')";
        greeting.textContent = 'Good Morning';
    } else if (hour >= 1 && hour < 18){
        //Afternoon
        document.body.style.backgroundImage = "url('../img/afternoon.jpeg')";
    } else {
        //Evening
        document.body.style.backgroundImage = "url('../img/night.jpeg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    
    }
}
//! Get Name
/*function getName()    //! Here is where I stopped ...*/

//!Run
showTime();
setBgGree();