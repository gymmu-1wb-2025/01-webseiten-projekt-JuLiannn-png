let count = 0;

function increaseCount() {
  let timer = document.querySelector("#timer");
  count = count + 1;
  timer.textContent = count;
}
setInterval(increaseCount, 2000);
