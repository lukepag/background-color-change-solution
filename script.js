// Get the button element
const button = document.getElementById('colorButton');

// List of colors to choose from
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

// Add a click event to the button
button.addEventListener('click', () => {
  // Pick a random color
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  // Change the background color
  document.body.style.backgroundColor = randomColor;
});
