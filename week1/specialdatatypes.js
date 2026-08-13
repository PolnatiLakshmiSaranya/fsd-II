"use strict";
let flexibleValue = 27;
flexibleValue = "My name is Saranya";
console.log(flexibleValue);
flexibleValue = true;
console.log(flexibleValue);
let mysteryValue = "Hello, Everyone!";
if (typeof mysteryValue === "string") {
    console.log("The length of the string is: " + mysteryValue.length);
}
function logNotification(message) {
    console.log("ALERT: " + message);
}
logNotification("Environment Setup complete!");
