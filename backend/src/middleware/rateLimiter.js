import ratelimit from "../config/upstash.js"; 

const rateLimiter = async (req, res, next) => {
  try {
    const ip = req.ip || req.headers["x-forwarded-for"] || "anonymous";             // Get user IP address
    const { success } = await ratelimit.limit(ip);                                  // Check request limit for this IP
    // If limit exceeded
    if (!success) {
      return res.status(429).json({ 
        message: "Too many requests, try again later" 
      });
    }
    next(); // Continue to next middleware
  } catch (error) {
    next(error); // Pass error to errorHandler.js
  }
};

export default rateLimiter; 