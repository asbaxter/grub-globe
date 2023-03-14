const express = require("express");
const fs = require("fs");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/data", (req, res) => {
  fs.readFile("./data/recipes.json", (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Now on port ${PORT}!`);
});
