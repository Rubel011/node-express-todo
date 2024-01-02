const errorResponse = (status, message) => {
    return {
        status,
        success: false,
        message,
    }
}
const successResponse = (status, message, data=null) => {
    return {
        status,
        success: true,
        message,
        data
    }

}
module.exports ={successResponse, errorResponse}
