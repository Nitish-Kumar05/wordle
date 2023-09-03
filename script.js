const tiles = document.querySelector(".tile-container");
const keyboard = document.querySelector(".key-container");
const wordle = "apple";

const keys = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "ENTER",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "<--",
];

const guessRows = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

let currentRow = 0;
let currentTile = 0;

// To display tiles in the display
guessRows.forEach((guessRow, guessRowIndex) => {
  const rowElement = document.createElement("div");

  // Appending the guess row index number for easy reference
  rowElement.setAttribute("id", "guessRow-" + guessRowIndex);

  // To create 5 inside tile elements
  guessRow.forEach((guess, guessIndex) => {
    const tileElement = document.createElement("div");

    // Same appending as above for clear reference
    tileElement.setAttribute(
      "id",
      "guessRow-" + guessRowIndex + "-tile-" + guessIndex
    );
    tileElement.classList.add("tile");
    rowElement.append(tileElement);
  });
  tiles.append(rowElement);
});

// For displaying keyboard in the display
keys.forEach((key) => {
  const buttonElement = document.createElement("button");
  buttonElement.textContent = key;
  buttonElement.setAttribute("id", key);
  buttonElement.addEventListener("click", () => handleClick(key));
  keyboard.append(buttonElement);
});

const handleClick = (letter) => {
  console.log("clicked", letter);
  addLetter(letter);
};

// For adding letters in the tiles
const addLetter = (letter) => {
  const tile = document.getElementById(
    "guessRow-" + currentRow + "-tile-" + currentTile
  );
  tile.textContent = letter;
  guessRows[currentRow][currentTile] = letter;
  tile.setAttribute("data", letter);
  currentTile++;
};
