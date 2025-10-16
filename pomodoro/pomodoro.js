const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = null;

const Add = document.querySelector('#Add');
const itTask = document.querySelector('#itTask');
const form = document.querySelector('#form');
const taskName = document.querySelector('#time #taskName');

renderTime();
renderTasks();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(itTask.value !== ''){
        createTask(itTask.value);
        itTask.value = '';
        renderTasks();
    }
})

function createTask(value){

const newTask = {
    id: (Math.random() * 100).toString(36).slice(3),
    title: value,
    compleated: false
}
tasks.unshift(newTask);

}

function renderTasks(){
    const html = tasks.map((task) => {
        return`
        <link rel="stylesheet" href="pomodoro.css">
        <div class="task">
        <div class="title">${task.title}</div>
            <div class="completed">${
                task.compleated 
                ? `<span class="done">Done</span>` 
                : `<button class="start-button" data-id="${task.id}">Start</button>`
            }
            </div>
        </div>
        
        `;
    });

    const tasksContainer = document.querySelector('#tasks');
    tasksContainer.innerHTML = html.join('');

    const startButtons = document.querySelectorAll('.task .start-button');

    startButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if(!timer){
                const id = button.getAttribute('data-id');
                startButtonHandler(id);
                button.textContent = 'in progress...'
            }
        });
    });
}

function startButtonHandler(id){
    time = 25 * 60;
    current = id;
    const taskIndex = tasks.findIndex(task => task.id == id);
    
    taskName.textContent = tasks[taskIndex].title;
    renderTime();

    timer = setInterval(() => {
        timerHandler(id);
    }, 1000);
}

function timerHandler(id = null){
    time --;
    renderTime();
    if(time === 0){
        clearInterval(timer);
        markCompleted(id);
        timer = null;
        renderTasks();
        startBreak();
        alert("¡Congratulations, you've finished studying! now you can take a 5 minutes break.")
    }
}

function startBreak(){
    time = 5 * 60;
    taskName.textContent = 'Break';
    renderTime();
    timerBreak = setInterval(() => {
        timerBreakHandler();
    }, 1000);
}

function timerBreakHandler(){
    time --;
    renderTime();
    if(time == 0){
        clearInterval(timerBreak);
        current = null;
        timerHandler = null;
        taskName.textContent = '';
        renderTasks();
        alert("Your break is over ¡Good Job!");
        location.href = location.href;
    }
}

function renderTime() {
    const timeDiv = document.querySelector('#time #value');
    const minutes = parseInt(time / 60);
    const seconds = parseInt(time % 60);
    timeDiv.textContent = `${minutes < 10 ? '0' : '' }${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; 
}

function markCompleted(id){
    const taskIndex = tasks.findIndex(task => task.id == id);
    tasks[taskIndex].compleated = true;
}
