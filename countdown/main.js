let events = [];

const eventName = document.querySelector('#eventName');
const eventDate = document.querySelector('#eventDate');
const buttonAdd = document.querySelector('#bAdd');
const eventsContainer = document.querySelector('#eventsContainer');

const json = load();
const arr = JSON.parse(json);
events = [...arr];
renderEvents();


document.querySelector('form').addEventListener("submit", e => {
    e.preventDefault();
});

buttonAdd.addEventListener("click", (e) => {
    addEvent();
  });

function addEvent() {
    if (eventName.value == '' || eventDate.value == '') {
        return;
    } //if it's empty don't do nothing

    if (dateDiff(eventDate.value) < 0){
        return;
    } //if the date is before the current day, don't do nothing

    const newEvent = {
        id: (Math.random() * 100).toString(36).slice(3),
        name: eventName.value,
        date: eventDate.value,
    };

    events.unshift(newEvent);

    save(JSON.stringify(events));

    eventName.value = '';

    renderEvents();

    //add an event
}

function renderTime() {
    location.reload();
}

function dateDiff(d) {
    const targetDate = new Date (d);
    const today = new Date ();
    const difference = targetDate.getTime() - today.getTime(); //calcula el tiempo que falta para la fecha
    const days = Math.ceil(difference / (1000 * 3600 * 24));
    return days;
}

function reload() {
    const hour = Date.getHours();
    const minutes = Date.getMinutes();
    if (hour == 0 && minutes == 0) {
        renderTime();
    }
}

function renderEvents() {
    const eventsHTML = events.map(event => {
        return `
        <link rel="stylesheet" href="main.css">
            <div class="event">
                <div class="eventIns">
                    <div class="days">
                        <span class="days-number">${dateDiff(event.date)}</span>
                        <span class="days-text">Days</span>
                    </div>

                    <div class="event-name">${event.name}</div>
                    <div class="event-date">${event.date}</div>
                    <div class="actions">
                        <button class="bDelete" data-id="${event.id}">Delete</button>
                    </div>
                </div> 
            </div>
        `;

    });

    eventsContainer.innerHTML = eventsHTML.join("");
    document.querySelectorAll('.bDelete').forEach(button => {
        button.addEventListener('click', e => {
            const id = button.getAttribute('data-id');
            events = events.filter(event => event.id != id);

            save(JSON.stringify(events));

            renderEvents();
        })
    });
}

function save(data) {
    localStorage.setItem('items', data);
}

function load() {
    return localStorage.getItem('items');
}

