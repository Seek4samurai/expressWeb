const express = require("express");
const app = express();
const port = 8000;

app.get("", (req, res) => {
    res.send("Welcome to my Page");
});

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
});