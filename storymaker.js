// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Btn = document.getElementById("noun1");
const verbBtn = document.getElementById("verb");
const adjectiveBtn = document.getElementById("adjective");
const noun2Btn = document.getElementById("noun2");
const settingBtn = document.getElementById("setting");

// Constants for p tag to display query selectors
const noun1Display = document.getElementById("choosenNoun1");
const verbDisplay = document.getElementById("choosenVerb");
const adjectiveDisplay = document.getElementById("choosenAdjective");
const noun2Display = document.getElementById("choosenNoun2");
const settingDisplay = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const playbackBtn = document.getElementById("playback");
const randomBtn = document.getElementById("random");
const storyDisplay = document.getElementById("story");

// Variables for pre-defined arrays
const nouns1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher" , "The elephant", "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like" , "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking" , "a fat"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug","worm"];
const settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass","in my shoes"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    noun1Display.textContent = nouns1[noun1Count];
    noun1Count = (noun1Count + 1) % nouns1.length;
}

function verb_on_click() {
    verbDisplay.textContent = verbs[verbCount];
    verbCount = (verbCount + 1) % verbs.length;
}

function adjective_on_click() {
    adjectiveDisplay.textContent = adjectives[adjectiveCount];
    adjectiveCount = (adjectiveCount + 1) % adjectives.length;
}

function noun2_on_click() {
    noun2Display.textContent = nouns2[noun2Count];
    noun2Count = (noun2Count + 1) % nouns2.length;
}

function setting_on_click() {
    settingDisplay.textContent = settings[settingCount];
    settingCount = (settingCount + 1) % settings.length;
}

// Concatenate the user story and display
function playback_on_click() {
    storyDisplay.textContent = `${noun1Display.textContent} ${verbDisplay.textContent} ${adjectiveDisplay.textContent} ${noun2Display.textContent} in ${settingDisplay.textContent}.`;
}

// Grab random element from arrays, concatenate and display
function random_on_click() {
    const randomNoun1 = getRandomElement(nouns1);
    const randomVerb = getRandomElement(verbs);
    const randomAdjective = getRandomElement(adjectives);
    const randomNoun2 = getRandomElement(nouns2);
    const randomSetting = getRandomElement(settings);

    storyDisplay.textContent = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} in ${randomSetting}.`;
}

// Function to get a random element from an array
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

/* Event Listeners
-------------------------------------------------- */
