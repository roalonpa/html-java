const form = document.querySelector('#form')
const number = document.querySelector('#number');
const submit = document.querySelector('#submit');
const result = document.querySelector('#result');




function isPrime (number) {
    if(number === 2) {
        return true;
    } else if (number < 2) {
        return false;
    }

    for(var i = 2; i < number; i++) {
        if (number % i === 0){
            return false;
        }
    }
    return true;    
} 


number.addEventListener("input", function (ev) {
    const num = parseInt(number.value);
    console.log('onInput', isPrime(num));
    if (isNaN(num)){
        result.innerHTML = '';
    } else {
        result.innerHTML = isPrime(num) ? 'The number is prime' :  'The number is not prime';
    }
});