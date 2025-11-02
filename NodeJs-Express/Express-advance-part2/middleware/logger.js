import colors from "colors";

const methodColor = {
  GET: "green",
  POST: "blue",
  PUT: "yellow",
  DELETE: "red",
};

const logger = (req, res, next) => {
  const color = methodColor[req.method] || white;
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`[
      color
    ]
  );
  next();
};

export default logger;
