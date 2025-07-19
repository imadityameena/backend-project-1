// A utility function that wraps any async route handler
// It catches errors in async functions and passes them to Express error handlers

const asyncHandler = (requestHandler) => {
  // Returns a new function that Express will call when handling the route
  return (req, res, next) => {
    // Runs the async handler and catches any errors
    Promise
      .resolve(requestHandler(req, res, next)) // Run the original async function
      .catch((err) => next(err)) // If it throws/rejects, pass the error to Express's next()
  }
}

export { asyncHandler }


/*

***understand the concept of double () => () => {} here:- 
const asyncHandler = () => {}
const asyncHandler = (func) => () => {}
const asyncHandler = (func) => async () => {}

*/


// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next)
    
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message

//     })
    
//   }
// }