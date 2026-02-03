const numberDisplay = document.querySelector('.number-display');
const generateBtn = document.getElementById('generate-btn');
const historyList = document.getElementById('history-list');
const themeSwitch = document.getElementById('checkbox');

const generateNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
};

const displayNumbers = (numbers) => {
    const numberElements = numberDisplay.querySelectorAll('.number');
    numberElements.forEach((element, index) => {
        element.textContent = numbers[index];
    });
};

const addToHistory = (numbers) => {
    const listItem = document.createElement('li');
    listItem.textContent = numbers.join(', ');
    historyList.appendChild(listItem);
};

generateBtn.addEventListener('click', () => {
    const newNumbers = generateNumbers();
    displayNumbers(newNumbers);
    addToHistory(newNumbers);
});

// Theme switching
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        themeSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

themeSwitch.addEventListener('change', switchTheme, false);
