const logger = (req, res, next) => {
  console.log(`Method: ${req.method} Route: ${req.url}`);
  next();
};

export default logger;
