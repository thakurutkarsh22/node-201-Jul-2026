const users = require("../userData");
const SECRET_SERVER_PASSWORD = "asdf1234";

// 1. get all users - GET - /api/v1/users/getAllUsers
function getAllUsers (req, res) {
    const allUsers = users;
    res.status(201).json(allUsers);
}

// 2. get users by gender - GET - /api/v1/users/getUsersByGender

function getUsersByGender (req, res) {
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
}

// 3. get users by name - GET - /api/v1/users/getUserByName/:name
function getUserByName (req, res)  {
    const searchedName = req.params.name; // Priya

    const allUsers = users;

    const filteredUsers = allUsers.filter((user) => {
        if(user.name.toLowerCase() === searchedName.toLowerCase()) {
            return true;
        }
        return false;
    });

    res.json(filteredUsers);
}

module.exports = { getAllUsers, getUsersByGender, getUserByName };