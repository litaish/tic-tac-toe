/**
 * Gameboard module renders the tic-tac-toe board depending on 
 * user choice
 */
let gameBoard = (function () {
    "use strict";

    const boardArr = [
        " ", " ", " ",
        " ", " ", " ",
        " ", " ", " "
    ];

    function renderBoard(board) {

        const boardChildren = board.children;

        for (let i = 0; i < boardChildren.length; i++) {

            boardChildren[i].innerText = boardArr[i];

        }
    }


    return {
        boardArr: boardArr,
        renderBoard: renderBoard,
    }
})();

/**
 * Player factory - a template for player objects for the game
 * Assigns a player marker
 */
 const Player = (marker, firstTurn) => {
    "use strict";

    return {marker, firstTurn};
}

/**
 * Game controller - controls the flow of the game
 */
let gameController = (function () {
    "use strict";

    // Player objects
    const _p1 = Player("X", true);
    const _p2 = Player("O", false);
    let _currentPlayer;

    // DOM
    const _turnMsg = document.getElementById("turn_marker");
    const _board = document.querySelector(".board");

    // Events
    _board.addEventListener("click", _placeMarkers);

    function initCurrentPlayer() {

        (_p1.firstTurn) === true ? _currentPlayer = _p1 : _currentPlayer = _p2;

    }

    initCurrentPlayer();

    function _renderTurnMsg() {

        _turnMsg.innerText = _currentPlayer.marker;

    }

    /**
     * Event gets automatically passed in the callback 
     * function for board event listener
     *  */
    function _placeMarkers(event) {

        _renderTurnMsg(_currentPlayer);

        // Get data-index of clicked element, change element in array
        gameBoard.boardArr[event.target.dataset.index] = _currentPlayer.marker;

        // render changes via renderBoard(board)
        gameBoard.renderBoard(_board);

    }

})()



