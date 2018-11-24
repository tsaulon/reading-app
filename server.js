const HTTP_PORT = process.env.PORT || 3000;
const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
    //  Serve React Application here.
});

app.listen(HTTP_PORT, () => {
    console.log(`Server started! Listening on port: ${HTTP_PORT}`);
});