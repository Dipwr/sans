let snd = new Audio("media/slash.wav");
let snd2 = new Audio("media/select-short.wav");

const images = [ 
    "media/slash/frame_0_delay-0.13s.png", "media/slash/frame_1_delay-0.13s.png",
    "media/slash/frame_2_delay-0.13s.png", "media/slash/frame_3_delay-0.13s.png",
    "media/slash/frame_4_delay-0.13s.png", "media/slash/frame_5_delay-0.13s.png",
    "media/slash/frame_6_delay-0.13s.png"
];

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

function convertMonth(month){
    switch (month) {
        case '01':
            return "Jan";
        case '02':
            return "Feb";
        case '03':
            return "Mar";
        case '04':
            return "Apr";
        case '05':
            return "May";
        case '06':
            return "June";
        case '07':
            return "July";
        case '08':
            return "Aug";
        case '09':
            return "Sept";
        case '10':
            return "Oct";
        case '11':
            return "Nov";
        case '12':
            return "Dec";
    }
}

function convertDate(date) {
    let year = date.slice(0,4);
    let month = convertMonth(date.slice(5,7));
    let day = date.slice(8,10)
    let time = date.slice(11,19)

    return month + ' ' + day + ' ' + time + " (UCT) " + year;
}

//api request using fetch from: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
async function getData() {
    const url = "https://api.github.com/repos/Dipwr/sans/commits/main";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      document.getElementById("modified").innerHTML = "Last modified: " + convertDate(json.commit.author.date);
    } catch (error) {
      console.error(error.message);
    }

    
}

getData()