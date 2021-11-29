const express = require("express");
const { template } = require("handlebars");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000;

// statics path
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// using template engines instead of static pages
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

// routing
app.get("", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about")
});

app.get("/projects", (req, res) => {
    res.render("projects");
});

app.get("*", (req, res) => {
    res.render("404");
});


app.listen(port, () => {
    console.log(`listening to the port ${port}`);
});