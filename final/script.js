// Dynamic Greeting
//Get current time on user's device
const header = document.querySelector('header h1');
const now = new Date();
const hours = now.getHours();
let greeting = "";

//Decide if it is morning, afternoon, or evening
if (hours < 12) {
  greeting = "Good morning";
} else if (hours < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

//Assign appropriate greeting
header.textContent = `${greeting}, welcome to Tyler Ross' Portfolio!`;

// Dark Mode Toggle
//Create new button
const darkModeBtn = document.createElement('button');
darkModeBtn.textContent = "Toggle Dark Mode";
darkModeBtn.id = "darkModeBtn";
darkModeBtn.style.position = "fixed";
darkModeBtn.style.bottom = "60px";
darkModeBtn.style.right = "20px";
darkModeBtn.style.padding = "0.5em 1em";
darkModeBtn.style.cursor = "pointer";
darkModeBtn.style.zIndex = "1000";
document.body.appendChild(darkModeBtn);

//When button is clicked, toggle dark-mode class
//Triggers CSS rules defined under body.dark-mode
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Create scroll-to-top button
const scrollBtn = document.createElement('button');
scrollBtn.textContent = "↑ Top";
scrollBtn.id = "scrollTopBtn";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "0.5em 1em";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "1000";
document.body.appendChild(scrollBtn);

//Scroll to top on click
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
