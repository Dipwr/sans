let snd = new Audio("media/slash.wav");
let snd2 = new Audio("media/select-short.wav");

const images = [ 
    "media/slash/frame_0_delay-0.13s.png", "media/slash/frame_1_delay-0.13s.png",
    "media/slash/frame_2_delay-0.13s.png", "media/slash/frame_3_delay-0.13s.png",
    "media/slash/frame_4_delay-0.13s.png", "media/slash/frame_5_delay-0.13s.png",
    "media/slash/frame_6_delay-0.13s.png"
];

function setup(){
    document.getElementById("modified").innerHTML = "Last modified: Thu Jul 19 16:29:26 2024";
}

//on click animation code found on: https://stackoverflow.com/questions/4847996/css-animation-onclick
function titleAni() {
    let element = document.getElementById("titleImage")
    element.classList.remove('titleAni'); // reset animation
    void element.offsetWidth; // trigger reflow
    element.classList.add('titleAni'); // start animation
}

//Frame by frame animation code modified from https://www.geeksforgeeks.org/how-to-create-frame-by-frame-animation-using-css-and-javascript/
let x = 0; 
let id;
function startAnimation() {
    x = 0;
    titleAni()
    clearInterval(id);
    id = setInterval("Animate()", 130); 
    document.getElementById("slash").style.display = "block";
    snd.play();
}
  
function Animate() { 
    if (images.length != x){
        document.getElementById("slash").src = images[x] 
        x++; 
    }else{
        document.getElementById("slash").style.display = "none";
        clearInterval(id);
    }
}


function buttonClick(href) {
    snd2.onended = function() {
        window.location.href = href;
    };
    snd2.play();
}

setup();