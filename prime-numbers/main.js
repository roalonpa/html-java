const number = document.querySelector('#number');
const result = document.querySelector('#result');

//to know if a number is prime or not
function isPrime (number) {
    if(number < 2 ) {
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
    if (isNaN(num)){
        result.innerHTML = '';
    } else {
        result.innerHTML = isPrime(num) ? result.innerHTML ='<link href="main.css"><p id="PrimeTrue">' + number.value + ': is prime</p>' :  result.innerHTML = '<link href="main.css"><p id="PrimeFalse">' + number.value + ': is not prime</p>';
    }
});

//list of prime numbers up to the number entered in input
function primesUpto(upto) {
    var result = '';
    for (var i = 2; i < upto; i++) {
        if(isPrime(i)) {
            result += i + ", ";
        }
    }
    result = result.slice(0, -2);
    return result;
}

const uNumber = document.querySelector('#uptoNumber');
let allResult = document.querySelector('#allResult');

function reset(uNumber, allResult){
    uNumber.value = "";
    allResult.innerHTML= "";
}

uNumber.addEventListener("input", (e) => {
    let allResult = document.querySelector('#allResult');
    const upto = parseInt(uNumber.value);
    if (isNaN(upto)){
        allResult.innerHTML = '';
        return;
    }
    if (upto > 10000) {
        alert("please choose a number under 10.000")
        reset(uNumber, allResult);
    } else if (upto == 2) {
        allResult.innerHTML = '2';
    } else {
        allResult.innerHTML = primesUpto(upto);
    }
})
