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

//Add Zeros 
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//! Set Background and Greeting 
function setBgGree() {
    let today = new Date(),
    hour = today.getHours();

    if (hour < 12) {
        //Morning
        document.body.style.backgroundImage = "url('../img/morning.jpeg')";
        greeting.textContent = 'Good Morning';
    } else if (hour < 18){
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
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    }else {
        name.textContent = localStorage.getItem('name');
    }
}

//! Set Name
function setName(e) {
    if(e.type === 'keypress') {
        //Make sure enter is pressed 
        if (e.wich == 13 || e.keycode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();    
        }
    }else {
        localStorage.setItem('name', e.target.innerText);
    }
}



//! Get focus
function getfocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';

    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

function setFocus(e) {
    if(e.type === 'keypress') {
        //Make sure enter is pressed 
        if (e.wich == 13 || e.keycode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();    
        }
    }else {
        localStorage.setItem('focus', e.target.innerText);
    }
}


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


//!Run
showTime();
setBgGree();
getName();
getfocus();