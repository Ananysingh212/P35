const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
   getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/asia/kolkata")
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);

    if(hour > 01 && hour<=03){
        bg = "sunrise1.png";
    }
    else if (hour >= 03 && hour<=04){
        bg = "sunrise2.png";
    } 
    else if (hour >= 04 && hour<=05){
        bg = "sunrise3.png";
    }
    else if (hour >= 05 && hour<=07){
        bg = "sunrise4.png";
    }
    else if (hour >= 07 && hour<=16){
        bg = "sunrise5.png";
    }
    else if (hour >= 16 && hour<=17){
        bg = "sunrise6.png";
    }
    else if (hour >= 17 && hour<=18){
        bg = "sunset7.png";
    }
    else if (hour >= 18 && hour<=19){
        bg = "sunset8.png", "sunrise9.png";
    }
    else if (hour >= 19 && hour<=20){
        bg = "sunset10.png";
    }
    else if (hour >= 20 && hour<=22){
        bg = "sunset11.png";
    }
    else if (hour >= 22 && hour<=24){
        bg = "sunset12.png";
    }

    backgroundImg = loadImage(bg);
   
}
