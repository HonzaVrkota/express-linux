const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({
    name: "Jan Vrkota",
  });
});

app.get("/api", (req, res) => {
  res.json({
    name: "Elie",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
