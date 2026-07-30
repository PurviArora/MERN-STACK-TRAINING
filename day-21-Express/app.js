import express from 'express'
const app = express();
const Port = 9000;

//Routing
app.get("/", (req,res) => {
   res.send('<h1> This is the Express First Page </h1>')
})
app.get("/about", (req,res) => {
    res.status(200)
   res.send('<h1> This is the Express About Page </h1>')
})
app.get("/contact", (req,res) => {
    res.status(200).send({
        fname:"Purvi",
        lname:"Arora",
        email:"pa@gmail.com",
        phone:36582765644
    })
})

app.listen(Port, () => {
    console.log(`listening at localhost:${Port}`)
})