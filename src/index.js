const express = require("express");
const app = express();
const router = require("./config/router");
require("./config/db");

app.use(express.json());


app.get("/", function (req, res) {
    res.send("Hello Word");
})

app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server Running");
});