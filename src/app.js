const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");

// statics path
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

// routing
app.get("", (req, res) => {
    res.send("");
});

app.get("/about", (req, res) => {
    res.send("About page");
});

app.get("/porjects", (req, res) => {
    res.send("Projects");
});

app.get("*", (req, res) => {
    res.send("404 error page...");
});


app.listen(port, () => {
    console.log(`listening to the port ${port}`);
});