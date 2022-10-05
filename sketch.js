
var trex ,trex_running, ground, ground_image;
function preload(){
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")  
ground_image = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50, 170, 5, 5);
 trex.addAnimation("running", trex_running);
 trex.scale = 0.5
 
 ground = createSprite(300, 180, 600, 1);
 ground.addImage("ground", ground_image)

}

function draw(){
  background("white")
  if(keyDown("space")){
    trex.velocityY = -12
  }
  trex.velocityY = 12
  trex.collide(ground)
drawSprites()
}
