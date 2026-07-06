// nPM - node package manager.

const express = require("express");
const server = express();
const UserActivityRouter = require("./Routers/UserActivity.Router");
const HomeRouter = require("./Routers/Home.Router");
const BlogsRouter = require("./Routers/Blogs.Router");
const { default: mongoose } = require("mongoose");
const PORT = 8091;



// universal middleware to parse the body of the request
server.use(express.json()); // it parses the req body


server.use("/", HomeRouter);

server.get("/fitness", (req, res, next) => {
    const payload = {
        name: "akash",
        age: 28,
        heigh: 160,
        shouldSleepEightHours : true,
        hobbies: ["gym", "running", "swimming"],
        address: {
            city: "Delhi",
            state: "Delhi",
            pincode: 110092
        }
    }

    // behnid the scenes it does  res.setHeader("Content-Type", "application/json");
    res.json(payload);
})


// User Activity
// /api/v1/users/getUserByName/:name - route, endpoint, api 

// use - get, post, put, delete, patch, every REQUESTio
server.use("/api/v1/users"  , UserActivityRouter);

// new funcationality to create, delete, edit the blogs 
server.use("/api/v1/blogs", BlogsRouter);


// Connect to mongoDB 
// read DB connection URL: "mongo_srv:<username>:<password>@<host>:<port>/<database>"
const URL = "mongodb://localhost:27017/";
const databaseName = "Crio-july-2026";

const fullURL = `${URL}${databaseName}`;

mongoose.connect(fullURL).then(() => {
    console.log("Connected to mongoDB");
}).catch((err) => {
    console.log("Error connecting to mongoDB", err);
});


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} EXPRESS`);
});

