const express = require("express");
const app = express();


//estou dizendo para o express usar o ejs como view engine
app.set('view emgime', 'ejs');

app.get("/", (req, res) => {

    res.send("bem vindo ao meu site")

});


app.listen(8000, ()=> {
console.log("app rodando na porta 8000");    
});