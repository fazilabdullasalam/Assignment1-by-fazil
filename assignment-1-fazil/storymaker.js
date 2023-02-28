/* Global variables
-------------------------------------------------- */

// Buttons
var noun1Button = document.getElementById("noun1");
var selectedNoun1 = document.getElementById("selectedNoun1");
var verbButton = document.getElementById("verb");
var selectedVerb = document.getElementById("selectedVerb");
var adjectiveButton = document.getElementById("adjective");
var selectedAdjective = document.getElementById("selectedAdjective");
var noun2Button = document.getElementById("noun2");
var selectedNoun2 = document.getElementById("selectedNoun2");
var settingButton = document.getElementById("setting");
var selectedSetting = document.getElementById("selectedSetting");
var viewSentence = document.getElementById("viewSentence");
var randomSentence = document.getElementById("randomSentence");
var displaySentence = document.getElementById("displaySentence");

// Word lists
var nouns1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher"];
var verbs = ["sat on", "ate", "danced with", "saw", "doesn't like"];
var adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a bumpy"];
var nouns2 = ["goat", "monkey", "fish", "cow", "horse"];
var settings = ["on the moon", "in my spaghetti", "in a hole", "under the bed", "in a tree"];

// Variables to store selected word/phrase
var selectedWords = [];

/* Functions
-------------------------------------------------- */

// Set the noun
function setNoun1() {
var index = Math.floor(Math.random() * nouns1.length);
selectedNoun1.innerHTML = nouns1[index];
selectedWords[0] = nouns1[index];
}

// Set the verb
function setVerb() {
var index = Math.floor(Math.random() * verbs.length);
selectedVerb.innerHTML = verbs[index];
selectedWords[1] = verbs[index];
}

// Set the adjective
function setAdjective() {
var index = Math.floor(Math.random() * adjectives.length);
selectedAdjective.innerHTML = adjectives[index];
selectedWords[2] = adjectives[index];
}

// Set the second noun
function setNoun2() {
var index = Math.floor(Math.random() * nouns2.length);
selectedNoun2.innerHTML = nouns2[index];
selectedWords[3] = nouns2[index];
}

// Set the setting for the story
function setSetting() {
var index = Math.floor(Math.random() * settings.length);
selectedSetting.innerHTML = settings[index];
selectedWords[4] = settings[index];
}

// Output the completed sentence to the display paragraph
function outputCompletedSentence() {
displaySentence.innerHTML = selectedWords.join(" ") + ".";
}

// Output the completed random sentence to the display paragraph
function outputRandomSentence() {
var randomWords = [];
for (var i = 0; i < selectedWords.length; i++) {
var index = Math.floor(Math.random() * eval(selectedWords[i] + "s.length"));
randomWords.push(eval(selectedWords[i] + "s[index]"));
}
displaySentence.innerHTML = randomWords.join(" ") + ".";
}

// Random number function for 'Surprise Me' button
function getRandomNumber(max) {
return Math.floor(Math.random() * max);
}

/* Event handlers
-------------------------------------------------- */

// Buttons to pick words/phrases
noun1Button.addEventListener("click", setNoun1);
verbButton.addEventListener("click", setVerb);
adjectiveButton.addEventListener("click", setAdjective);
noun2Button.addEventListener("click", setNoun2);
settingButton.addEventListener("click", setSetting);

// Button to view completed sentence
viewSentence.addEventListener("click", outputCompletedSentence);

// Button to view completed sentence
var viewSentenceButton = document.getElementById("viewSentence");

// Button to view random sentence
viewRandom.addEventListener("click", outputRandomSentence);
var randomSentenceButton = document.getElementById("randomSentence");
