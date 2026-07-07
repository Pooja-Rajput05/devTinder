const express = require("express");

const app = express();

//response handler
app.use("/test", (req, res) => {
    res.send("hello");
})

app.use("/hello", (req, res) => {
    res.send("hello wolrd");
})

app.listen(7777, () => {
    console.log("server is listening...");
});