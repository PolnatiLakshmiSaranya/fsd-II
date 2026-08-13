"use strict";
function greet(name) {
    return `Hola, ${name}!`;
}
function getMarks(marks = 35) {
    return marks;
}
function sendAlert(phoneNumber, message) {
    console.log(`Sending SMS to ${phoneNumber}...`);
    if (message)
        console.log(`Content: ${message}`);
}
function calculateTotalRatings(...rating) {
    return rating.reduce((total, current) => total + current, 0);
}
console.log(greet("Saranya"));
console.log(getMarks());
console.log(getMarks(98));
sendAlert(9182736450);
sendAlert(9086753241, "Cyclone alert, take shelter!");
const total = calculateTotalRatings(4, 4.5, 3, 2, 1, 3.5);
console.log(`Total Score: ${total}`);
