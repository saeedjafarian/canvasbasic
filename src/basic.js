const canvas = document.querySelector("#canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
const context = canvas.getContext("2d");

// resize
addEventListener("resize", function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

 // Animate
 function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
  animate();