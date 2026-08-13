"use strict";
function calculateTotalMarks(math, science) {
    return math + science;
}
const calculateTotalMarksArrow = (math, science) => {
    return math + science;
};
const getStudentMessage = (name) => `Welcome ${name}! Best of luck for your exams.`;
const mathMarks = 88;
const scienceMarks = 92;
console.log(getStudentMessage("Saranya"));
const total1 = calculateTotalMarks(mathMarks, scienceMarks);
console.log(`Total Marks (Traditional): ${total1}`);
const total2 = calculateTotalMarksArrow(mathMarks, scienceMarks);
console.log(`Total Marks (Arrow): ${total2}`);
