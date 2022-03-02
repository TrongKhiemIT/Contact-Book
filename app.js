const setupContactRoutes = require("./app/routes/contact.routes");
const express = require("express");
const cors = require("cors");

const app = express();

setupContactRoutes(app);

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({message: "Welcome to contact book application."});

});



module.exports = app;