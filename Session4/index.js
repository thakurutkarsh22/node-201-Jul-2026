// nPM - node package manager.

const express = require("express");
const server = express();
const UserActivityRouter = require("./Routers/UserActivity.Router");
const HomeRouter = require("./Routers/Home.Router");
const PORT = 8091;

// Home Activity
// (req, res) => { } - request handler 

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


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} EXPRESS`);
});

