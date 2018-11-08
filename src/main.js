let canvas = document.getElementById('purple-rain');
let ctx = canvas.getContext('2d');

const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;
const DROPS_COUNT = 1000;
let lastTime = 0;
let drops = [];

for (let i = 0; i <= DROPS_COUNT; i++) {
  drops.push(new Drop(GAME_HEIGHT, GAME_WIDTH));
}

function purpleRainLoop(timeStamp) {
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
  setup(ctx, GAME_HEIGHT, GAME_WIDTH);

  for (var i = 0; i < drops.length; i++) {
    drops[i].draw(ctx);
    drops[i].update(deltaTime);
  }

  requestAnimationFrame(purpleRainLoop);
}
requestAnimationFrame(purpleRainLoop);