var bike_drctn=(-1+Math.random()*2)
var car4_drctn=(-1+Math.random()*2)
var car3_drctn=(-1+Math.random()*2)
var car2_drctn=(-1+Math.random()*2)
var car1_drctn=(-1+Math.random()*2)
var speed1=1
var speed2=1
var speed3=1
var move1=0
var move2=0
var move3=0
var move4=0
var move0=0
var player
var alpha
var beta
var gamma
var level=0


var goright=[0,0,0,0,0,0,0]

for(j=0;j<8;j++){
  var turn=(Math.floor(Math.random()*4))
  if(turn==0){ goright[j]=45}
  else if(turn==1){ goright[j]=135}
  else if(turn==2){goright[j]=225}
  else if(turn==3){goright[j]=315}
}
//console.log(goright)
var ciao=0
var ciaone=0
var ciaoissimo=0
var dog
var man
var man1
var bike
var car1
var car2
var car3
var car4
var wrong
var right
var backg
var sfondo
var noise

function preload(){
  dog=loadSound("./assets/dog.mp3")
  man=loadSound("./assets/people talk.mp3")
  man1=loadSound("./assets/people talk.mp3")

  bike=loadSound("./assets/moto sound.mp3")

    car1=loadSound("./assets/horn car.mp3")
      car2=loadSound("./assets/moto sound.mp3")
        car3=loadSound("./assets/ambulance siren.mp3")

          wrong=loadSound("./assets/wrong.mp3")

                    right=loadSound("./assets/right.mp3")

backg=loadImage("./assets/sfondo.png")
noise=loadSound("./assets/tapetosonoro1.mp3")
}

function setup(){
player= new Charachter()
dog.play()
dog.loop()
  man.play()
  man.loop()
    man1.play()
    man1.loop()
    man1.rate(2)

      bike.play()
      bike.loop()

      car1.play()
      car1.loop()
      car2.play()
      car2.loop()
      car3.play()
      car3.loop()

noise.play()
noise.loop()

console.log(car1)

console.log(car3)

console.log(car2)

    createCanvas(windowWidth,windowHeight)
    sfondo= image(backg,0,0,width,height)

}

function draw(){
  sfondo= image(backg,0,0,width,height)
noise.amp(map(level,0,7,0.1,0.5))

  fill('black')

  noStroke()
  ellipseMode(CENTER)
textSize(width/5)
dog.amp(1)
//FOLLOW THE DOG
if(alpha>goright[level]-45 && alpha<goright[level]+45){dog.pan(0)
  window.navigator.vibrate([0])}
else if (alpha>goright[level]+45) {dog.pan(1)}
else if (alpha<goright[level]-45) {dog.pan(-1)}
//text(goright[level],100,100)
//text(alpha,100,200)


if(alpha>goright[level]-45 && alpha<goright[level]+45){
  fill("white")
player.update()}

player.show()


//ellipse(width/2,height/2,width/2,width/2)

player.collide()


//CARS
if(level==3){ciaoissimo++
  car1.loop()
  var move0=ciaoissimo*speed0%windowWidth
if(car1_drctn<0){
  //polygon(move1,height/2-height/10,width/20,height/20)
var dist4=dist(move1,height/2-height/10,player.x,player.y)
car1.amp(map(dist4,0,width/2,5,0))
if(move1>player.x){car1.pan(1)}
else{car1.pan(-1)}
}


if(level==4){ciaoissimo++
    car1.loop()
  move1=ciaoissimo*speed1%windowWidth
if(car1_drctn<0){
  //polygon(move1,height/2-height/10,width/20,height/20)
var dist4=dist(move1,height/2-height/10,player.x,player.y)
car1.amp(map(dist4,0,width/2,5,0))
if(move1>player.x){car1.pan(1)}
else{car1.pan(-1)}
}

else{
  //polygon(windowWidth-move1,height/2-height/10,width/20,height/20)
  var dist4=dist(windowWidth-move1,height/2-height/10,player.x,player.y)
  car1.amp(map(dist4,0,width/2,5,0))
  if(windowWidth-move1>player.x){car1.pan(1)}
  else{car1.pan(-1)}
}}

else{car1.stop()}

if(level==5){ciaoissimo++
    car2.loop()
 move2=ciaoissimo*speed2%windowWidth
if(car2_drctn<0){
  //polygon(move2,height/2-(height/10*2),width/20,height/20)
  var dist5=dist(move2,height/2-height/10,player.x,player.y)
  car2.amp(map(dist5,0,width/2,5,0))
  if(move2>player.x){car2.pan(1)}
  else{car2.pan(-1)}
}

else{
  //polygon(windowWidth-move2,height/2-(height/10*2),width/20,height/20)
  var dist5=dist(windowWidth-move2,height/2-height/10,player.x,player.y)
  car2.amp(map(dist5,0,width/2,5,0))
  if(windowWidth-move2>player.x){car2.pan(1)}
  else{car2.pan(-1)}
}}

else{car2.stop()}

if(level==6){ciaoissimo++
  car3.play()
 move3=ciaoissimo*speed3%windowWidth
if(car3_drctn<0){
  //polygon(move3,height/2-(height/10*3),width/20,height/20)
  var dist6=dist(move3,height/2-height/10,player.x,player.y)
  car3.amp(map(dist6,0,width/2,5,0))
  if(move3>player.x){car3.pan(1)}
  else{car3.pan(-1)}
}
else{
  //polygon(windowWidth-move3,height/2-(height/10*3),width/20,height/20)
  var dist6=dist(windowWidth-move3,height/2-height/10,player.x,player.y)
  car3.amp(map(dist6,0,width/2,5,0))
  if(windowWidth-move3>player.x){car3.pan(1)}
  else{car3.pan(-1)}
}}
else{car3.stop()}

//
// text(level,100,300)
// text(goright[level],100,100)
//
// text(alpha,100,200)

if(mouseIsPressed){
  fill('white')

  push()
  noFill()
  stroke("white")
  strokeWeight(2)
   ellipse(mouseX,mouseY,width/8+frameCount%60)
   strokeWeight(4)
    ellipse(mouseX,mouseY,width/8+(frameCount%60*2))
    strokeWeight(6)
     ellipse(mouseX,mouseY,width/8+(frameCount%60*3))
  pop()}
}



function Charachter(){
  this.x=windowWidth/2
  this.y=windowHeight/2
  this.show=function show(){}
  this.collide=function collide(){

if (level==2){
   if(this.y<ciao%windowHeight+height/20 && this.y>ciao%windowHeight-height/20&&
     this.x>width/2-width/10 && this.x<width/2){
       window.navigator.vibrate([100,0,100])
     this.y=windowHeight/2
   wrong.play()
  }

    else if(this.y<(ciao+height/5)%windowHeight+height/20 && this.y>(ciao+height/5)%windowHeight-height/20&&
          this.x>width/2 && this.x<width/2+width/10){
          window.navigator.vibrate([100,0,100])
          this.y=windowHeight/2
        wrong.play()
       }
}
             if (level==3){
               if(this.x<ciaone*9.5%windowWidth+width/20 && this.x>ciaone*9.5%windowWidth-width/20&&
               this.y>height/2+height/20 && this.y<height/2+height/10+height/20){
               window.navigator.vibrate([100,0,100])
               this.y=windowHeight/2
             wrong.play()
            }
             }
if (level==4){
   if (this.y<height/2-(height/10*3)+height/20&&this.y>height/2-(height/10*3)-height/20&&
   move3>width/2-25&&move3<width/2+25) {
   window.navigator.vibrate([100,0,100])
   this.y=windowHeight/2
 wrong.play()
}}
if(level==5) {if (this.y<height/2-(height/10*1)+height/10&&this.y>height/2-(height/10*1)-height/10&&
  move1>width/2-25&&move1<width/2+25) {
  window.navigator.vibrate([100,0,100])
  this.y=windowHeight/2
wrong.play()
 }}

if(level==6) {if  (this.y<height/2-(height/10*2)+height/10&&this.y>height/2-(height/10*2)-height/10&&
  move2>width/2-25&&move2<width/2+25) {
  window.navigator.vibrate([100,0,100])
  this.y=windowHeight/2
wrong.play()
 }}
}

  this.update=function update(){

if(player.y<height/10){player.y=windowHeight/2,level++
//right.play()
//right.amp(0.5)
}

else if (mouseIsPressed){this.y=this.y-10
}

   //polygon(this.x,this.y, 50, 3)
 }
}

function windowResized() {
  // resize canvas when switching into/from full screen
  resizeCanvas(windowWidth, windowHeight);
}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

window.addEventListener('deviceorientation', function(e)
{
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
})
window.navigator.vibrate([500,500,500])
