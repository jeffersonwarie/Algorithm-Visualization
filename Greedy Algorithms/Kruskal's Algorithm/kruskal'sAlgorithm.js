const INF = Number.MAX_SAFE_INTEGER;

const find = (i, parent) => {
  while (parent[i]) {
    i = parent[i];
  }
  return i;
};

const union = (i, j, parent) => {
  if (i !== j) {
    parent[j] = i;
    return true;
  }
  return false;
};

const initializeCost = graph => {
  const cost = [];
  const { length } = graph;
  for (let i = 0; i < length; i++) {
    cost[i] = [];
    for (let j = 0; j < length; j++) {
      if (graph[i][j] === 0) {
        cost[i][j] = INF;
      } else {
        cost[i][j] = graph[i][j];
      }
    }
  }
  return cost;
};

const kruskal = graph => {
  const { length } = graph;
  const parent = [];
  let ne = 0;
  let a;
  let b;
  let u;
  let v;
  const cost = initializeCost(graph);
  while (ne < length - 1) {
    for (let i = 0, min = INF; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (cost[i][j] < min) {
          min = cost[i][j];
          a = u = i;
          b = v = j;
        }
      }
    }
    u = find(u, parent);
    v = find(v, parent);
    if (union(u, v, parent)) {
      ne++;
    }
    cost[a][b] = cost[b][a] = INF;
  }
  return parent;
};

const graph = [
  [0, 2, 4, 0, 0, 0],
  [2, 0, 2, 4, 2, 0],
  [4, 2, 0, 0, 3, 0],
  [0, 4, 0, 0, 3, 2],
  [0, 2, 3, 3, 0, 2],
  [0, 0, 0, 2, 2, 0]
];

/*let graph = [];
let nv = prompt('Enter number of vertices: ','');
for(let i=0;i<nv;i++){
  graph.push([]);
  for(let j=0;j<nv;j++){
    let ew = prompt('Enter edge weight: ','');
    graph[i].push(ew);
  }
}*/

let nodelocation = [];
let mstindices = [];
let mstloopindex = 1;

for(let i=0;i<graph.length;i++){
  let xcoord = Math.floor(Math.random() * (700 - 100 + 1) ) + 100;
  let ycoord = Math.floor(Math.random() * (500 - 100 + 1) ) + 100;
  nodelocation.push([xcoord,ycoord]);
}

const parent = kruskal(graph);
console.log('Edge   Weight');
for (i = 1; i < graph.length; i++) {
  console.log(parent[i] + ' - ' + i + '   ' + graph[i][parent[i]]);
  mstindices.push([parent[i],[i]]);
}

function setup() {
  createCanvas(800,600);
}

function draw() {
  background(0);
  frameRate(1);
  strokeWeight(1);
  for(let i=0;i<graph.length;i++){
    noFill();
    circle(nodelocation[i][0],nodelocation[i][1],30);
    stroke(255);
    text(i,nodelocation[i][0]-4,nodelocation[i][1]+4);
  }
  for(let i=0;i<graph.length;i++){
    for(let j=0;j<graph[i].length;j++){
      if(graph[i][j]>0){
         stroke(255);
         line(nodelocation[i][0],nodelocation[i][1],nodelocation[j][0],nodelocation[j][1]);
         text(graph[i][j],(nodelocation[i][0]+nodelocation[j][0])/2,(nodelocation[i][1]+nodelocation[j][1])/2);
      }
    }
  }
  for(let i=0;i<mstloopindex;i++){
    strokeWeight(3);
    stroke(0,255,0);
    line(nodelocation[mstindices[i][0]][0],nodelocation[mstindices[i][0]][1],nodelocation[mstindices[i][1]][0],nodelocation[mstindices[i][1]][1]);
  }
  if(mstloopindex<mstindices.length){
    mstloopindex+=1;
  }
}