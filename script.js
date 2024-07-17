//on click animation code found on: https://stackoverflow.com/questions/4847996/css-animation-onclick
function titleAni() {
    let element = document.getElementById("titleImage")
    element.classList.remove('titleAni'); // reset animation
    void element.offsetWidth; // trigger reflow
    element.classList.add('titleAni'); // start animation
}