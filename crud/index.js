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
