function knapSackGreedy(capacity, weights, profits) {
  const n = profits.length;
  let load = 0;
  let val = 0;
  for (let i = 0; i < n && load < capacity; i++) {
    if (weights[i] <= capacity - load) {
      val += profits[i];
      load += weights[i];
      // console.log('using item ' + (i + 1) + ' for the solution');
    } else {
      const r = (capacity - load) / weights[i];
      val += r * profits[i];
      load += weights[i];
      // console.log('using ratio of ' + r + ' for item ' + (i + 1) + ' for the solution');
    }
  }
  return val;
}

const objects = [0,1,2];
const profits = [3,4,5];
const weights = [2,3,4];
const capacity = 5;
let maxprofit = 0;
let xoffset = 0;

maxprofit = knapSackGreedy(capacity, weights, profits);
console.log(knapSackGreedy(capacity, weights, profits));

function setup() {
  createCanvas(800,600);
}

function draw() {
  background(255);
  stroke(0);
  text('Objects',100,100);
  text('Profits',100,125);
  text('Weights',100,150);
  for(let i=0;i<objects.length;i++){
    noFill();
    rect(150+xoffset,85,50,25);
    text(objects[i],170+xoffset,100);
    rect(150+xoffset,110,50,25);
    text(profits[i],170+xoffset,125);
    rect(150+xoffset,135,50,25);
    text(weights[i],170+xoffset,150);
    xoffset += 50;
  }
  text('Max profit: ',100,175);
  text(maxprofit,170,175)
  xoffset = 0;
}