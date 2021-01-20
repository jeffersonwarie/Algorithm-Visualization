class Graph { 
  constructor(noOfVertices) { 
    this.noOfVertices = noOfVertices; 
    this.AdjList = new Map(); 
  } 
  
  addVertex(v){
    this.AdjList.set(v, []); 
  }
  
  addEdge(v, w){ 
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  } 
  
  printGraph(){
    let get_keys = this.AdjList.keys(); 

    for(let i of get_keys){
      let get_values = this.AdjList.get(i);
      let conc = ""; 

      for(let j of get_values){
        conc += j + " "; 
      }
  
        // print the vertex and its adjacency list 
        console.log(i + " -> " + conc); 
    } 
  }

  /*bfs(startingNode){ 
    let visited = []; 
    for (let i = 0; i < this.noOfVertices; i++) {
      visited[i] = false; 
    }

    let q = new Queue(); 

    visited[startingNode] = true; 
    q.enqueue(startingNode); 

    while (!q.isEmpty()) { 
      let getQueueElement = q.dequeue(); 
      
      console.log(getQueueElement); 

      let get_List = this.AdjList.get(getQueueElement); 
  
      for (let i in get_List) { 
        let neigh = get_List[i]; 
  
        if (!visited[neigh]) { 
          visited[neigh] = true; 
          q.enqueue(neigh); 
        } 
      } 
    } 
  }*/

  /*dfs(startingNode){ 
    let visited = []; 
    for (let i = 0; i < this.noOfVertices; i++){ 
        visited[i] = false; 
    }
  
    this.DFSUtil(startingNode, visited); 
  } 
  
  DFSUtil(vert, visited){ 
    visited[vert] = true; 
    console.log(vert); 
  
    let get_neighbours = this.AdjList.get(vert); 
  
    for(let i in get_neighbours){ 
        let get_elem = get_neighbours[i]; 
        if (!visited[get_elem]){ 
          this.DFSUtil(get_elem, visited);
        }
    }
  }*/
}

let nv = prompt('Enter number of vertices: ','');

let g = new Graph(nv); 
let vertices = [];

for(let i=0;i<nv;i++){
  let v = prompt('Enter vertex name: ','');
  vertices.push(v);
}

for(let i = 0; i < vertices.length; i++){ 
  g.addVertex(vertices[i]); 
} 

let ne = prompt('Enter number of edges: ','');

for(let i=0;i<ne;i++){
  let e1 = prompt('Enter first edge vertex: ','');
  let e2 = prompt('Enter second edge vertex: ','');
  g.addEdge(e1,e2);
}
/*g.addEdge('A', 'B'); 
g.addEdge('A', 'D'); 
g.addEdge('A', 'E'); 
g.addEdge('B', 'C'); 
g.addEdge('D', 'E'); 
g.addEdge('E', 'F'); 
g.addEdge('E', 'C'); 
g.addEdge('C', 'F');*/

let vertexlocation = [];
let visited = []; 
for (let i = 0; i < this.noOfVertices; i++) {
  visited[i] = false; 
}

let q = []; 

visited['A'] = true; 
q.push('A');
let visitorder = [];

while(q.length!=0){
    let getQueueElement = q.shift(); 
    visitorder.push(getQueueElement);
      
    console.log(getQueueElement); 

    let get_List = g.AdjList.get(getQueueElement); 
  
    for (let i in get_List) { 
      let neigh = get_List[i]; 
  
      if (!visited[neigh]) { 
        visited[neigh] = true; 
        q.push(neigh); 
      } 
    }
}
console.log(q);
console.log(visitorder);
let visitindex = 0;
let visitedcoordinates = [];

for(let i=0;i<vertices.length;i++){
  let xcoord = Math.floor(Math.random() * (700 - 100 + 1) ) + 100;
  let ycoord = Math.floor(Math.random() * (500 - 100 + 1) ) + 100;
  vertexlocation.push([vertices[i],xcoord,ycoord]);
}

let extraCanvas;

function setup(){
  createCanvas(800,600);
  extraCanvas = createGraphics(800,600);
  extraCanvas.clear();
  
  for(let i=0;i<vertexlocation.length;i++){
    noFill();
    circle(vertexlocation[i][1],vertexlocation[i][2],30);
    fill(0,0,0);
    text(vertexlocation[i][0],vertexlocation[i][1]-5,vertexlocation[i][2]+4);
  }
  
  
  for(let i=0;i<vertexlocation.length;i++){
    let joiners = g.AdjList.get(vertexlocation[i][0]);
    for(let j=0;j<joiners.length;j++){
      for(let k=0;k<vertexlocation.length;k++){
        if(vertexlocation[k][0]==joiners[j]){
          fill(0,0,0);
          line(vertexlocation[i][1],vertexlocation[i][2],vertexlocation[k][1],vertexlocation[k][2]);
          
        }
      }
    }
  }
}

function draw() {
  background(255,255,255);
  frameRate(1);
  
  
  for(let i=0;i<vertexlocation.length;i++){
    noFill();
    stroke(0);
    circle(vertexlocation[i][1],vertexlocation[i][2],30);
    fill(0,0,0);
    text(vertexlocation[i][0],vertexlocation[i][1]-4,vertexlocation[i][2]+4);
  }
  
  
  for(let i=0;i<vertexlocation.length;i++){
    let joiners = g.AdjList.get(vertexlocation[i][0]);
    for(let j=0;j<joiners.length;j++){
      for(let k=0;k<vertexlocation.length;k++){
        if(vertexlocation[k][0]==joiners[j]){
          stroke(0,0,0);
          line(vertexlocation[i][1],vertexlocation[i][2],vertexlocation[k][1],vertexlocation[k][2]);
        }
      }
    }
  }
  
  
  for(let i=0;i<vertexlocation.length;i++){
    let joiners = g.AdjList.get(vertexlocation[i][0]);
    for(let j=0;j<joiners.length;j++){
      if(visitorder[visitindex]==joiners[j]){
        for(let k=0;k<vertexlocation.length;k++){
          if(vertexlocation[k][0]==joiners[j]){
            stroke(0,255,0);
            line(vertexlocation[i][1],vertexlocation[i][2],vertexlocation[k][1],vertexlocation[k][2]);
            visitedcoordinates.push([vertexlocation[i][1],vertexlocation[i][2],vertexlocation[k][1],vertexlocation[k][2]]);
          }
        }
      }
    }
  }
  
  
  if(visitindex<visitorder.length){
    visitindex += 1;
  }
  
  for(let i = 0;i<visitedcoordinates.length;i++){
    stroke(0,255,0);
    line(visitedcoordinates[i][0],visitedcoordinates[i][1],visitedcoordinates[i][2],visitedcoordinates[i][3]);
  }
  
  /*if(visitindex<visitorder.length){
    if(visitindex!=0&&visitindex!=visitorder.length-1){
      for(let i=0;i<vertexlocation.length;i++){
        for(let j=0;j<vertexlocation.length;j++){
          if(vertexlocation[i][0]==visitorder[visitindex]){
            if(vertexlocation[j][0]==visitorder[visitindex-1]){
              fill(0,255,0);
              line(vertexlocation[i][1],vertexlocation[i][2],vertexlocation[j][1],vertexlocation[j][2]);
            }
            if(vertexlocation[j][0]==visitorder[visitindex+1]){
              fill(0,255,0);
              line(vertexlocation[i][1],vertexlocation[i][2],vertexlocation[j][1],vertexlocation[j][2]);
            }
          }
        }
      }
    }
    visitindex += 1;
  }*/
}