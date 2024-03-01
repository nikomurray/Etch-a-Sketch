const gridBtn = document.getElementById("gridBtn");
const clearBtn = document.getElementById("clearBtn");
const shadeBtn = document.getElementById("shadeBtn");
const randomBtn = document.getElementById("randomBtn");
const eraserBtn = document.getElementById("eraserBtn");
const colorBtn = document.getElementById("colorBtn");
const slider = document.getElementById("slider");
const sliderValue = document.getElementById("sliderValue");

// Function to generate a random hex number of 3 digits
function generateRandomHex() {
  // Generate a random number between 0 and 4095 (3 hex digits)
  const randomNum = Math.floor(Math.random() * 4096);
  // Convert the number to hex and pad with zeros if necessary
  const hexNum = randomNum.toString(16).padStart(3, "0");
  return hexNum;
}

class sketchAreaConstructor {
  constructor() {
    this.sketchArea = document.getElementById("sketchArea");
    this.size = 16;
    this.color = "#000";
  }
  displayGrid() {
    this.sketchArea.innerHTML = "";
    this.sketchArea.style.display = "grid";
    this.sketchArea.style.gridTemplateColumns = `repeat(${this.size},1fr)`;
    this.sketchArea.style.gridTemplateRows = `repeat(${this.size},1fr)`;
    for (let i = 0; i < `${this.size * this.size}`; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.addEventListener("mouseover", () => {
        square.style.background = this.color;
      });
      this.sketchArea.appendChild(square);
    }
  }
  setGridSize(sizeValue) {
    this.size = sizeValue;
  }

  setGridColor(color) {
    this.color = color;
  }
}

const sketchAreaGrid = new sketchAreaConstructor();

sketchAreaGrid.displayGrid();

gridBtn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.classList.toggle("border");
  });
});

clearBtn.addEventListener("click", () => {
  sketchAreaGrid.displayGrid();
});

eraserBtn.addEventListener("click", () => {
  sketchAreaGrid.setGridColor("#fff");
});

randomBtn.addEventListener("click", () => {
  const randomColor = `#${generateRandomHex()}`;
  sketchAreaGrid.setGridColor(randomColor);
});

colorBtn.addEventListener("input", () => {
  const colorSelect = colorBtn.value
  sketchAreaGrid.setGridColor(colorSelect);
});
