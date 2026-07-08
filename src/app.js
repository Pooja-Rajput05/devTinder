const express = require("express");
const {connectDB} = require("./config/database");
const app = express();
const User = require("./models/user");


app.post("/signup", async (req, res) => {
   const user = new User({
      firstName: "Sundar",
      lastName: "Pichai",
      emailId: "sundar@pichai.com",
      password: "xyz@0000",
   });

   try{
      await user.save();
      res.send("User added sucessfully");
   }catch(err){
      res.status(400).send("Error saving the user:" + err.message);
   }
   
})

connectDB()
 .then(() => {
    console.log("database connection established");
    app.listen(7777, () => {
        console.log("server is listening...");
    });
 })
 .catch(err=>{
    console.error("database cannot be connected");
 });
