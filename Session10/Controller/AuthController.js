const AuthService = require("../Services/AuthService");

async function register(req, res) {
    /**POSTMAN is sending this body
     * {
        "name": "Utkarsh Sharma2",
        "email": "utkarsh.sharma2@example.com",
        "password": "asdf1234",
        "age": 28,
        "gender": "Male"
        }
     */
    const { name, email, password, age, gender } = req.body;

    try {
        const response = await AuthService.register(name, email, password, age, gender);
        
        if(response.message || response.error) {
            return res.status(500).json({
                message: "Error registering user",
                error: response,
            });
        } else {
            return res.status(201).json({
                message: "User registered successfully",
                data: response,
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Error registering user",
            error: error.message,
        });
    }

}

async function login(req, res) {
    const { email, password } = req.body;
    try {
        const response = await AuthService.login(email, password);

        if(response.error) {
            return res.status(500).json({
                message: "Error logging in",
                error: response,
            });
        } else {
            const token = response?.token;
            if(token) {
                res.cookie("token", token, { httpOnly: true, secure: true, maxAge: 10000 });
            }
            return res.status(200).json({
                message: "User logged in successfully",
                data: response,
            });
        }

    } catch (error) {
        return res.status(500).json({
            message: "Error logging in",
            error: error.message,
        });
    }
}

module.exports = { register, login };