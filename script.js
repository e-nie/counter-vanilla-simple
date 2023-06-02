const counterSelector = document.getElementById('counter');

const minus = () => {
    counterSelector.innerText = +counterSelector.innerText - 1;
};

const plus = () => {
    counterSelector.innerText = +counterSelector.innerText + 1;
};

const reset = () => {
    counterSelector.innerText = 0;
};