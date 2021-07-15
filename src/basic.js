const canvas = document.querySelector("#canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
const context = canvas.getContext("2d");
console.log(getRandomArbitrary(5, 100));

// resize
addEventListener("resize", function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  context.fillStyle = "#0C1C2A";
  context.fillRect(0, 0, canvas.width, canvas.height);
});

 // Animate
 function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
  animate();