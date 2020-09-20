const accessControl = (req,res,next)=>{
    const access = false;
    if(!access){
        res.status(401).json({
            success:false,
            message: "You are not authorized"
        });
    }
    next();
};
const defaultMiddleware = (req, res, next)=>{
    console.log("Default middleware");
    next();
}
module.exports = {
    accessControl,
    defaultMiddleware
};