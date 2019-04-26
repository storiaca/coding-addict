let counter = document.querySelector(".counter");
const addCount = document.getElementById("addCountBtn");
const lowerCount = document.getElementById("lowerCountBtn");

let count = 0;

function incrementCounter() {
  count++;
  counter.innerHTML = count;
  chooseColor("0");
  animateCount();
}
function decrementCounter() {
  count--;
  counter.innerHTML = count;
  chooseColor("0");
  animateCount();
}

function chooseColor(zero) {
  if (counter.innerHTML > zero) {
    return (counter.style.color = "#4caf50");
  } else if (counter.innerHTML === zero) {
    return (counter.style.color = "#fff");
  } else if (counter.innerHTML < zero) {
    return (counter.style.color = "#f00");
  }
}

function animateCount() {
  counter.animate([{ opacity: "0.2" }, { opacity: "1.0" }], {
    duration: 1000,
    fill: "forwards"
  });
}

addCount.addEventListener("click", incrementCounter);
lowerCount.addEventListener("click", decrementCounter);
