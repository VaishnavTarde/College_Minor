module.exports = (req, res, next) => {
  const role = req.headers.role;

  if (role === "student") {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};
