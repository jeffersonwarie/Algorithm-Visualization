const INF = Number.MAX_SAFE_INTEGER;
const minKey = (graph, key, visited) => {
  // Initialize min value
  let min = INF;
  let minIndex = 0;
  for (let v = 0; v < graph.length; v++) {
    if (visited[v] === false && key[v] < min) {
      min = key[v];
      minIndex = v;
    }
  }
  return minIndex;
};
const prim = graph => {
  const parent = [];
  const key = [];
  const visited = [];
  const { length } = graph;
  for (let i = 0; i < length; i++) {
    key[i] = INF;
    visited[i] = false;
  }
  key[0] = 0;
  parent[0] = -1;
  for (let i = 0; i < length - 1; i++) {
    const u = minKey(graph, key, visited);
    visited[u] = true;
    for (let v = 0; v < length; v++) {
      if (graph[u][v] && !visited[v] && graph[u][v] < key[v]) {
        parent[v] = u;
        key[v] = graph[u][v];
      }
    }
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

const parent = prim(graph);
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