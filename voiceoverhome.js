var rem
function preload(){
  rem=loadSound("./assets/voiceover1.mp3")

    sem=loadSound("./assets/voiceover2.mp3")

      tem=loadSound("./assets/voiceover3.mp3")
}
function setup(){
  createCanvas(10,10)
}
function draw(){
  if(frameCount==60){rem.play()}
  if(frameCount==720){sem.play()}
  else if (frameCount==1680) {tem.play()}
}
