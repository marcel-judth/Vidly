export default (handler) => {
  return async (req, res, next) => {
    try {
      await await handler(req, res);
    } catch (error) {
      next(ex);
    }
  };
};
