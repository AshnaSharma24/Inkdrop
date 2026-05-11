// Wraps async controllers so you never need try/catch again.
// Any thrown error gets forwarded to the centralized error middleware.
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;