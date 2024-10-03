Wordle Game Clone
A simple Wordle clone built using React. The game picks a random 5-letter word and gives the user six attempts to guess it correctly. The UI provides feedback on the correctness of the guess by coloring the tiles to show how close the guess was to the actual word.

Features
Random 5-letter word selection.
Six chances to guess the word.
Feedback via colored tiles:
Green: Letter is in the correct position.
Yellow: Letter is in the word but in the wrong position.
Gray: Letter is not in the word.
Keyboard input handling with real-time updates to the guess.
Simple design and easy-to-understand gameplay.
Demo
Here's a quick overview of how the game works:

Guess the 5-letter word using your keyboard.
The game will check your guess and color the tiles:
Green for correct letters in the right spot.
Yellow for letters in the word but wrong spot.
Gray for incorrect letters.
You have 6 attempts to find the solution!
Technologies Used
React: For building the UI and managing the game state.
Datamuse API: For fetching random 5-letter words as solutions.
Getting Started
Follow these instructions to get the project running locally.

Prerequisites
Ensure you have the following installed:
Node.js (v14+)
npm (v6+)

Installation
Clone the repository: git clone https://github.com/sajanshr/Wordle.git
Navigate into the project directory: cd Wordle
Install dependencies: npm install
Run the app in development mode: npm start

How to Play
Open the game in your browser.
Use your keyboard to guess a 5-letter word.
Press Enter to submit your guess or Backspace to delete a character.
The game will highlight the letters of your guess based on their correctness.
You have 6 tries to guess the correct word.
API Used
This project uses the Datamuse API to fetch 5-letter words. The API is queried to return a random list of 5-letter words, from which the solution is selected.

API URL used: https://api.datamuse.com/words?sp=?????&max=5
