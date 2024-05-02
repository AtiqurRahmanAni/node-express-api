const log = (req, res, next) => {
  console.log(`Current url is: ${req.url}`);
  next();
};

export default log;
