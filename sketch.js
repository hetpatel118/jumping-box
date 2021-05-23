var canvas;
var music;
var surface1,surface2,surface3,surface4,box;
var eadeg;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){

    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,550,190,20);
    surface1.shapeColor = "red"

    surface2 = createSprite(300,550,190,20);
    surface2.shapeColor = "green"

    surface3 = createSprite(500,550,190,20);
    surface3.shapeColor = "yellow"

    surface4 = createSprite(700,550,190,20);
    surface4.shapeColor = "blue"


    //create box sprite and give velocity
    box = createSprite(200,100,20,20);
    box.shapeColor = "black"
    box.x = Math.round(random(20,500));
    box.velocityX = 4;
    box.velocityY = 3
}

function draw() {
    background("orange");
    //create edgeSprite
    
    edges = createEdgeSprites();
    
    box.bounceOff(edges)
    box.bounceOff(surface1);
    box.bounceOff(surface3);
    box.bounceOff(surface4)




    //add condition to check if box touching surface and make it box
    if(box.isTouching(surface2)){
        box.velocityX = 0;
        box.velocityY = 0;
    }

   
    drawSprites();
}
