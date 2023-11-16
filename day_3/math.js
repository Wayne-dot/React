export const addTwo = (a, b) => a + b
export const mutiply = (a, b) => a * b
export const subtract = (a, b) => a - b


export default (function doSomeMath(){
    return{
        addTwo, 
        mutiply,
        subtract,
    }
})()