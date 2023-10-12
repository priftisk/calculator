export function add(a, b){
    if(typeof(a) === 'number' && typeof(b) === 'number'){
        return a + b
    }
    else{
        throw Error('Ensure the inputs are numbers.')
    }
}


export function subtract(a ,b){
    if(typeof(a) === 'number' && typeof(b) === 'number'){
        return a - b
    }
    else{
        throw Error('Ensure the inputs are numbers.')
    }
}

export function divide(a, b){
    if(typeof(a) === 'number' && typeof(b) === 'number'){
       if(b === 0){
            return a / b
       }
       else{
        throw Error('Cannot divide by zero.')
       }
    } 
    else{
        throw Error('Ensure the inputs are number.')
    }
}

export function multiply(a, b){
    if(typeof(a) === 'number' && typeof(b) === 'number'){
        return a * b
    }
    else{
        throw Error('Ensure the inputs are numbers.')
    }
}