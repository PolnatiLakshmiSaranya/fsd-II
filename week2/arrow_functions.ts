function calculateTotalMarks(math: number, science: number): number{
    return math + science;
}

const calculateTotalMarksArrow = (math: number, science: number): number => {
    return math + science;
};

const getStudentMessage =(name: string): string =>`Welcome ${name}! Best of luck for your exams.`;

const mathMarks: number = 88;
const scienceMarks: number = 92;
console.log(getStudentMessage("Saranya"));

const total1=calculateTotalMarks(mathMarks, scienceMarks);
console.log(`Total Marks (Traditional): ${total1}`);

const total2=calculateTotalMarksArrow(mathMarks, scienceMarks);
console.log(`Total Marks (Arrow): ${total2}`);