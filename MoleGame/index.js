var holes = document.querySelectorAll('.hole');
var scoreBoard = document.querySelector('.score');
var moles = document.querySelectorAll('.mole');
let lastHole;
let score = 0;

//pass on each mole in moles class. when they get clicked- score up
moles.forEach((mole) => mole.addEventListener("click", () => {
    score++; scoreBoard.textContent = score; }));

function startGame() { //referes to "bottomUp"
    scoreBoard.textContent = 0; //initizlized the acore board
    popMole();
}

function popMole(){ // main function 
    var time = Math.round(Math.random() * (1000 - 500) + 500);
    var hole; // gets random hole
    var index = Math.floor(Math.random() * holes.length);
    var hole = holes[index];
    (hole === lastHole) ? randomHole(holes) : lastHole = hole;
    hole.classList.add("up"); 
    setTimeout(() => {hole.classList.remove('up'); {popMole();}}, time);
}
