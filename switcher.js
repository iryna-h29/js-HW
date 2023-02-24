

function defaultStatus() {
    let lastTurn = localStorage.getItem('Last turn');
    outputDate.innerHTML = lastTurn;
    switcherSpanBtn.innerText = localStorage.getItem('SetCondition') || "off";
    if (localStorage.getItem('SetCondition') === 'off') {
        switcherSpanLabel.innerText = 'Last turn on';
    } else if(localStorage.getItem('SetCondition') === 'on') {
        switcherSpanLabel.innerText = 'Last turn off';
    }
    if (localStorage.getItem('darkTheme') === "true"){
        sectionSwitcher.classList.add('dark-theme');
    }
}

function changeTextContent() {
    if (switcherSpanBtn.innerText === 'off') {
        switcherSpanBtn.innerText = 'on'; 
        switcherSpanLabel.innerText = 'Last turn off';
    } else {
        switcherSpanBtn.innerText = 'off';
        switcherSpanLabel.innerText = 'Last turn on';
    };
    localStorage.setItem('SetCondition', switcherSpanBtn.textContent);
}
function getCurrentDate() {
    for (let item in dateObj) {
        if (String(dateObj[item]).length === 1) {
            dateObj[item] = "0" + dateObj[item];
        }
    }
    let currentDate = `${dateObj.day}-${dateObj.month}-${dateObj.year} ${dateObj.hour}:${dateObj.minutes}:${dateObj.seconds}`;
    return currentDate;
};

function setDate() {
    let currentDate = getCurrentDate();
    outputDate.innerHTML = currentDate;
    localStorage.setItem('Last turn', currentDate);
    changeTextContent();
}

function switchTheme() {
    sectionSwitcher.classList.toggle('dark-theme');
    localStorage.setItem('darkTheme', sectionSwitcher.classList.contains('dark-theme'));
    setDate();
};

const date = new Date();

const dateObj = {
    day : date.getDate(),
    month : date.getMonth() + 1,
    year : date.getFullYear(),
    hour : date.getHours(),
    minutes : date.getMinutes(),
    seconds : date.getSeconds()
};

let switcherSpanBtn = document.querySelector('#switcher-btn-span');
let switcherSpanLabel = document.querySelector('#switcher__label');
let sectionSwitcher = document.querySelector('.switcher');
let outputDate = document.querySelector("#switcher__data");

let switcherBtn = document.querySelector('#switcher-btn');
switcherBtn.addEventListener('click', switchTheme);

defaultStatus();