const button = document.querySelector('button');
const inputNum = document.querySelector('#dicenumber');

button.addEventListener('click', function(e) {
    const minNum = 1;
    const maxNum = 20;
    const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    inputNum.textContent = `${randomNum}`;
});