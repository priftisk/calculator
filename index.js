export function add(a, b){
    if(typeof(a) === 'number' && typeof(b) === 'number'){
        return a + b
    }
    else{
        throw Error('Ensure the inputs are integers.')
    }
}


export function subtract(a ,b){
    if(typeof(a) === 'number' && typeof(b) === 'number'){
        return a - b
    }
    else{
        throw Error('Ensure the inputs are integers.')
    }
}
