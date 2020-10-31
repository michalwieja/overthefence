const player = document.querySelector(".player");
const game = document.querySelector(".container");
const start = document.querySelector("#start");
const restart = document.querySelector("#restart");
const fence = document.querySelector(".fence");

game.addEventListener("click", () => {
  player.classList.add("jump");
  setTimeout(() => {
    player.classList.remove("jump");
  }, 700);
});

start.addEventListener("click", () => fence.classList.add("move"));
restart.addEventListener("click", () => window.location.reload(true));

setInterval(() => {
  let playerTop = player.offsetTop;
  let fenceLeft = fence.offsetLeft;

  if (fenceLeft > 50 && fenceLeft < 90 && playerTop > 247) {
    alert("ała");
    game.style.display = "none";
    start.style.display = "none";
    restart.style.display = "block";
  }
}, 10);
