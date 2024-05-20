import jwt from "jsonwebtoken";

const checkToken = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ error: "Invalid token" });
  }

  jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
    if (err) {
      res.clearCookie("token", {
        domain: process.env.ALLOWED_ORIGIN,
        path: "/",
      });
      return res.status(401).json({ error: "Invalid token" });
    }
    next();
  });
};

export default checkToken;
