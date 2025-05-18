let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

function getRandomColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener(
  "click",
  function () {
    console.log(fighters.length);
    let randomNum1 = Math.floor(Math.random() * fighters.length);
    let randomNum2 = Math.floor(Math.random() * fighters.length);
    stageEl.textContent = `${fighters[randomNum1]} vs ${fighters[randomNum2]}`;
    this.style.backgroundColor = getRandomColor();
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
  },
  false
);
