export const checkAuth = (req, res, next) => {
  if (req.headers.token === "secret") {
    return next();
  }
  res.status(401).json({ message: "Unauthorized attempt!" });
};
