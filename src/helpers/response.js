const version = "1.0"

exports.success = (data = null, message = "Success!", code = 200) => {
    return {
        success: true,
        message: message,
        data: data,
        code: code,
        version: version
    }
}

exports.fail = (message = "Failed!", code = 400) => {
    return {
        success: false,
        message: message,
        data: null,
        code: code,
        version: version
    }
}