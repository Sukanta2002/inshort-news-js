class ApiError extends Error {
    constructor(
        statusCode,
        error = [],
        message = "Something Went Wrong !!!",
        stack = ""
    ) {
        super(message)
        this.statusCode = statusCode
        this.message = message
        this.sucess = false
        this.errors = error
        this.data = null
        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }