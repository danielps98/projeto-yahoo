const express = require("express");
const app = express();


//estou dizendo para o express usar o ejs como view engine
app.set('view engine', 'ejs');

app.get("/", (req, res) => {

    res.render("index")

});


app.listen(8081, ()=> {
console.log("app rodando na porta 8081");    
});