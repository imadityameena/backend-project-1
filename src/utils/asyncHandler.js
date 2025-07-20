// A helper function to handle errors in async functions used in routes

const asyncHandler = (requestHandler) => {
  // Returns a new function that Express will use for the route
  return (req, res, next) => {
    // Runs the original async function (like a controller)
    Promise
      .resolve(requestHandler(req, res, next)) // Run the async code and wait for it to finish
      .catch((err) => next(err)) // If an error happens, send it to Express error handler
  }
}

// Exporting the asyncHandler function so it can be used in other files
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