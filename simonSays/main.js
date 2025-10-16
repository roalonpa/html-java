

const c1 = document.createElement('button');
c1.id = "c1";
c1.className = "circles";

const c2 = document.createElement('button');
c2.id = "c2";
c2.className = "circles";

const c3 = document.createElement('button');
c3.id = "c3";
c3.className = "circles";

const c4 = document.createElement('button');
c4.id = "c4";
c4.className = "circles";

const c5 = document.createElement('button');
c5.id = "c5";
c5.className = "circles";

const c6 = document.createElement('button');
c6.id = "c6";
c6.className = "circles";

const c7 = document.createElement('button');
c7.id = "c7";
c7.className = "circles";


const colors = [c1, c2, c3, c4, c5, c6, c7];
const bStart = document.querySelector('#start');
const computersArray = [];
const usersArray = [];
const sequence = document.querySelector('#sequence');
const result = document.querySelector('#result');
const playAgain = document.querySelector('#playAgain');

function chooseRandom (array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return colors[randomIndex];
} //choose a random color

function showRandom () {
        if (computersArray.length < 7) {
            let selectedColor = chooseRandom(colors);
            sequence.append (selectedColor);
            computersArray.push(selectedColor.id);
            iterations++;
        } else {
            clearInterval(interval);
        }
} //shows the random color and adds it to the computers array

function checkIfWin() {
    sequence.innerHTML = '';
    if (JSON.stringify(usersArray)==JSON.stringify(computersArray)) {
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
        result.innerHTML = 'Good job! you won';
        playAgain.innerHTML = `<button id="correct" class="buttons">Play again</button>`
    } else {
        result.innerHTML = 'Your sequence is not correct, try again';
        playAgain.innerHTML = `<button id="incorrect" class="buttons">Play again</button>`
    }

    playAgain.addEventListener('click', e => {
        location.reload();
    });
}

function showAll() {
    console.log('computersArray', computersArray);
    usersArray.length = 0;
    sequence.append(c1, c2, c3, c4, c5, c6, c7);
    colors.forEach((color) => color.addEventListener('click', e => {
        usersArray.push(color.id);
        if (usersArray.length == computersArray.length) {
            checkIfWin();
        } else {
        console.log('usersArray', usersArray);
        };
    }));   
    changeClass();
}



    bStart.addEventListener('click', e => {
        sequence.innerHTML = '';
        iterations = 0;
        
        interval = setInterval(() => {
            showRandom();
            setTimeout(() => {
                sequence.innerHTML = '';
            }, 1400)
        }, 1500);

        setTimeout(() => {
            clearInterval(interval);
            setTimeout(() => {
                showAll();
            }, 1500)
        }, 1500 * 7)
    });


    function changeClass(){
        c1.className = "circleHover";
        c2.className = "circleHover";
        c3.className = "circleHover";
        c4.className = "circleHover";
        c5.className = "circleHover";
        c6.className = "circleHover";
        c7.className = "circleHover";
    }

    