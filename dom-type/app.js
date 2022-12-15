let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.009;
let _imgArr;
let bird;

function init() {
  _imgArr = document.getElementsByClassName("_imgArr");
  bird = document.getElementsByClassName("layer-03")[0];
  window.addEventListener("mousemove", handleMove, false);

  document.body.addEventListener("mouseleave", () => {
    x = 0;
    y = 0;
  });

  function handleMove(e) {
    x = e.clientX - window.innerWidth / 2;
    y = e.clientY - window.innerHeight / 2;
  }
  loop();
}

function loop() {
  mx += (x - mx) * speed;
  my += (y - my) * speed;

  bird.style.transform = `
    translate3d(${(mx / 7) * -1}px, ${(my / 7) * -1}px, 0)
  `;
  _imgArr[1].style.transform = `
    translate3d(${(mx / 10) * -1}px, ${(my / 10) * -1}px, 0)
  `;
  _imgArr[2].style.transform = `
    translate3d(${(mx / 5) * -1}px, ${(my / 5) * -1}px, 0)
  `;
  _imgArr[3].style.transform = `
    translate3d(${(mx / 3) * -1}px, ${(my / 3) * -1}px, 0)
  `;
  window.requestAnimationFrame(loop);
}

window.onload = function () {
  init();
};
