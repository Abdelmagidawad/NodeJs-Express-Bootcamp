// ###### Express => (Advanced-Part2) ######

// Express Basic Server **
import express from "express";
import path from "path";
import posts from "./routes/posts.js";
//
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
//
import { fileURLToPath } from "url";
//
const app = express();

// Body Parser middleware
app.use(express.json());

//
// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log(__filename);
// console.log(__dirname);
//

// res.sendFile() Method
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

// Static Web Server **
// app.use() => Middleware that works between req,res

// setup static folder

app.use(express.static(path.join(__dirname, "views")));

// Working With JSON **
// res.json() => to send data json format and handel headers automatically.
// res.status() => to send status code before res.json() or res.send().

// app.get("/api/posts", (req, res) => {
//   // res.send(posts);
//   res.json(posts);
// });

// Request Params => Path Params (req.params=> to return object include params)
// Query String => Query Params (req.query=> to return object include query params)

// **logger middleware**
app.use(logger);

// **Routes**
app.use("/api/posts", posts);

// **Error Handler**
app.use(notFound);
app.use(errorHandler);

app.listen(8000, () => {
  console.log("Server Listening on Port 8000!");
});
