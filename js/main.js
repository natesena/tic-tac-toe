var player1 = {
    name: "player1name",
    turn: true,
};
var player2 = {
    name: "player2name",
    turn: false,
};

function addX(){
    //find out which box you clicked
    var cardId = this.getAttribute('data-id');
    //add an x inside this box
    var x = document.createElement('p');
    x.innerHTML = "x";
    this.appendChild(x);
    this.setAttribute('style', 'background-color: blue;')
}

function addO(){
    //find out which box you clicked
    var cardId = this.getAttribute('data-id');
    //add an x inside this box
    var x = document.createElement('p');
    x.innerHTML = "O";
    this.appendChild(x);
    this.setAttribute('style', 'background-color: red;');
}

// function turn(){
//     if(player1.turn){
//         addX();
//         player1.turn = !player1.turn;
//     }
//     else{
//         addO();
//         player2.turn = !player2.turn;
//     }
// }

function setBoard(){
    for(var i = 0; i < 9; i++){
        var boxEl = document.createElement('div');
        boxEl.setAttribute("style", "background-color: white;");
        boxEl.setAttribute('data-id', i);
        boxEl.className += "box";
        boxEl.addEventListener('click', addX);
        // boxEl.addEventListener('click', turn);
        //boxEl.addEventListener('click', addO);
        document.getElementById('game-board').appendChild(boxEl);
    }
}

//want to click a div and add an x to it

setBoard();
