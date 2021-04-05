var movingrectangle
var fixedrectangle
var fixedrectangle1
var fixedrectangle2
var fixedrectangle3
function setup() {
  createCanvas(800,400);
 fixedrectangle = createSprite(400,200,20,10) 
 movingrectangle = createSprite(300,100,20,10)
fixedrectangle1 = createSprite(500,100,20,10)
fixedrectangle2 = createSprite(300,100,20,10)
fixedrectangle3 = createSprite(480,350,20,10)

}

function draw() {
  background(255,255,255);
  movingrectangle.x = mouseX  
  movingrectangle.y = mouseY
 if(istouching(fixedrectangle1,movingrectangle)|| istouching(fixedrectangle2,movingrectangle)|| istouching(fixedrectangle3,movingrectangle)|| istouching(fixedrectangle,movingrectangle))

 {
   console.log(" yes rectangles are touching")
 }
  else
  {
    console.log("no rectangles are not touching")
  }
 drawSprites()
}


