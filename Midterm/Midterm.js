// 1. Dynamic Greeting
// Get current time on user's device
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
header.textContent = `${greeting}, welcome to my Home Page!`;

// 2. Dark Mode Toggle
// Create new button
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

// 3. Random Motivational Quote
const quotes = [
  "“You have power over your mind - not outside events. Realize this, and you will find strength.” ― Marcus Aurelius, Meditations",
  "“All we have to decide is what to do with the time that is given us.” ― J.R.R. Tolkien",
  "“However vast the darkness, we must supply our own light.” ― Stanley Kubrick",
  "“Go inward, so that you can go onward and then upward.” ― Pharrell Williams",
  "“Just start by creating your day. Then create your life.” ― Prince",
  "“Do not wait to strike till the iron is hot; but make it hot by striking.” ― William Butler Yeats",
  "“Creativity is intelligence having fun.” ― Albert Einstein",
  "“The best way to predict the future is to invent it.” ― Alan Kay",
  "“Success is the sum of small efforts, repeated day in and day out.” ― Robert Collier",
  "“Don’t watch the clock; do what it does. Keep going.” ― Sam Levenson",
  "“Dream big. Start small. Act now.” ― Robin Sharma"
];

// Select DOM elements
const quoteDisplay = document.getElementById('quote-display');
const newQuoteBtn = document.getElementById('new-quote-btn');

// Function to display a random quote
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
}

// Display a random quote on page load
displayRandomQuote();

// Display a new random quote when button is clicked
newQuoteBtn.addEventListener('click', displayRandomQuote);
