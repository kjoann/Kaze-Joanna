const express = require("express");
const app = express();
const port = 3000;

app.get("/add", (req, res) => {
  const numbers = req.query.numbers;
  if (!numbers) {
    return res.status(400).send("Bad Request: numbers parameter is required");
  }
  const numbersArray = numbers.split(",").map(Number);
  const result = numbersArray.reduce((sum, num) => sum + num, 0);
  res.json({ result });
});

app.get("/multiply", (req, res) => {
  const numbers = req.query.numbers;
  if (!numbers) {
    return res.status(400).send("Bad Request: numbers parameter is required");
  }
  const numbersArray = numbers.split(",").map(Number);
  const result = numbersArray.reduce((product, num) => product * num, 1);
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Calculator app listening at http://localhost:${port}`);
});
