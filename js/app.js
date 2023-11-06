const url = "https://api.adviceslip.com/advice";
const container = document.querySelector(".container");
const number = document.querySelector(".container__title--number");
const btn = document.querySelector(".container__circle");
const advice = document.querySelector(".container__text");

function show(x, y) {
  number.innerHTML = `#${x}`;
  advice.innerHTML = `"${y}"`;
}
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    show(data.slip.id, data.slip.advice);
  });

btn.addEventListener("click", () => {
  // show("", "");

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      show(data.slip.id, data.slip.advice);
    });
});
