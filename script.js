let boxes = document.querySelectorAll('.box');
let reset_btn = document.querySelector('.reset-button');
let winnerMessage = document.querySelector('.winner-message');
let w_msg = document.querySelector('.w_msg');
let closeMessage = document.querySelector('.closeMessage');

let playerOne = true;
let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
let boxClicked = 1;

boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        if (playerOne) {
            box.innerHTML = 'X'
            playerOne = false
        } else {
            box.innerHTML = 'O'
            playerOne = true
        }
        box.disabled = true;
        checkWinning()
        boxClicked += 1;
    });
})

function checkWinning() {
    if (boxClicked === 9) {
        setTimeout(() => {
            w_msg.innerHTML = "Match is draw to examine the winner play next match!";
            winnerMessage.style.display = "block";
        })
        disabledboxes()
    }
    for (let pattern of winningPattern) {
        let valueOne = boxes[pattern[0]].innerHTML
        let valueTwo = boxes[pattern[1]].innerHTML
        let valueThree = boxes[pattern[2]].innerHTML
        if (valueOne !== '' && valueTwo !== '' && valueTwo !== '') {
            if (valueOne === valueTwo && valueTwo === valueThree) {
                setTimeout(() => {
                    w_msg.innerHTML = "You choosed " + valueOne + " and you are the winner";
                    winnerMessage.style.display = "block";
                    boxClicked = 1;
                })
                disabledboxes()
            }
        }
    }

}

function disabledboxes() {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

reset_btn.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.innerHTML = ''
        box.disabled = false
        boxClicked = 1;
    })
});

closeMessage.addEventListener('click', () => {
    winnerMessage.style.display = "none";
});


