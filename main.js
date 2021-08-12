var mouse_event = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "aqua"; 
width_of_line = 2;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("paint_color").value;
    width_of_line = document.getElementById("paint_width").value;

    mouse_event = "mousedown";
}

canvas.addEventListener("mousemoove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouse_event == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("last_position_of_x_and_y_coordinates");
        console.log("X = " + last_postition_of_x + "Y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("current_position_of_mouse_x_and_y_coordinates");
        console.log("X = " + current_postition_of_mouse_x + "Y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);  
        ctx.stroke();      
    }

    last_position_of_x = current_postition_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouse_event = "mouseup";
}

canvas.addEventListener("mousego", my_mousego);
function my_mousego(e){
    mouse_event = "mousego";
}

function Clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}