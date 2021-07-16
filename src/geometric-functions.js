//random
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
//distance
  function distance(x1, y1, x2, y2) {
    let x = x1 - x2;
    let y = y1 - y2;
    let d = Math.sqrt(x * x + y * y);
  
    // d is the distance
    return d;
  }
  export {getRandomArbitrary,distance}