const express = require("express");

const app = express();

//response handler
app.use("/test", (req, res) => {
    res.send("hello from the server");
})

app.use("/hello", (req, res) => {
    console.log("hello world");
})

app.listen(3000, () => {
    console.log("server is listening...");
});