import axios from "axios";
import express from "express";

const app = express();
const port = 3000;

app.get("/api/products", (req, res) => {
  const apiUrl = "https://dummyjson.com/products";

  axios
    .get(apiUrl)
    .then((response) => {
      const productList = response.data;
      res.json(productList);
    })
    .catch((error) => {
      console.error("Error occured", error.message);
      res.status(500).json({ error: "Failed to fetch data" });
    });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
