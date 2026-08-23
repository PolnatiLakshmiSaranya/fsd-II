const express=require('express');
const app=express();
const PORT=3000;

app.use(express.json());

app.get('/', (req,res)=>{
    res.json({
        message: "Welcome to College Course API!",
        status: "Active",
        department:"AIML",
        timestamp: new Date()
    });
});

app.get('/courses',(req,res)=>{
    const courses=[
        {
            id: 1,
            name: "Data Science",
            duration: "5 months"
        },
        {
            id: 2,
            name: "Machine Learning",
            duration: "4 months"
        },
        {
            id: 3,
            name: "Robotics",
            duration: "6 months"
        }
    ];
    res.json(courses);
});

app.get('/course/:id',(req,res)=>{
    const courseId=req.params.id;
    res.json({
        requestedCourseId: courseId,
        courseName: "AIML",
        department: "AI",
        duration: "4 Months",
        available: true,
        topics:[
            "Python","ML","DL","NLP"
        ]
    });
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});