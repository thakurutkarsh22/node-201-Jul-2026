// nPM - node package manager.

const express = require("express");
const users = require("./userData");
const server = express();
const PORT = 8091;


server.get("/", (req, res) => {
    // send keyword is not in nodejs 
    // behind the scenes uses res.write and res.end
    res.send("hwlo welcome to my website, express js")
});

server.get("/about", (req, res) => {
    res.send("about page express js");
});

server.get("/contact", (req, res) => {
    res.send("contact page express js");
});


server.get("/fitness", (req, res) => {
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

// that will give all the users - get all users 

server.get("/users", (req, res) => {
    const allUsers = users;
    res.json(allUsers);
})

// get user by gender by - QUERY params 
// example of query params - https://www.google.com/search?q=rohit


server.get("/users/getBygender", (req, res) => {
    const query = req.query; // { gender: 'male' } 
    const searchedGender = query.gender;
    const allUsers = users;

    const filteredUsers = allUsers.filter((user) => {
        if(user.gender.toLowerCase() === searchedGender.toLowerCase()) {
            return true;
        }
        return false;
    });

    res.json(filteredUsers);
})




// get user by name - URL PRAMAS 
// https://pokeapi.co/api/v2/pokemon/pikachu


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} EXPRESS`);
});

