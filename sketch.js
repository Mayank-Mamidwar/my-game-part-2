//PRO-C44: MAKE YOUR OWN GAME - 2, by mayank
//goals:
//creating 1 character, of a game.
//giving that characte, an image and sprite.

//creating variables
var player, playerImg;

function preload() {
  playerImg = loadImage("mario.jpg");
}

function setup() {
  createCanvas(800, 500);

  player = createSprite(200, 200, 10, 10);
  player.addImage("playerImg", playerImg);
  player.scale = 0.2;

}

function draw() {
  background(255);

  textSize(20)
  text("Use WASD to move around", 400,225);



  //condition for moving to the left
  if (keyDown("a")) {
    player.x = player.x - 10;
  }

  //condition for moving to the right
  if (keyDown("d")) {
    player.x = player.x + 10;
  }

  //condition for moving to the down
  if (keyDown("s")) {
    player.y = player.y + 10;
  }

    //condition for moving to the up
    if (keyDown("w")) {
        player.y = player.y - 10;
      }

  drawSprites();
}
