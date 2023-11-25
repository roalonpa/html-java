const number = document.querySelector('#number');
const result = document.querySelector('#result');


//to know if a number is prime of not
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

function primesUpto(upto) {
    let allResult = [];
    allResult.forEach((element) => 
    allResult.innerHTML = '')
    for (var i = 2; i < upto; i++) {
        if(isPrime(i)) {
            allResult.push(i);
        }
    }
    return allResult;
}

const uNumber = document.querySelector('#uptoNumber');
let allResult = document.querySelector('#allResult');

function recet(uNumber, allResult){
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
        recet(uNumber, allResult);
    } else {
    allResult.innerHTML = primesUpto(upto);
    }
})
