import { compareWord } from "./utils/compareWord";
import { fetchWord } from "./utils/fetchWord";
import { populateRow } from "./utils/populateRow";
import { validateWord } from "./utils/validateWord";

let currentRow = 0;
let currentCol = 0;
let word = "";

const wordGrid = document.getElementById("word-grid");

const handleInput = async (e) => {
  const input = e.target;
  if (!/^[a-zA-Z]$/.test(input.value)) {
    input.value = input.value.replace(/[^a-zA-Z]/g, "");
    return;
  }

  input.value = input.value.toUpperCase();

  const rowsArray = wordGrid.children;
  const row = rowsArray[currentRow].children;
  row[currentCol].setAttribute("disabled", "true");

  if (currentCol < row.length - 1) {
    currentCol++;
  } else if (currentCol === row.length - 1) {
    const res = compareWord(
      Array.from(row)
        .map((cell) => {
          return cell.value;
        })
        .join(""),
      word.toUpperCase()
    );

    res.forEach((val, i) => {
      row[i].classList.add(val);
    });

    if (res.every((val) => val === "C")) {
      wordGrid.removeEventListener("input", handleInput);
      return;
    }

    currentRow++;
    currentCol = 0;
  }

  if (currentRow === rowsArray.length) {
    console.log(currentRow);
    return;
  }

  const nextRow = rowsArray[currentRow].children;
  nextRow[currentCol].removeAttribute("disabled");
  nextRow[currentCol].focus();
};

wordGrid.addEventListener("input", handleInput);

const app = async () => {
  const grid = document.getElementById("word-grid");
  let rowArray = Array.from({ length: 5 }, () => populateRow(5));
  rowArray.forEach((row) => grid.appendChild(row));

  rowArray = grid.children;
  let row = rowArray[currentRow].children;

  const result = document.getElementById("result");
  result.textContent = "Loading...";
  try {
    word = await fetchWord().then((res) => res.word);
    result.textContent = "Word loaded";
    row[currentCol].removeAttribute("disabled");
    row[currentCol].focus();
  } catch (error) {
    result.textContent = "Not found";
  }
};

app();
