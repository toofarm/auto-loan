const dispatchFormSubmit = () => {
    console.log('we are submitting')
}

const required = (val) => {
    return val && val.length
}

export { 
    dispatchFormSubmit,
    required
}
