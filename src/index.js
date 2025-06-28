//Importacion de dependencias
const express = require("express");

//App web
const app = express();


require("./database");
app.listen(3000);
console.log("Server on port ", 3000);