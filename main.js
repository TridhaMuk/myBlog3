canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_image="car1.png";
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_image="car2.png";
car2_x=10;
car2_y=100;
background_image="racing.jpg";

function add(){
    background_imgtag=new Image();
    background_imgtag.onload=upload_background;
    background_imgtag.src = background_image;

    car1_imgtag=new Image();
    car1_imgtag.onload=upload_car1;
    car1_imgtag.src=car1_image;

    car2_imgtag=new Image();
    car2_imgtag.onload=upload_car2;
    car2_imgtag.src=car2_image;
}
function upload_background(){
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height)
}
function upload_car1(){
    ctx.drawImage(car1_imgtag, car1_x, car1_y, car1_width, car1_height)
}
function upload_car2(){
    ctx.drawImage(car2_imgtag, car2_x, car2_y, car2_width, car2_height)
}
window.addEventListener("keydown", my_keydown);
function my_keydown (e)
{
    keyPressed=e.keycode;
    console.log (keyPressed);
    if(keyPressed == '38');
    {
        car1_up();
        console.log("up arrow key");
    }
    if(keyPressed == '40');
    {
        car1_down();
        console.log("down arrow key");
    }
    if(keyPressed == '37');
    {
        car1_left();
        console.log("left arrow key");
    }
    if(keyPressed == '39');
    {
        car1_right();
        console.log("right arrow key");
    }
    if(keyPressed == '87');
    {
        car2_up();
        console.log("key w");
    }
    if(keyPressed == '65');
    {
        car2_left();
        console.log("key a");
    }
    if(keyPressed == '68');
    {
        car2_right();
        console.log("key d");
    }
    if(keyPressed == '83');
    {
        car1_down();
        console.log("key s");
    }

}
function car1_up() {

}

function car1_down() {
    
}

function car1_left() {
    
}

function car1_right() {
    
}

function car2_up() {

}

function car2_down() {
    
}

function car2_left() {
    
}

function car2_right() {
    
}