//Create variables here
var dog, dog,img, happyDogImg,database,foodS,foodStock;
function preload();
{
	//load images here
dogImg = loadImage("images/dogImg.png");
happyDogImg = loadImage("images/happydogImg.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  foodstock = database.ref("food");
foodStock.on("value",readStock);
foodstock.set(20);

dog = createSprite(250,350,10,60);
dog.addImage(dogImg);
dog.scale= 0.2;
}


function draw() {  
background("green");
if(foodS!== undefined){
textSize(20);
FileList(255);
text("note: PRESS UP ARROW TO FEED DRAGO MILK");
text("food remaining:" +foodS, 150,150);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImg);
}

if(keyWentUp(up_arrow)){
  dog.addImage(happyDogImg);
}


if(foodS === 0){
  foodS = 20;
}

}
  drawSprites();
}


function writeStock(x){
  if(x<=0){
    x = x-1;
  }
  database.ref("/").update({
food:x
  });
  }
function readStock(data){
  foodS = data.val();
}
