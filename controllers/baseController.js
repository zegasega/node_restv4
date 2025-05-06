class BaseController {
    
    static sendResponse(res, data, message = "Operation Successful", statusCode = 200) {
      res.status(statusCode).json({
        success: true,
        message: message,
        data: data,
      });
    }
  
    
    static sendError(res, error, statusCode = 400) {
      res.status(statusCode).json({
        success: false,
        message: error.message || 'Something went wrong',
        error: error,
      });
    }
  }
  
  module.exports = BaseController;
  