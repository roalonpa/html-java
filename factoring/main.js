const input = document.querySelector('#input');
const submit = document.querySelector('#submit');


function getNumbers(min, max) {
    let numbers = [];

    if (min <= max) {
        for (var i = min; i <= max; i++) {
            numbers.push(i);
        }
    }

    return numbers;

};

function dotNumbers(numbers) {
    let numbersWithDot = numbers.join(' . ');
    console.log(numbersWithDot);
    return numbersWithDot;
}

function multiplyNumbers(arr) {
    if (arr.length === 0) {
        return 0;
      }

    let result = 1;
    for (var i = 0; i < arr.length; i++) {
        result *= arr[i];
    }

    return result;
};



submit.addEventListener('click', e => {
if (input.value == 0) {
    const answer = document.querySelector('#answer');
    answer.innerHTML = '';
} else if (input.value < 0) {
    const answer = document.querySelector('#answer');
    answer.innerHTML = 'Please enter a positive number';
} else {
    const max = parseInt(input.value);
    let betweenNumbers = getNumbers(1, max);
    dotNumbers(betweenNumbers);
    console.log(betweenNumbers);
    let result = multiplyNumbers(betweenNumbers);
    console.log(result)
    let numbersWithDot = dotNumbers(betweenNumbers);
    arrayAnswer = [( max + '! = ' + numbersWithDot + ' = ' + result)];
    console.log(arrayAnswer)
    const answer = document.querySelector('#answer');
    answer.innerHTML = arrayAnswer
};
});







