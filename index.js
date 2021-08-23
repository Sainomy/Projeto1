const express = require("express");
const app = express();
var usuarioRoute = require("./routes/usuarioRoute");
var path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use("/usuario", usuarioRoute);

app.listen("3000", function(){
    console.log("Projeto funcionando!");
});