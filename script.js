'use strict';


let ansSalary = Math.trunc(Math.random() * 20) + 1;
console.log(ansSalary);
let score = 20;
let highs = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);         //Number開頭要大寫
    console.log(guess, typeof guess);

    if (!guess) {                           //沒答案
        displayMessage('No number!');
    } else if (guess === ansSalary) {       //答對
        displayMessage('Correct Number!');
        document.querySelector('.ans').textContent = ansSalary;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.ans').style.width = '30rem';              //擴大文字區域

        if (score > highs) {                //檢查最高分
            highs = score;
            document.querySelector('.highscore').textContent = highs;
        }
    } else {                                //答錯
        if (score > 1) {                      //繼續玩 (高於0分)
            displayMessage(guess > ansSalary ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage('You Lose!!!');
            document.querySelector('.score').textContent = 0;
        }
    }
})


document.querySelector('.again').addEventListener('click', function () {
    ansSalary = Math.trunc(Math.random() * 20) + 1;         //重訂目標
    console.log(ansSalary);                                 //終端機印出答案
    score = 20;

    //顯示更新
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.ans').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = "gray";
    document.querySelector('.ans').style.width = '15rem';


})