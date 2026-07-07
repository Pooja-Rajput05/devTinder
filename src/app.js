const express = require("express");

const app = express();

//response handler

app.get("/user", (req, res)=> {
    res.send({firstname: "pooja", lastname: "rajput"});
})

app.post("/user", (req, res)=> {
    res.send("data successfully send to the DB");
})

app.delete("/user", (req, res) => {
    res.send("data deleted successfully");
})

app.use("/test", (req, res) => {
    res.send("hello");
})

// app.use("/hello/2",(req, res) => {
//     res.send("hello 2");
// })

// app.use("/hello", (req, res) => {
//     res.send("hello wolrd");
// })

// app.use("/", (req, res) => {
//     res.send("hello hello hello");
// })

app.listen(7777, () => {
    console.log("server is listening...");
});