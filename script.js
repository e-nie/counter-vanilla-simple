const counterSelector = document.getElementById('counter');

let count = 0;
const minus = () => {
    counterSelector.innerText = --count;
};

const plus = () => {
    counterSelector.innerText = ++count;
};

const reset = () => {
    counterSelector.innerText=0
};