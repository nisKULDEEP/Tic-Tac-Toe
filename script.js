console.log("Welcome to tic tac toe");

let turn = "X";
let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");

const changeTurn = () => {
  return (turn = turn == "X" ? "0" : "X");
};

//Check winner
const checkWin = () => {
  let boxText = document.querySelectorAll(".boxText");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  wins.forEach((win) => {
    if (
      boxText[win[0]].innerText === boxText[win[1]].innerText &&
      boxText[win[1]].innerText === boxText[win[2]].innerText &&
      boxText[win[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxText[win[0]].innerText + "Winner";
      console.log("WINNER");
      gameOver.play();
      document.querySelector(".imgBox").style.display = "block";
      return false;
    }
  });
  return true;
};

//Game logic
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  boxText.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      changeTurn();
      audioTurn.play();
      let status = checkWin();
      if (!status) {
        console.log(status);
        document.querySelector(".info").innerText = "Turn for " + `"${turn}"`;
      }
    } else {
      alert(" Box already filled");
    }
  });
});

// Reset logic
const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  let boxText = document.querySelectorAll(".boxText");
  boxText.forEach((x) => (x.innerHTML = ""));
});
