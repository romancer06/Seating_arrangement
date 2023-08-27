document.addEventListener("DOMContentLoaded", () => {
  const generateButton = document.getElementById("generateButton");

  generateButton.addEventListener("click", () => {
    const numRowsInput = document.getElementById("numRows");
    const numColsInput = document.getElementById("numCols");

    const numRows = parseInt(numRowsInput.value, 10);
    const numCols = parseInt(numColsInput.value, 10);

    if (!isNaN(numRows) && numRows > 0 && !isNaN(numCols) && numCols > 0) {
      generateGrid(numRows, numCols);
    }
  });
});

function generateGrid(numRows, numCols) {
  const gridContainer = document.getElementById("gridContainer");
  gridContainer.innerHTML = "";

  const numSeats = numRows * numCols;

  for (let i = 0; i < numSeats; i++) {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridItem.textContent = `Seat ${i + 1}`;
    gridContainer.appendChild(gridItem);
  }
}

/* 이하 코드는 이전과 동일 */


/* shuffleArray 함수는 이전과 동일 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 이전 코드와 동일

let selectedSeats = [];

gridContainer.addEventListener("click", (event) => {
  const clickedGridItem = event.target;

  if (clickedGridItem.classList.contains("grid-item")) {
    if (!selectedSeats.includes(clickedGridItem)) {
      selectedSeats.push(clickedGridItem);
      clickedGridItem.classList.add("selected");
    } else {
      selectedSeats = selectedSeats.filter(item => item !== clickedGridItem);
      clickedGridItem.classList.remove("selected");
    }

    if (selectedSeats.length === 2) {
      swapSeats(selectedSeats[0], selectedSeats[1]);
      selectedSeats.forEach(item => item.classList.remove("selected"));
      selectedSeats = [];
    }
  }
});

function swapSeats(seat1, seat2) {
  const tempText = seat1.textContent;
  seat1.textContent = seat2.textContent;
  seat2.textContent = tempText;
}
