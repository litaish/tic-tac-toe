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

    // All winning conditions according to cell index
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function renderBoard(board) {

        const boardChildren = board.children;

        for (let i = 0; i < boardChildren.length; i++) {

            boardChildren[i].innerText = boardArr[i];

        }
    }

    function resetBoard(board) {

        boardArr = [
            " ", " ", " ",
            " ", " ", " ",
            " ", " ", " "
        ];

    }

    return {
        boardArr: boardArr,
        renderBoard: renderBoard,
        winningConditions: winningConditions,
        resetBoard: resetBoard,
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

    /**
     * Checking each condition to board array indexes
     */
    function _checkForWin() {

            // Return winning condition
            const winningCondition = gameBoard.winningConditions.find(condition => {

            let a = gameBoard.boardArr[condition[0]];
            let b = gameBoard.boardArr[condition[1]];
            let c = gameBoard.boardArr[condition[2]];
            
            return ((a !== " " && b !== " " && c !== " ") && (a === b && a === c))

        })

        // Return winning symbol
        if (winningCondition !== undefined) _handleWin(gameBoard.boardArr[winningCondition[0]]);

    }

    /**
     * Sets winner player, stops the game
     */
    function _handleWin(winningSymbol) {

        // Set winner player and winning message
        if (_p1.marker === winningSymbol) {

            _victoryIconP1.style.visibility = "visible";

        } else {

            _victoryIconP2.style.visibility = "visible";

        }

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

            _checkForWin();

            _changeTurn();

        } 

    }

})()



