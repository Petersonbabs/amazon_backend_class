const handleDuplicateError = (err)=>{
    const errorKey = Object.keys(err.keyValue)[0]
    const errorValue = Object.values(err.keyValue)[0]
    const error = new Error(`${errorKey} of ${errorValue} already exists!`)
    error.statusCode = 403
    return error

}
const handleCastError = (err)=>{
    const message = `${err.path} ${err.value} is not valid`
    const error = new Error(message)
    return error
}
const handleValidationError = (err, res)=>{
     const errorMessages = Object.values(err.errors).map(error => error.message);
     return res.status(400).json({
         status: 'Failed',
         message: errorMessages[0]
     });
    // const errorValues = Object.values(err.errors)
    // const errorKind = errorValues.map(error => error.kind)[0];
    // const sentKind = errorValues.map(error => error.valueType)[0]
    // const errorPath = errorValues.map(error => error.path)[0]
    // const message = `You sent ${sentKind} instead of ${errorKind} to the ${errorPath} field.`

    // return res.status(400).json({
    //     status: 'Failed',
    //     message
    // });
    
}

const errorHandler = (err, req, res, next) =>{
    // Duplicate error
    if(err.code === 11000){
        const error = handleDuplicateError(err)
        res.status(error.statusCode).json({
            status: 'error',
            message: error.message
        })
    } 
    // Cast error
    else if(err.name == "CastError"){
        console.log('casting...');
        const error = handleCastError(err)
        res.status(400).json({
            status: 'error',
            message: error.message
        })
    }
    // Validation error
    else if(err.name === "ValidationError"){
        handleValidationError(err, res)
    }
}

module.exports = errorHandler