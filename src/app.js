const express = require("express");

const app = express();

//response handler

app.use(
    "/user",
    (req, res, next) => {                          // known as middlewares
        //route hanlder 1
        console.log("handling the route user 1");
        // res.send("Response 1");
        next();
    },
    (req, res, next) => {                             //middlewares
        //route hanlder 2
        console.log("handling the route user 2");
        // res.send("Response 2");
        next();
    },
    (req, res, next) => {                            //middlewares
        //route hanlder 2
        console.log("handling the route user 3");
        // res.send("Response 3");
        next();
    },
    (req, res, next) => {                              //middlewares
        //route hanlder 2
        console.log("handling the route user 4");
        // res.send("Response 4");
        next();
    },
    (req, res, next) => {                             //route handler
        //route hanlder 2
        console.log("handling the route user 5");
        res.send("Response 5");
        next();
    },
);

// app.get("/user", (req, res)=> {
//     res.send({firstname: "pooja", lastname: "rajput"});
// })

// app.post("/user", (req, res)=> {
//     res.send("data successfully send to the DB");
// })

// app.delete("/user", (req, res) => {
//     res.send("data deleted successfully");
// })

// app.use("/test", (req, res) => {
//     res.send("hello");
// })

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