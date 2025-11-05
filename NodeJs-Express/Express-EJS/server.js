import express from "express";

const app = express();

// Config EJS => Template Engine
app.set("view engine", "ejs");

// Optional this Step
app.set("views", "views");

// EJS => to have basic three types of tags
// =>output tag=> <%= %>
// scriptlet tag=> <% %>
// unescaped output tag=> <%- %>

// Rout
app.get("/", (req, res) => {
  res.render("index", {
    articles: [
      { title: "Article1" },
      { title: "Article2" },
      { title: "Article3" },
    ],
  });
});

app.get("/test", (req, res) => {
  res.render("index2", {
    title: "My Website",
    message: "Hello from EJS",
    people: ["John", "Jane", "Jack"],
  });
});

app.get("/products", (req, res) => {
  const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Headphones", price: 100 },
  ];
  res.render("products", { products: products });
});
app.listen(8000, () => {
  console.log("Server is running on port 8000!");
});
