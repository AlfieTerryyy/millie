// script.js
const monkey = document.getElementById('monkey');
const monkeyImg = document.getElementById('monkeyImg');
const monkeySound = document.getElementById('monkeySound');

// Make the monkey follow the cursor
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  monkey.style.left = mouseX - 50 + 'px'; // Center the monkey at the cursor
  monkey.style.top = mouseY - 50 + 'px';
  monkey.classList.add('follow-cursor');
});

// Make the monkey react to clicks
monkey.addEventListener('click', () => {
  monkey.classList.add('clicked');
  monkeyImg.src = './pets/assets/images/monkey-happy.png'; // Change image to happy monkey
  monkeySound.play(); // Play sound when clicked
  setTimeout(() => {
    monkey.classList.remove('clicked');
    monkeyImg.src = './pets/assets/images/monkey-idle.png'; // Return to idle image after animation
  }, 500);
});

// Make the monkey give a random action every few seconds
setInterval(() => {
  const actions = ['jump', 'dance', 'eat'];
  const randomAction = actions[Math.floor(Math.random() * actions.length)];
  
  if (randomAction === 'jump') {
    monkey.classList.add('clicked'); // Make it jump
    monkeyImg.src = './pets/assets/images/monkey-jumping.png';
    setTimeout(() => {
      monkey.classList.remove('clicked');
      monkeyImg.src = './pets/assets/images/monkey-idle.png'; // Back to idle after jump
    }, 500);
  } else if (randomAction === 'dance') {
    monkeyImg.src = './pets/assets/images/monkey-dancing.gif'; // Dancing monkey animation
    setTimeout(() => {
      monkeyImg.src = './pets/assets/images/monkey-idle.png'; // Back to idle after dance
    }, 1000);
  } else if (randomAction === 'eat') {
    monkeyImg.src = './pets/assets/images/monkey-eating.gif'; // Monkey eating animation
    setTimeout(() => {
      monkeyImg.src = './pets/assets/images/monkey-idle.png'; // Back to idle after eating
    }, 1000);
  }
}, 3000);
