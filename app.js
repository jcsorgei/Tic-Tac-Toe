let cells = document.querySelectorAll(".row > div");
let result = document.querySelector(".result");


for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
}

let turn = 1; // 1 = X's turn; 2 = O's turn
let count = 0;
let isOver = false;

function cellClicked(event) {

    if (!isOver) {

        if (turn == 1) {
            event.target.textContent = "X";
            turn = 2;
            count++;
        }
        else {
            event.target.textContent = "O";
            turn = 1;
            count++;
        }
        if (didSomeoneWin()) {
            result.textContent = (turn == 1 ? "O" : "X") + " wins!";
            isOver = true;
        }
        else if (count == 9) {
            result.textContent = "Tie!"
            isOver = true;
        }

    }
    else {
        turn = 1;
        isOver = false;
        count = 0;
        clearBoard();
        result.textContent = "";
    }


}

function didSomeoneWin() {

    let winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (win of winConditions) {
        if (cells[win[0]].textContent == cells[win[1]].textContent && cells[win[1]].textContent == cells[win[2]].textContent && cells[win[0]].textContent != 0) {
            return true;
        }
    }

}

function clearBoard() {
    for (cell of cells) {
        cell.textContent = "";
    }
}