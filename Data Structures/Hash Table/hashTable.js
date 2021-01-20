let visarray = [];

function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  } if (item === undefined) {
    return 'UNDEFINED';
  } if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key;
    }
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }

  /* djb2HashCode(key) {
    const tableKey = this.toStrFn(key);
    let hash = 5381;
    for (let i = 0; i < tableKey.length; i++) {
      hash = (hash * 33) + tableKey.charCodeAt(i);
    }
    return hash % 1013;
  } */
  hashCode(key) {
    return this.loseloseHashCode(key);
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      this.table[position] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  get(key) {
    const valuePair = this.table[this.hashCode(key)];
    return valuePair == null ? undefined : valuePair.value;
  }

  remove(key) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];
    if (valuePair != null) {
      delete this.table[hash];
      return true;
    }
    return false;
  }

  getTable() {
    return this.table;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return Object.keys(this.table).length;
  }

  clear() {
    this.table = {};
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const keys = Object.keys(this.table);
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
    visarray.push([keys[0],this.table[keys[0]]]);
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString},{${keys[i]} => ${this.table[keys[i]].toString()}}`;
      visarray.push([keys[i],this.table[keys[i]]]);
    }
    return objString;
  }
}

const hash = new HashTable();

console.log(' ');

let ni = prompt('Enter number of items: ','');

for(let i=0;i<ni;i++){
  let inputstring1 = prompt('Enter input name: ','');
  let inputstring2 = prompt('Enter input description: ','');
  console.log(hash.hashCode(inputstring1) + ' - ' +inputstring1);
  hash.put(inputstring1,inputstring2);
}

/*console.log(hash.hashCode('ABC') + ' - ABC');
console.log(hash.hashCode('XYZ') + ' - XYZ');
console.log(hash.hashCode('PQR') + ' - PQR');
console.log(hash.hashCode('DEF') + ' - DEF');
console.log(hash.hashCode('LMN') + ' - LMN');

hash.put('ABC', 'abc@email.com');
hash.put('XYZ', 'xyz@email.com');
hash.put('PQR', 'pqr@email.com');
hash.put('DEF', 'def@email.com');
hash.put('LMN', 'lmn@email.com');*/

console.log(hash.toString());
console.log(visarray)

let xoffset = 0;
let resultindex = -1;

function setup() {
  createCanvas(800,600);
}

function draw() {
  background(255);
  noFill();
  rect(400,500,70,25);
  stroke(0);
  text('SEARCH',408,516);
  for(let i=0;i<visarray.length;i++){
    noFill();
    if(i==resultindex){
      fill(0,255,0);
    }
    circle(100+xoffset,100,30);
    stroke(0);
    text('H',96+xoffset,104);
    text('i: '+visarray[i][0],94+xoffset,80);
    text(visarray[i][1].key,90+xoffset,200);
    text(visarray[i][1].value,90+xoffset,300);
    line(96+xoffset,110,90+xoffset,190);
    line(90+xoffset,200,90+xoffset,290);
    xoffset+=100;
  }
  xoffset=0;
}

function mouseClicked(){
  if(mouseX>400 && mouseX<470 && mouseY>500 && mouseY<525){
    let searchelem = prompt('Enter elemt to search: ','');
    for(let i=0;i<visarray.length;i++){
      if(searchelem==visarray[i][1].key){
        resultindex = i;
      }
    }
  }
}