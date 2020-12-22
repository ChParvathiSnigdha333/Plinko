const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var particle = [] ;
var plinko = [] ;
var divisions = [];
var divisionHeight = 250 ;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground (600,595,1200,10)

    for (var k = 0; k <= width; k = k + 80){
        divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
    }

    for (var j = 40 ; j <= width ; j = j + 80){
        plinko.push(new Plinko(j,75,20))
    }
    
    for (var j = 15 ; j <= width-10 ; j = j + 80){
        plinko.push(new Plinko(j,175,20))
    }
    for (var j = 40 ; j <= width ; j = j + 80){
        plinko.push(new Plinko(j,275,20))
    }
}

function draw(){
    background("black");
    Engine.update(engine);
    
    ground.display();

    for (var k = 0; k < divisions.length; k++){
        divisions[k].display();
      }   
      
    for (var j = 0; j < plinko.length ; j++){
        plinko[j].display();
    }

    if (frameCount % 20 === 0){
        particle.push(new Particle (random(width/2-1200, width/2+1200),15,15))
    }

    for(var s = 0 ; s<particle.length; s++){
        particle[s].display();
    }

}