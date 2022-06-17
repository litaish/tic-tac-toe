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
    const _board = document.querySelector(".board");
    const _victoryIconP1 = document.getElementById("vi_p1");
    const _victoryIconP2 = document.getElementById("vi_p2");

    // Events
    _board.addEventListener("click", _placeMarkers);

    function _initCurrentPlayer() {

        (_p1.firstTurn) === true ? _currentPlayer = _p1 : _currentPlayer = _p2;

    }

    _initCurrentPlayer();

    function _addMarkerShadow(target) {

        (_currentPlayer.marker === "X") ? target.classList.toggle("blue-shadow") : target.classList.toggle("red-shadow");

    }

    function _changeTurn() {

        (_currentPlayer === _p1) ? _currentPlayer = _p2 : _currentPlayer = _p1;

    }

    function _searchForWin() {

    }

    /**
     * Event gets automatically passed in the callback 
     * function for board event listener
     *  */
    function _placeMarkers(event) {

        if (event.target.innerText === "") {

            // Get data-index of clicked element, change element in array
            gameBoard.boardArr[event.target.dataset.index] = _currentPlayer.marker;

            gameBoard.renderBoard(_board);

            _addMarkerShadow(event.target);

            _changeTurn();

        } 

    }

})()



