var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var imagemdanuvem, nuvem;

function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");

  imagemdanuvem  = loadImage("cloud.png");
 
}

function setup() {

  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crie sprite ground (solo)
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //crie um solo invisível
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;

  //gerar número aleatório
  var rand = Math.round(random(10,200));
  console.log(rand);
 
}

function draw() {
  //definir cor do plano de fundo
  background(180);
  
  // pulando o trex ao pressionar a tecla de espaço
  if(keyDown("space")&& trex.y >= 160) {
    trex.velocityY = -12;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //impedir que o trex caia
  trex.collide(invisibleGround);

  gerarNuvens();

  
  drawSprites();
  
}

function gerarNuvens(){
  //escrever o código para gerar nuvens
  if(frameCount% 60 === 0){
  nuvem = createSprite(600,100,40,10);
  nuvem.velocityX = -3;
  nuvem.addImage(imagemdanuvem);
  nuvem.scale = 0.7;
  nuvem.y = Math.round(random(10,70));
  nuvem.depth = trex.depth;
  trex.depth = trex.depth +1;
  console.log(nuvem.depth);
  console.log(trex.depth);
  }
}



