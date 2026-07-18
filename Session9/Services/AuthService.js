require("dotenv").config();
const UserModel = require("../Models/Users.Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;


class AuthService {
    static async register(name, email, password, age, gender) {

        // 1. create the user object - business logic
        // 1.1. we should encrypt the password 
        const hashedPassword = await this.hashPassword(password);
        const userObject =  new UserModel({ name, email, password: hashedPassword, age, gender });
        
        // 2. talk to database - save the user object in Database
        try {
            const response = await userObject.save();
            return response;
        } catch (error) {
            return { message: "Error registering user", error: error.message };
        }
    }

    static async hashPassword(plainTextPassword) {
        const salt = 10; // how many rounds of hashing we want to do
        const hashedPassword = await bcrypt.hash(plainTextPassword, salt);
        return hashedPassword;
    }

    static async login(email, password) {
        // 1. get the user by email
        const userFromDatabase = await this.getUserByEmail(email);

        if(!userFromDatabase) {
            return { message: "User not found", error: "User not found" };
        } else {
            // 2. compare the password 
            const passwordFromDatabase = userFromDatabase.password; // $2b$10$za/hViECeo7p9Lhq/E1IJukduNfveI4PXZFjKhB7.9wtyonyaebjK

            const isPasswordValid = await bcrypt.compare(password, passwordFromDatabase); // true or false

            if(!isPasswordValid) {
                return { message: "Invalid password", error: "Invalid password" };
            } else {
                const payload = {
                    name: userFromDatabase.name,
                    email: userFromDatabase.email,
                    age: userFromDatabase.age,
                    gender: userFromDatabase.gender,
                }
                const jwtToken = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

                return { message: "User logged in successfully", data: userFromDatabase, token: jwtToken };
            }
        }

    }

    static async getUserByEmail(inputEmail) {
        try {
            const response = await UserModel.findOne({ email: inputEmail });
            return response;
        } catch (error) {
            return null;
        }
    }
}

module.exports = AuthService;