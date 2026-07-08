function HomePageResponse (req, res, next)  {
    res.send("hwlo welcome to fitness website, express js !!!!!!!!")
}

function AboutPageResponse (req, res) {
    res.send("about page express js");
}

function ContactPageResponse (req, res) {
    res.send("contact page express js");
}


module.exports = { HomePageResponse, AboutPageResponse, ContactPageResponse };