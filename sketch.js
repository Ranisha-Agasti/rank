var hypnoticBall, database;
var position;
var playerCount, gameState;
var car1, car2, car3, car4, cars
var allplayers
function preload(){
  car1Image=loadImage("images/car1.png")
  car2Image=loadImage("images/car2.png")
  car3Image=loadImage("images/car3.png")
  car4Image=loadImage("images/car4.png")
  trackImage=loadImage("images/track.jpg")
}
function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(windowWidth, windowHeight);
  form = new Form()
  form.display()
  player = new Player()
  player.getCount()
  game = new Game()
  car1 = createSprite(200, 650)
  car1.addImage(car1Image)
  car2 = createSprite(400, 750)
  car2.addImage(car2Image)
  car3 = createSprite(600, 850)
  car3.addImage(car3Image)
  car4 = createSprite(800, 950)
  car4.addImage(car4Image)
  cars = [car1, car2, car3, car4]
}
function draw() {
  if (playerCount == 4) {
    gameState = 1
    game.updateState(1)
  }
  if (gameState == 1) {
    game.play()
  }
  
}