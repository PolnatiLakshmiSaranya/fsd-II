const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'User Registration',
        error: null,
        success: null,
        user: null
    });
});

app.post('/register', (req, res) => {

    const username = req.body.username.trim();
    const email = req.body.email.trim();
    const password = req.body.password;
    const age = Number(req.body.age);

    console.log("Form submitted");
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Age:", age);

    let error = null;

    if (username.length < 3) {
        error = "Username must be at least 3 characters long";
    } else if (!email.includes("@")) {
        error = "Please enter a valid email";
    } else if (password.length < 6) {
        error = "Password must be at least 6 characters long";
    } else if (age < 18) {
        error = "Age must be at least 18 years";
    }

    if (error) {
        res.render('index', {
            title: 'Registration Failed',
            error: error,
            success: null,
            user: null
        });
    } else {
        res.render('index', {
            title: 'Registration Successful',
            error: null,
            success: 'Account created successfully!',
            user: username
        });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);

    // Keep server alive
    setInterval(() => {}, 1000);
});