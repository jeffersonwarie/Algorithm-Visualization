let distances = [];

class Graph{
  constructor(vertices){
    this.V = vertices;
    this.graph = [];
  }
  
  addEdge(u,v,w){
    this.graph.push([u,v,w]);
  }
  
  printArr(dist){
    console.log('Vertex Distance from Source');
    for(let i=0;i<this.V;i++){
      console.log(i+' - '+dist[i]);
      distances.push(dist[i]);
    }
  }
  
  BellmanFord(src){
    let dist = [];
    for(let i=0;i<this.V;i++){
      dist.push(Number.POSITIVE_INFINITY);
    }
    dist[src] = 0;
    
    for(let i=0;i<this.V-1;i++){
      for(let j=0;j<this.graph.length;j++){
        if(dist[this.graph[j][0]]!=Number.POSITIVE_INFINITY && (dist[this.graph[j][0]]+this.graph[j][2])<dist[this.graph[j][1]]){
          dist[this.graph[j][1]] = dist[this.graph[j][0]]+this.graph[j][2];
        }
      }
    }
    
    for(let i=0;i<this.graph.length;i++){
      if(dist[this.graph[i][0]]!=Number.POSITIVE_INFINITY && (dist[this.graph[i][0]]+this.graph[i][2])<dist[this.graph[i][1]]){
          console.log('Graph contains negative weight cycle');
          return;
        }
    }
    
    this.printArr(dist);
  }
}

g = new Graph(5);
g.addEdge(0, 1, -1); 
g.addEdge(0, 2, 4); 
g.addEdge(1, 2, 3);
g.addEdge(1, 3, 2);
g.addEdge(1, 4, 2);
g.addEdge(3, 2, 5);
g.addEdge(3, 1, 1);
g.addEdge(4, 3, -3);
  
g.BellmanFord(0);

let edgeList = [[0,1,-1],[0,2,4],[1,2,3],[1,3,2],[1,4,2],[3,2,5],[3,1,1],[4,3,-3]];
let vertexlist = [0,1,2,3,4];
let nodecoords = [];

for(let i=0;i<vertexlist.length;i++){
  let xcoord = Math.floor(Math.random() * (700 - 100 + 1) ) + 100;
  let ycoord = Math.floor(Math.random() * (500 - 100 + 1) ) + 100;
  nodecoords.push([xcoord,ycoord]);
}

function setup() {
  createCanvas(800,600);
  background(0);
  for(let i=0;i<vertexlist.length;i++){
    noFill();
    stroke(255);
    circle(nodecoords[i][0],nodecoords[i][1],30);
    stroke(255);
    text(vertexlist[i],nodecoords[i][0]-4,nodecoords[i][1]+4);
  }
  for(let i=0;i<edgeList.length;i++){
    stroke(255);
    line(nodecoords[edgeList[i][0]][0],nodecoords[edgeList[i][0]][1],nodecoords[edgeList[i][1]][0],nodecoords[edgeList[i][1]][1]);
  }
}

function draw() {
  background(0);
  for(let i=0;i<vertexlist.length;i++){
    noFill();
    stroke(255);
    circle(nodecoords[i][0],nodecoords[i][1],30);
    stroke(255);
    text(vertexlist[i],nodecoords[i][0]-4,nodecoords[i][1]+4);
    stroke(255);
    text('Distance from 0: '+distances[i],nodecoords[i][0]-25,nodecoords[i][1]+25);
  }
  for(let i=0;i<edgeList.length;i++){
    stroke(255);
    line(nodecoords[edgeList[i][0]][0],nodecoords[edgeList[i][0]][1],nodecoords[edgeList[i][1]][0],nodecoords[edgeList[i][1]][1]);
    stroke(255);
    text(edgeList[i][2],(nodecoords[edgeList[i][0]][0]+nodecoords[edgeList[i][1]][0])/2,(nodecoords[edgeList[i][0]][1]+nodecoords[edgeList[i][1]][1])/2);
  }
}