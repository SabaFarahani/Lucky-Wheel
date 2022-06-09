//By click on spin it rounds

const tryAgain = document.querySelector(".again");
const sound = document.querySelector("#wheel");

(function () {
  const wheelContainer = document.querySelector(".wheel-container");
  const btn = document.querySelector(".spin");
  let deg = 0;

  btn.addEventListener("click", () => {
    sound.play();
    btn.style.pointerEvents = "none";
    deg = Math.floor(5000 + Math.random() * 5000);
    wheelContainer.style.transition = "all 5s ease-out";
    wheelContainer.style.transform = `rotate(${deg}deg)`;
  });

  wheelContainer.addEventListener("transitioned", () => {
    btn.style.pointerEvents = "auto";
    wheelContainer.style.transition = "none";
    const currentDeg = deg % 360;
    wheelContainer.style.transform = `rotate(${currentDeg}deg)`;
  });
})();

//By click on Try one more time the page will refresh to spin again
tryAgain.addEventListener("click", () => {
  document.location.reload();
});
