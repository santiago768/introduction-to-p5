function preload(){
img=loadImage("https://images.pexels.com/photos/2567011/pexels-photo-2567011.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400")
}

function setup(){
    canvas=createCanvas(600,400);
    canvas.position(400,250);
   
    
}
function draw(){
    fill("green");
   rect(30,50,40,300)
   rect(540,50,40,300)
    fill("green");
    rect(70,330,500,40);
    fill("red");
   circle(550,350,100);
   circle(50,350,100);
   fill("green");
    rect(70,30,500,40);
    fill("red");
   circle(550,50,100);
   circle(50,50,100);
   image(img,250,150,100,100);

    
}


function take_snapshot(){
    save("mypic.png")
}