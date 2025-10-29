// ###### Express => (Intro-Part1) ######

// Express =>  Fast, unopinionated, minimalist web framework for Node.js.
// Express => simplifies the process of handling http requests and responses

import express from "express";
const app = express();

// ***********
// Part_1
// ***********

// => app.get(rout(endpoint), callbackfun);
// => app.listen(port,callbackfun)

// app.get("/", (req, res) => {
//   res.send("Welcome to Home Page!");
// });
// app.get("/students", (req, res) => {
//   res.send("Hello Students");
// });

// app.post("/create", (req, res) => {
//   res.send("Created!");
// });

// ***********
// Part_2
// ***********

// // => HTTP Methods => GET,POST,PUT,PATCH,DELETE
// const users = [];
// // Middleware
// // Body parser middleware
// app.use(express.json());

// GET=> Retrieve Data
// app.get("/users", (req, res) => {
//   if (users.length === 0) {
//     res.status(404).send("No users Found!");
//     return;
//   }
//   res.status(200).send(users);
// });

// // Query String => Query Params (req.query=> to return object include query params)
// app.get("/users", (req, res) => {
//   console.log(req.query);
// });

// // POST=> Create Data
// app.post("/users", (req, res) => {
//   // console.log(req.body);
//   // //**without check id and id added automatic**
//   // let { id, name, age } = req.body;
//   // id = users.length + 1;
//   // users.push({ id, name, age });
//   // res.status(201).send("Created!");

//   // //**Use check id**
//   let user = req.body;
//   let findUser = users.find((currUser) => currUser.id === user.id);
//   if (findUser) {
//     res.status(400).send("user already exists");
//     return;
//   }
//   users.push(user);
//   res.status(201).send("Created!");
// });

// // DELETE=>Remove Data
// // Request Params => Path Params (req.params=> to return object include params)
// app.delete("/users/:id", (req, res) => {
//   const { id } = req.params;
//   let findUserIndex = users.findIndex((currUser) => currUser.id === +id);

//   if (findUserIndex === -1) {
//     res.status(400).send("User Not Found!");
//     return;
//   }
//   users.splice(findUserIndex, 1);
//   res.status(200).send("User Deleted Successfully!");
// });

// //PUT=>Update All Old Data
// app.put("/users/:id", (req, res) => {
//   let { id } = req.params;
//   let { name, age } = req.body;
//   let findUser = users.find((user) => user.id === +id);
//   if (!findUser) {
//     res.status(400).send("User Not Found");
//     return;
//   }
//   findUser.name = name;
//   findUser.age = age;
//   res.status(200).send("User Updated Successfully!");
// });

// //PATCH=>Update New Data
// app.patch("/users/:id", (req, res) => {
//   let { id } = req.params;
//   let { name, age } = req.body;
//   let findUser = users.find((user) => user.id === +id);
//   if (!findUser) {
//     res.status(400).send("User Not found!");
//     return;
//   }
//   findUser.name = name || findUser.name;
//   findUser.age = age || findUser.age;
//   res.status(200).send("User Updated Successfully!");
// });

// ***********
// Part_3
// ***********

// Middleware => app.use()
// app.use((req, res, next) => {
//   console.log("Hello From M1");
//   next();
// });

// app.use((req, res) => {
//   console.log("Hello From M2");
// });
// *******
// app.use(
//   (req, res, next) => {
//     console.log("Hello From M1");
//     // res.send("<h1>Hello Middleware</h1>");
//     next();
//   },
//   (req, res) => {
//     console.log("Hello From M2");
//   }
// );
// ******
// middleware=> app.all()
// app.all("/", (req, res, next) => {
//   res.send("Hello From Home Page");
// });
// app.all("/about", (req, res, next) => {
//   res.send("Hello From About Page");
// });

// app.use((req, res, next) => {
//   res.send("404 Not Found");
// });

// *********

// Router In Express
// => How do we divide routes in Express into separate files?
// => Each part of the application will be in a separate Router file.
// => Express gives you something called a Router.

import aboutRouter from "./about-router.js";

app.use("/about", aboutRouter);

app.listen(3000, () => {
  console.log("Server Listening On Port 3000!");
});

// End Intro-Part1
