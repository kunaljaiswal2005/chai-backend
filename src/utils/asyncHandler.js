const asyncHandler = (requestHandler) => {
     return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error))
    }
}
export { asyncHandler }

// const asyncHandler = async (fn) => (req,res,next) => {
//     try {
//         awaitfn(req,res,next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message:error.message,
//         })
//     }
//  }