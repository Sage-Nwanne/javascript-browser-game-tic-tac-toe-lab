/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board;
let yourTurn = 'X';
let winner = false;
let tie = false;


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')
const restartBtn = document.querySelector('#restar')
/*-------------------------------- Functions --------------------------------*/
function init(){
    board = ['','','','','','','','',''];
    turn = 'X'
    winner = false;
    tie = false;

    function render(){

    }
    squareEls.forEach(square => {
        square.textContent = '';

    });
    messageEl.textContent = `${turn}'s turn`;
}


function updateBoard() {
    // dont understand
}


function updateMsg(){
    if (winner === false && tie === false){
        // render whose turn it is here
    } if (winner === false && tie === true){
        //render a tie message here
    } else{
        //render a congratulations message to player that won
    }
}







/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener('DOMContentLoaded', init);




// ========================== PSUEDO CODE ====================================

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
