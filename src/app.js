const express = require("express");
const app = express();

const port = process.env.PORT || 8000;
const hbs = require("hbs");
const path =require("path");

// joinig the path 
const staticPath= path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");

// to grant the permission from express
app.use(express.static(staticPath));

// to use handlebar file 
app.set("view engine","hbs");
app.set("views",templatePath);

// to register the partial path using hbs
hbs.registerPartials(partialPath);


app.get("/",async(req,res)=>{
    try {
        res.status(200).render("index")
    } catch (error) {
        res.status(400).send("Something went wrong")
    }
})

// for any error
app.get("/*",(req,res)=>{
    // to render error file
    res.status(404); 
    res.render("error");
})

app.listen(port,()=>{
    console.log(`Server is running at port no.${port}`);
})
