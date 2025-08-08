const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("helloooo");
});

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}/`);
});

app.get("/show/:id", (req,res) => {
    res.send(`helloooo student \n ID:${req.params.id}`);
});

app.post("/store", (req,res) => {
    res.send(`successfully stored record \n ID:${req.body.name},${req.body.city}`);
});

app.put("/update/:id", (req,res) => {
    res.send(`successfully update record \n ID:${req.params.id},Name:${req.body.name},${req.body.city}`);
});

app.delete("/delete/:id", (req,res) => {
    res.send(`successfully deleted record with ID:${req.params.id}`);
});