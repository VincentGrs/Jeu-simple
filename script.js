
let roundScore1 = 0;
let roundScore2 = 0;
let globalScore1 = 0;
let globalScore2 = 0;
let currentPlayer = 1;

function rollDice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    document.getElementById('diceResult').innerHTML = getDiceDots(randomNumber);

    if (randomNumber !== 1) {
        if (currentPlayer === 1) {
            roundScore1 += randomNumber;
            document.getElementById('roundScore1').textContent = roundScore1;
        } else {
            roundScore2 += randomNumber;
            document.getElementById('roundScore2').textContent = roundScore2;
        }

        checkWinCondition();
    } else {
        switchPlayer();
    }
}

function hold() {
    if (currentPlayer === 1) {
        globalScore1 += roundScore1;
        document.getElementById('globalScore1').textContent = globalScore1;
    } else {
        globalScore2 += roundScore2;
        document.getElementById('globalScore2').textContent = globalScore2;
    }

    checkWinCondition();
    switchPlayer();
}

function checkWinCondition() {
    if (currentPlayer === 1 && globalScore1 >= 100) {
        alert("Player 1 wins!");
        newGame();
    } else if (currentPlayer === 2 && globalScore2 >= 100) {
        alert("Player 2 wins!");
        newGame();
    }
}

function getDiceDots(number) {
    let dotsHtml = '';
    switch (number) {
        case 1:
            dotsHtml += `<p class="dot position-absolute rounded-circle dot-center"></p>`;
            break;
        case 2:
            dotsHtml += `<p class="dot position-absolute rounded-circle dot-top-left"></p>
                        <p class="dot position-absolute rounded-circle dot-bottom-right"></p>`;
            break;
        case 3:
            dotsHtml += `<p class="dot position-absolute rounded-circle dot-top-left"></p>
                        <p class="dot position-absolute rounded-circle dot-center"></p>
                        <p class="dot position-absolute rounded-circle dot-bottom-right"></p>`;
            break;
        case 4:
            dotsHtml += `<p class="dot position-absolute rounded-circle dot-top-left"></p>
                        <p class="dot position-absolute rounded-circle dot-bottom-right"></p>
                        <p class="dot position-absolute rounded-circle dot-top-right"></p>
                        <p class="dot position-absolute rounded-circle dot-bottom-left"></p>`;
            break;
        case 5:
            dotsHtml += `<p class="dot position-absolute rounded-circle dot-top-left"></p>
                        <p class="dot position-absolute rounded-circle dot-bottom-right"></p>
                        <p class="dot position-absolute rounded-circle dot-center"></p>
                        <p class="dot position-absolute rounded-circle dot-top-right"></p>
                        <p class="dot position-absolute rounded-circle dot-bottom-left"></p>`;
            break;
        case 6:
            dotsHtml += `<p class="dot position-absolute rounded-circle dot-top-left"></p>
                        <p class="dot position-absolute rounded-circle dot-bottom-right"></p>
                        <p class="dot position-absolute rounded-circle dot-middle-left"></p>
                        <p class="dot position-absolute rounded-circle dot-middle-right"></p>
                        <p class="dot position-absolute rounded-circle dot-top-right"></p>
                        <p class="dot position-absolute rounded-circle dot-bottom-left"></p>`;
            break;
        default:
            break;
    }
    return dotsHtml;
}

function switchPlayer() {
    roundScore1 = 0;
    roundScore2 = 0;

    document.getElementById('roundScore1').textContent = roundScore1;
    document.getElementById('roundScore2').textContent = roundScore2;

    currentPlayer = (currentPlayer === 1) ? 2 : 1;

    updatePlayerBackground();
}

function updatePlayerBackground() {
    const player1Container = document.getElementById('player1Container');
    const player2Container = document.getElementById('player2Container');

    if (currentPlayer === 1) {
        player1Container.classList.add('bg-light');
        player2Container.classList.remove('bg-light');
    } else {
        player2Container.classList.add('bg-light');
        player1Container.classList.remove('bg-light');
    }
}

function newGame() {
    roundScore1 = 0;
    roundScore2 = 0;
    globalScore1 = 0;
    globalScore2 = 0;

    document.getElementById('roundScore1').textContent = roundScore1;
    document.getElementById('roundScore2').textContent = roundScore2;
    document.getElementById('globalScore1').textContent = globalScore1;
    document.getElementById('globalScore2').textContent = globalScore2;

    currentPlayer = 1;

    updatePlayerBackground();
}

document.addEventListener('DOMContentLoaded', function () {
    newGame();
});