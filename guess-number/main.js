const secretNumber = Math.floor(Math.random() * 50) + 1;
console.log('secretNumber', secretNumber);

const inputDiv = document.querySelector('#inputDiv');
const result = document.querySelector('#result');
const message = document.querySelector('#message');
const number = document.querySelector('#number');
const reload = document.querySelector('#reload');


renderInput();

function renderInput() {
let guessInput = `
<input type="number" id="input" min="1" max="99">
<button onclick="checkGuess()" id="verify">Verify</button>
`
inputDiv.innerHTML = guessInput;
}


verify.addEventListener('click', e => {
    checkGuess
});

const arr = [('The number is: ')];



function checkGuess() {

    const userGuess = parseInt(input.value);

    if (userGuess === secretNumber) {
        number.textContent = secretNumber;
        number.innerHTML = number.textContent;
        message.textContent = 'You Guessed';
        message.innerHTML = message.textContent;
        inputDiv.textContent = '';
        inputDiv.innerHTML = inputDiv.textContent;
        info.innerHTML = '';
        
        const playAgain = `
        <button id="buttonReload">Play Again</button>
        `
        reload.innerHTML = playAgain;
        buttonReload.addEventListener('click', e => {
            location.reload();
        })
    } else if (userGuess > secretNumber) {
        number.textContent = userGuess;
        number.innerHTML = number.textContent;
        message.textContent = 'Lower';
        message.innerHTML = message.textContent;
        renderInput();
        arr.push(' lower than ' + number.textContent, );
        info.innerHTML = arr;
        console.log('arr', arr)
        checkArrLength();
    } else if (userGuess < secretNumber) {
        number.textContent = userGuess;
        number.innerHTML = number.textContent;
        message.textContent = 'Higher';
        message.innerHTML = message.textContent;
        renderInput();
        arr.push(' higher than ' + number.textContent, );
        info.innerHTML = arr;
        console.log('arr', arr)
        checkArrLength();
    }
} 

function checkArrLength() {
    if (arr.length == 6) {
        message.textContent = 'You Lost, the number was:';
        message.innerHTML = message.textContent;
        number.textContent = secretNumber;
        number.innerHTML = number.textContent;
        inputDiv.textContent = '';
        inputDiv.innerHTML = inputDiv.textContent;
        info.innerHTML = '';
        
        const playAgain = `
        <button id="buttonReload">Play Again</button>
        `
        reload.innerHTML = playAgain;
        buttonReload.addEventListener('click', e => {
            location.reload();
        });
    };
}

const info = document.querySelector('#info');
info.innerHTML = arr;
















const secretNumber1 = Math.floor(Math.random() * 100) + 1;
console.log('secretNumber', secretNumber1);

const inputDiv1 = document.querySelector('#inputDiv1');
const result1 = document.querySelector('#result1');
const message1 = document.querySelector('#message1');
const number1 = document.querySelector('#number1');
const reload1 = document.querySelector('#reload1');


renderInput1();

function renderInput1() {
let guessInput1 = `
<input type="number" id="input1" min="1" max="99">
<button onclick="checkGuess1()" id="verify1">Verify</button>
`
inputDiv1.innerHTML = guessInput1;
}


verify1.addEventListener('click', e => {
    checkGuess1();
});

const arr1 = [('The number is: ')];



function checkGuess1() {

    const userGuess1 = parseInt(input1.value);

    if (userGuess1 === secretNumber1) {
        number1.textContent = secretNumber1;
        number1.innerHTML = number1.textContent;
        message1.textContent = 'You Guessed';
        message1.innerHTML = message1.textContent;
        inputDiv1.textContent = '';
        inputDiv1.innerHTML = inputDiv1.textContent;
        info1.innerHTML = '';
        
        const playAgain = `
        <button id="buttonReload1">Play Again</button>
        `
        reload1.innerHTML = playAgain;
        buttonReload1.addEventListener('click', e => {
            location.reload();
        })
    } else if (userGuess1 > secretNumber1) {
        number1.textContent = userGuess1;
        number1.innerHTML = number1.textContent;
        message1.textContent = 'Lower';
        message1.innerHTML = message1.textContent;
        renderInput1();
        arr1.push(' lower than ' + number1.textContent, );
        info1.innerHTML = arr1;
        console.log('arr1', arr1)
        checkArrLength1();
    } else if (userGuess1 < secretNumber1) {
        number1.textContent = userGuess1;
        number1.innerHTML = number1.textContent;
        message1.textContent = 'Higher';
        message1.innerHTML = message1.textContent;
        renderInput1();
        arr1.push(' higher than ' + number1.textContent, );
        info1.innerHTML = arr1;
        console.log('arr1', arr1)
        checkArrLength1();
    }
} 

function checkArrLength1() {
    if (arr1.length == 6) {
        message1.textContent = 'You Lost, the number was:';
        message1.innerHTML = message1.textContent;
        number1.textContent = secretNumber1;
        number1.innerHTML = number1.textContent;
        inputDiv1.textContent = '';
        inputDiv1.innerHTML = inputDiv1.textContent;
        info1.innerHTML = '';
        
        const playAgain = `
        <button id="buttonReload1">Play Again</button>
        `
        reload1.innerHTML = playAgain;
        buttonReload1.addEventListener('click', e => {
            location.reload();
        });
    };
}

const info1 = document.querySelector('#info1');
info1.innerHTML = arr1;










const secretNumber2 = Math.floor(Math.random() * 150) + 1;
console.log('secretNumber', secretNumber2);

const inputDiv2 = document.querySelector('#inputDiv2');
const result2 = document.querySelector('#result2');
const message2 = document.querySelector('#message2');
const number2 = document.querySelector('#number2');
const reload2 = document.querySelector('#reload2');


renderInput2();

function renderInput2() {
let guessInput2 = `
<input type="number" id="input2" min="1" max="99">
<button onclick="checkGuess2()" id="verify2">Verify</button>
`
inputDiv2.innerHTML = guessInput2;
}


verify2.addEventListener('click', e => {
    checkGuess2();
});

const arr2 = [('The number is: ')];



function checkGuess2() {

    const userGuess2 = parseInt(input2.value);

    if (userGuess2 === secretNumber2) {
        number2.textContent = secretNumber2;
        number2.innerHTML = number2.textContent;
        message2.textContent = 'You Guessed';
        message2.innerHTML = message2.textContent;
        inputDiv2.textContent = '';
        inputDiv2.innerHTML = inputDiv2.textContent;
        info2.innerHTML = '';
        
        const playAgain = `
        <button id="buttonReload2">Play Again</button>
        `
        reload2.innerHTML = playAgain;
        buttonReload2.addEventListener('click', e => {
            location.reload();
        })
    } else if (userGuess2 > secretNumber2) {
        number2.textContent = userGuess2;
        number2.innerHTML = number2.textContent;
        message2.textContent = 'Lower';
        message2.innerHTML = message2.textContent;
        renderInput2();
        arr2.push(' lower than ' + number2.textContent, );
        info2.innerHTML = arr2;
        console.log('arr2', arr2)
        checkArrLength2();
    } else if (userGuess2 < secretNumber2) {
        number2.textContent = userGuess2;
        number2.innerHTML = number2.textContent;
        message2.textContent = 'Higher';
        message2.innerHTML = message2.textContent;
        renderInput2();
        arr2.push(' higher than ' + number2.textContent, );
        info2.innerHTML = arr2;
        console.log('arr2', arr2)
        checkArrLength2();
    }
} 

function checkArrLength2() {
    if (arr2.length == 6) {
        message2.textContent = 'You Lost, the number was:';
        message2.innerHTML = message2.textContent;
        number2.textContent = secretNumber2;
        number2.innerHTML = number2.textContent;
        inputDiv2.textContent = '';
        inputDiv2.innerHTML = inputDiv2.textContent;
        info2.innerHTML = '';
        
        const playAgain = `
        <button id="buttonReload2">Play Again</button>
        `
        reload2.innerHTML = playAgain;
        buttonReload2.addEventListener('click', e => {
            location.reload();
        });
    };
}

const info2 = document.querySelector('#info2');
info2.innerHTML = arr2;