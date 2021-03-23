const express = require("express");
const bp = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bp.json());
app.use(cors());

const meals = [
  {
    url:
      "https://functionjunction.com/wp-content/uploads/2018/08/rigatoni-and-beef.jpg",
    type: "starter",
    title: "Onion Tree Ragu",
    ingredients: ["Onion", "Tomato"],
    price: 10,
  },
  {
    url:
      "https://functionjunction.com/wp-content/uploads/2018/08/rigatoni-and-beef.jpg",
    type: "starter",
    title: "Cold Pasta",
    ingredients: ["Pasta", "Onion"],
    price: 8,
  },
  {
    url:
      "https://functionjunction.com/wp-content/uploads/2018/08/rigatoni-and-beef.jpg",
    type: "soup",
    title: "Onion Soup",
    ingredients: ["Onion", "Tomato"],
    price: 5,
  },
  {
    url:
      "https://functionjunction.com/wp-content/uploads/2018/08/rigatoni-and-beef.jpg",
    type: "main",
    title: "Onion Dish",
    ingredients: ["Onion", "Tomato"],
    price: 20,
  },
];

app.get("/starter", (req, res) => {
  res.send(meals.filter((x) => x.type === "starter"));
});

app.get("/soup", (req, res) => {
  res.send(meals.filter((x) => x.type === "soup"));
});

app.get("/main", (req, res) => {
  res.send(meals.filter((x) => x.type === "main"));
});

app.post("/add", (req, res) => {
  if (
    req.body.url &&
    req.body.type &&
    req.body.title &&
    req.body.ingredients &&
    req.body.price
  ) {
    meals.push({
      url: req.body.url,
      type: req.body.type,
      title: req.body.title,
      ingredients: req.body.ingredients,
      price: req.body.price,
    });
    res.send({ status: "Request OK" });
  } else {
    res.status(400).send({ status: "Request was bad" });
  }
});
