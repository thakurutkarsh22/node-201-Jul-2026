const httpModule = require("node:http");
const PORT = 8091;

// create a server 

const server = httpModule.createServer( (req, res) => {
    const url = req.url;
    if(url === "/") {

        res.write("welocme to my wesite ");
        res.write("this is about fitness");

        // res.end is necessary to end the response
        res.end("!!!!!");
    } else if(url === "/about") {
        res.end("About Page");
    } else if(url === "/contact") {
        res.end("Contact Page");
    }  else if(url === "/fitness") {

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

        res.end(JSON.stringify(payload));

    }
    else {
        res.end("404 Not Found");
    }
});


server.listen(PORT, () => {
    console.log(`Thumbs up Server is running on port ${PORT}`);
});