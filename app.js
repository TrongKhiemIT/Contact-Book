const setupContactRoutes = require("./app/routes/contact.routes");
const express = require("express");
const cors = require("cors");

const { BadRequestError, errorHandler } = require("./app/errors");

const app = express();


setupContactRoutes(app);

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({message: "Welcome to contact book application."});

});

//handle 404 response
app.use((req, res, next) => {
    //code o day se chay khi khong co route duoc dinh nghia nao
    //khop voi yeu cau, goi next() de chuyen sang middleware xu ly loi
    next(new BadRequestError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    errorHandler.handleError(err, res);
});


module.exports = app;