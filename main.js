const canvas = document.getElementById("MyCanvas");
canvas.width = 200;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width/2, canvas.width*0.85);
const car = new Car(road.getLaneCenter(1), 100, 30, 50);

Animate();

function Animate() {
  car.update(road.borders);

  canvas.height = window.innerHeight;

  ctx.save();

  ctx.translate(0, -car.y + canvas.height * 0.6);

  road.draw(ctx);
  car.draw(ctx);

  ctx.restore();

  requestAnimationFrame(Animate);
}
