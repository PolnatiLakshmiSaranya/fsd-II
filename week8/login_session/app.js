const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
  secret: "my-secret-key",
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

const auth = (req, res, next) => {
  if (req.session.isLoggedIn) next();
  else res.redirect("/login");
};

app.get("/login", (req, res) => {
  res.render("login", { error: null });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "123") {
    req.session.isLoggedIn = true;
    req.session.username = username;
    res.cookie("lastVisit", new Date().toLocaleTimeString());
    res.redirect("/dashboard");
  } else {
    res.render("login", { error: "Invalid Credentials" });
  }
});

app.get("/dashboard", auth, (req, res) => {
  res.render("dashboard", {
    user: req.session.username,
    lastVisit: req.cookies.lastVisit || "First Time"
  });
});

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.redirect("/login");
  });
});

app.listen(3000, () => console.log("Server: http://localhost:3000/login"));