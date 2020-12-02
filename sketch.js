let serial; // variable to hold an instance of the serialport library
let portName = 'COM3'; // fill in your serial port name here
let inData; // for incoming serial data
let dataArr = []
let mask

class Dot{
  constructor(x,y){
    [this.x,this.y] = [x,y]
  }
}

class Pattern_Object{
  constructor(x,y,w,h,val=1){
    [this.x,this.y,this.w,this.h] = [x,y,w,h]
    this.count = Math.max(1,Math.floor(val/100))
    this.shapes = []
    let colorA = color(15,50,10)
    let colorB = color(54,50,10)
    for(let hor=0;hor<this.count;hor++){
      for(let ver=0;ver<this.count;ver++){
        this.shapes.push([
          this.x+hor*this.w/this.count,
          this.y+ver*this.h/this.count,
          this.w/this.count,
          this.h/this.count,
          colorA,colorB])
      }
    }
  }

  update(val){
    this.count = Math.max(1,Math.floor(val/100))
    this.shapes = []
    let colorA = color(dataArr[1]/10,dataArr[2]/100,80)
    let colorB = color(dataArr[1]/10*1.3,dataArr[2]/50,20)
    for(let hor=0;hor<this.count;hor++){
      for(let ver=0;ver<this.count;ver++){
        this.shapes.push([
          this.x+hor*this.w/this.count,
          this.y+ver*this.h/this.count,
          this.w/this.count,
          this.h/this.count,
          colorA,colorB])
      }
    }
  }

  
}

class Pattern_ObjectShape{
  constructor(x,y,w,h,colorA,colorB){
    [this.x,this.y,this.w,this.h,this.colorA,this.colorB] = [x,y,w,h,colorA,colorB]
  }
}

class Pattern_DreamRing{
  constructor(x,y,index,w){
    [this.x,this.y,this.index,this.w] = [x,y,index,w]
    this.cirR = this.w/2 / this.index
    this.r = this.w/10 * this.index
   
      this.count = this.index * 3
    
    this.dots = []
    
    for(let i =1;i< this.count+1;i++){
      let a = 2*Math.PI / this.count * i + this.index * 20
      
      let x = this.x + Math.cos(a )  * this.r
      let y = this.y + Math.sin(a)  * this.r
      this.dots.push(new Dot(x,y))
    }
  }

  

 
}

class Pattern_Dream{
  constructor(x,y,w,h){
    [this.x,this.y,this.w,this.h] = [x,y,w,h]
    this.val = 1
    this.rings = []
    for(let i =0; i< this.val;i++){
      
      this.rings.push(new Pattern_DreamRing(this.x,this.y,i,this.w))
    }
  }

  update(val){
    
    this.val = Math.max(1,Math.floor(val/100))
    // console.log(this.val);
    this.rings = []
    for(let i=0;i<this.val;i++){
      this.rings.push(new Pattern_DreamRing(this.x,this.y,i,this.w))
    }
  
  }
}

let patternDream
let patternObj

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  mask = createGraphics(500,500)
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors

  serial.open(portName); // open a serial port
  serial.clear();

  patternDream = new Pattern_Dream(height/2,height/2,height/2,height/2)
  patternObj = new Pattern_Object(height*0.8,0,height*0.8,height*0.8,1)
  console.log(patternObj);
  colorMode(HSB,100)
}

function draw() {
  // black background, white text:
  // background(0);

  

  clear();
  
  fill(0);
  // display the incoming serial data as a string:
  for(let [i,data] of dataArr.entries()){
    text("incoming value: " + data, 30, 100+30*i);
  }

  patternDream.update(dataArr[0])
  let colorBg = color(Math.sin(frameCount/100)*100,Math.cos(dataArr[1]/1024)*100,Math.sin(dataArr[1]/1024)*100)
      fill(colorBg)
 
  rect(patternDream.x-patternDream.w,patternDream.y-patternDream.h,patternDream.w*2,patternDream.h*2)
  blendMode(MULTIPLY);
  noStroke()
  for(let ring of patternDream.rings){
    
    for(let [i,dot] of ring.dots.entries()){
      // console.log(dot);
      
      let colorA = color(Math.sin(frameCount/100)*100+i*1,ring.cirR,dataArr[1])
      fill(colorA)
      
      circle(dot.x,dot.y,ring.cirR)
    }
  }
  circle(patternDream.x,patternDream.y,patternDream.w*1.7-Number(dataArr[0]))
  circle(patternDream.x,patternDream.y,patternDream.w*1.65-Number(dataArr[0]))


  // patternObj = new Pattern_Object(height,height/2,height/4,height/4,dataArr[2])
  patternObj.update(dataArr[2])
  for(let s of patternObj.shapes){
    let shape = new Pattern_ObjectShape(...s)
    fill(shape.colorA)
    triangle(
      shape.x,shape.y,
      shape.x,shape.y+shape.h,
      shape.x+shape.w,shape.y+shape.h,
      
    )

    fill(shape.colorB)
    triangle(
      shape.x+shape.w,shape.y,
      shape.x+shape.w,shape.y+shape.h,
      shape.x,shape.y
    )
  }


}

function keyTyped() {
    let outByte = key;
    // console.log("Sending " + outByte);
    //serial.write(Number(outByte)); // Send as byte value
    // serial.write(outByte); // Send as a string/char/ascii value
}

function serialEvent() {
  // read a byte from the serial port:
  let inByte = serial.readLine()

  if(inByte){
    dataArr = inByte.split(','); 
  }


}

function serialError(err) {
  print('Something went wrong with the serial port. ' + err);
}