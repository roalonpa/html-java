
const number = document.querySelector('#number');
const result = document.querySelector('#result');


//para saber si un numero es primo
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

//lista de numeros primos hasta el numero ingresado en un input
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
let miString = document.querySelector('#allResult');

function reset(uNumber, miString){
    uNumber.value = "";
    miString.innerHTML= "";
}
uNumber.addEventListener("input", (e) => {
    let miString = document.querySelector('#allResult');
    const upto = parseInt(uNumber.value);
    if (isNaN(upto)){
        miString.innerHTML = '';
        return;
    }
    if (upto > 10000) {
        alert("please choose a number under 10.000")
        reset(uNumber, miString);
    } else if (upto == 2) {
        miString.innerHTML = '2';
    } else {
        miString.innerHTML = primesUpto(upto);
    }

    console.log('miString', miString)
})