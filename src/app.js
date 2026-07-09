const express = require("express");
const {connectDB} = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());   //express middleware to convert json int js object

app.post("/signup", async (req, res) => {
   //creating a new instance of user model
   const user = new User(req.body);

   try{
      await user.save();
      res.send("User added sucessfully");
   }catch(err){
      res.status(400).send("Error saving the user:" + err.message);
   }
   
})

//user api to get one user
app.get("/user", async (req, res) => {
   const userEmail = req.body.emailId;
   try{
      //if there were 2 users with same properties and we want to findone
      const users = await User.findOne({emailId : userEmail});

      //if user is invalid
      if(!users){
         res.status(404).send("user not found");
      }
      else{
         res.send(users);
      }
      //to find the user which has emailid 
      // const users = await User.find({emailId: userEmail});
      //if user is not found or invalid
      // if(users.length === 0){
      //    res.status(404).send("user not found");
      // }
      // else{
      //    res.send(users);
      // }
   }
   catch(err){
      res.status(400).send("something went wrong");
   }
})

//feed api
app.get("/feed", async (req, res) => {
   try{
      const users = await User.find({});
   res.send(users);
   }
   catch(err){
      res.status(400).send("something went wrong");
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
