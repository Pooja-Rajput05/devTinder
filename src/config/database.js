const mongoose = require("mongoose");

const connectDB = async() => {
    await mongoose.connect(
        "mongodb+srv://backendProject_db:cRiFw2MT5fa8eab6@backendproject.x1f2tjr.mongodb.net/devTinder"
    );
}

module.exports = {
    connectDB,
};

