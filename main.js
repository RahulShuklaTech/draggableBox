const box = document.querySelector(".box")

let x = 0;
let y = 0;

console.log(document.body.clientHeight)


function mouseMove(e){
    console.log(e.clientX)
    let dx = e.clientX - x;
    let dy = e.clientY - y;

    let left = box.offsetLeft + dx
    let top = box.offsetTop + dy

    left = left < 0 ? 0 : left;
    left = left > document.body.clientWidth -100? document.body.clientWidth -100 : left ;
    top = top < 0 ? 0 : top;
    top = top > document.body.clientHeight -100 ? document.body.clientHeight -100 : top

    box.style.left = left + "px";
    box.style.top = top + "px";
    x = e.clientX;
    y = e.clientY;
}



function mouseDown(e){
    
    x = e.clientX;
    y = e.clientY;
    box.addEventListener('mousemove', mouseMove)
}



function mouseUp(e) {
    box.removeEventListener('mousemove',mouseMove)
    console.log("got triggered")
}



box.addEventListener("mousedown",mouseDown)
box.addEventListener('mouseup',mouseUp)
box.addEventListener("mouseout",mouseUp)
console.log(box)