// Default monkey stats
let monkeyStats = {
    name: "Unnamed",
    hunger: 100,
    happiness: 100,
    cleanliness: 100,
};

// DOM Elements
const monkeyImg = document.getElementById("monkeyImg");
const monkeyNameElem = document.getElementById("monkeyName");
const hungerElem = document.getElementById("hunger");
const happinessElem = document.getElementById("happiness");
const cleanlinessElem = document.getElementById("cleanliness");
const nameInput = document.getElementById("nameInput");
const saveNameBtn = document.getElementById("saveNameBtn");

// Buttons
const feedBtn = document.getElementById("feedBtn");
const playBtn = document.getElementById("playBtn");
const cleanBtn = document.getElementById("cleanBtn");

// Load saved data
if (localStorage.getItem("monkeyStats")) {
    monkeyStats = JSON.parse(localStorage.getItem("monkeyStats"));
    updateUI();
}

// Save stats to localStorage
function saveStats() {
    localStorage.setItem("monkeyStats", JSON.stringify(monkeyStats));
}

// Update the UI
function updateUI() {
    monkeyNameElem.textContent = monkeyStats.name;
    hungerElem.textContent = monkeyStats.hunger;
    happinessElem.textContent = monkeyStats.happiness;
    cleanlinessElem.textContent = monkeyStats.cleanliness;
}

// Event: Save Name
saveNameBtn.addEventListener("click", () => {
    const newName = nameInput.value.trim();
    if (newName) {
        monkeyStats.name = newName;
        updateUI();
        saveStats();
        alert("Monkey's name saved!");
    }
});

// Event: Feed
feedBtn.addEventListener("click", () => {
    monkeyStats.hunger = Math.min(100, monkeyStats.hunger + 10);
    updateUI();
    saveStats();
    monkeyImg.src = "assets/images/monkey-eating.gif";
    setTimeout(() => (monkeyImg.src = "assets/images/monkey-idle.png"), 1000);
});

// Event: Play
playBtn.addEventListener("click", () => {
    monkeyStats.happiness = Math.min(100, monkeyStats.happiness + 10);
    updateUI();
    saveStats();
    monkeyImg.src = "assets/images/monkey-dancing.gif";
    setTimeout(() => (monkeyImg.src = "assets/images/monkey-idle.png"), 1000);
});

// Event: Clean
cleanBtn.addEventListener("click", () => {
    monkeyStats.cleanliness = Math.min(100, monkeyStats.cleanliness + 10);
    updateUI();
    saveStats();
    monkeyImg.src = "assets/images/monkey-happy.png";
    setTimeout(() => (monkeyImg.src = "assets/images/monkey-idle.png"), 1000);
});

// Decrease stats over time
setInterval(() => {
    monkeyStats.hunger = Math.max(0, monkeyStats.hunger - 1);
    monkeyStats.happiness = Math.max(0, monkeyStats.happiness - 1);
    monkeyStats.cleanliness = Math.max(0, monkeyStats.cleanliness - 1);
    updateUI();
    saveStats();
}, 5000); // Decrease every 5 seconds
