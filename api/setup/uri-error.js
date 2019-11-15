const uriError = (req, res, next) => {
  try {
    decodeURIComponent(req.path);
    next();
  } catch (err) {
    res.send([]);
  }
};

module.exports = uriError;
