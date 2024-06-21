const canvas = document.getElementById("MyCanvas");
canvas.width = 200;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width * 0.85);
const car = new Car(road.getLaneCenter(1), 100, 30, 50, "OG");
const traffic = [new Car(road.getLaneCenter(1), -100, 30, 50, "NOG", 2)];

Animate();

function Animate() {
  for (let i = 0; i < traffic.length; i++) {
    traffic[i].update(road.borders, []);
  }
  car.update(road.borders, traffic);

  canvas.height = window.innerHeight;

  ctx.save();

  ctx.translate(0, -car.y + canvas.height * 0.6);

  road.draw(ctx);
  for (let i = 0; i < traffic.length; i++) {
    traffic[i].draw(ctx, "red");
  }
  car.draw(ctx, "black");

  ctx.restore();

  requestAnimationFrame(Animate);
}
