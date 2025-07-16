import ratelimit from "../config/upstash.js";


const rateLimiter = async(req,res,next) => {
    try {
        const {success} = await ratelimit.limit("my-limit-key");        // userId/ip address will come instead of my-limit
        if(!success){ return res.status(429).json({message:"Too many requests, try again later"})}
        next();
    } catch (error) {
        console.log("Error in rate Limiter",error);
        next(error);
    }
    
}

export default rateLimiter