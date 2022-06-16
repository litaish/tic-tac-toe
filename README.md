# tic-tac-toe
Tic-tac-toe game in JavaScript

The game logic is split into 3 main parts:
- Player - factory pattern - a template for creating new players.
Defines player marker and if the player goes first.

- Game controller - module pattern - a module for game logic,
contains marker placement functionality.

- Game board - module pattern - a module for game board logic. 
Defines an array of markers, renders the game board for the user
to see.
