
let turn = "X";
let gameover = false;
let playerX = 0;
let player0 = 0;
let draw = 0;

//change turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      if (turn === "X"){
        boxtext.classList.remove("blue");
        boxtext.classList.add("orange");
      }
      
      if (turn === "0"){
        boxtext.classList.remove("orange");
        boxtext.classList.add("blue");
      }
      turn = changeTurn();
      checkwin();
      if (!gameover) {
        document.getElementsByClassName("info")[0].innerText = "Turn for Player: " + turn;
      }
      if (turn === "X") {
        document.getElementsByClassName("info")[0].classList.remove("blue");
        document.getElementsByClassName("info")[0].classList.remove("black");
        document.getElementsByClassName("info")[0].classList.add("orange");
      }
      if (turn === "0") {
        document.getElementsByClassName("info")[0].classList.remove("orange");
        document.getElementsByClassName("info")[0].classList.remove("black");
        document.getElementsByClassName("info")[0].classList.add("blue");
      }
    }
  });
});

// check win
const checkwin = () => {
  let checker = true;
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, 2, 5, 0],
    [3, 4, 5, 2, 15, 0],
    [6, 7, 8, 2, 25, 0],
    [0, 3, 6, -8, 14.8, 90],
    [1, 4, 7, 2, 14.8, 90],
    [2, 5, 8, 12, 14.8, 90],
    [0, 4, 8, 2, 15, 45],
    [2, 4, 6, 2, 15, 135],
  ];

  // who wins
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText = "Player " + boxtext[e[0]].innerText + " Won";
      document.querySelector(".wonsp").innerText = "Congratulations! Player " + boxtext[e[0]].innerText + " Won";      
      document.querySelector(".info").classList.add("black");
      document.getElementsByClassName("congrats")[0].classList.remove("hide");
      gameover = true;     

      if(boxtext[e[0]].innerText === "X"){
        document.querySelector(".para1").innerText = "X: " + ++playerX;
        document.querySelector(".line").classList.remove("bblue");
        document.querySelector(".line").classList.add("borange");
      }

      if(boxtext[e[0]].innerText === "0"){
        document.querySelector(".para2").innerText = "0 : " + ++player0;
        document.querySelector(".line").classList.remove("borange");
        document.querySelector(".line").classList.add("bblue");
      }

      document.querySelector( ".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector(".line").style.width = "26vw";
      checker = false;
    }
  });

  // draw
  if (
    boxtext[0].innerText !== "" &&
    boxtext[1].innerText !== "" &&
    boxtext[2].innerText !== "" &&
    boxtext[3].innerText !== "" &&
    boxtext[4].innerText !== "" &&
    boxtext[5].innerText !== "" &&
    boxtext[6].innerText !== "" &&
    boxtext[7].innerText !== "" &&
    boxtext[8].innerText !== "" && 
    checker == true
  ) {
    document.querySelector(".info").innerText = "Match Draw!!!!";
    document.querySelector(".wonsp").innerText = "Match Draw!!!!";
    document.querySelector(".info").classList.add("black");
    document.getElementsByClassName("congrats")[0].classList.remove("hide");
    gameover = true;
    document.querySelector(".para3").innerText = "Draw : " + ++draw;

  }
};

//reset
function resetall() {
  let boxtext = document.querySelectorAll(".boxtext");
  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  gameover = false;
  document.querySelector(".line").style.width = "0vw";
  document.getElementsByClassName("info")[0].innerText = "Turn for Player: " + turn;
  document.querySelector(".para1").innerText = "X: 0";
  document.querySelector(".para2").innerText = "0 : 0";
  document.querySelector(".para3").innerText = "Draw : 0" ;
  player0 = 0;
  playerX = 0;
  draw = 0;
}

function reset(){
  let boxtext = document.querySelectorAll(".boxtext");
  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  gameover = false;
  document.querySelector(".line").style.width = "0vw";
  document.getElementsByClassName("info")[0].innerText = "Turn for Player: " + turn;
}

function closeit() {
  document.getElementsByClassName("congrats")[0].classList.add("hide");
  reset();
}
