const track = document.getElementById("awardsTrack");
const wrapper = document.querySelector(".awards-wrapper");
// clone để loop vô hạn
track.innerHTML += track.innerHTML;

let scrollX = 0;

const delay = 2000;       // đứng im 2s
const moveSpeed = 12.5;    // tốc độ trượt
let isMoving = false;

const box = document.querySelector(".award-box");
const gap = 40; // nhớ trùng gap CSS
const step = box.offsetWidth + gap;

function focusNext(){
    isMoving = true;
    let moved = 0;

    function move(){

        let remaining = step - moved;
        let currentSpeed = Math.min(moveSpeed, remaining);

        scrollX += currentSpeed;
        moved += currentSpeed;

        if(scrollX >= track.scrollWidth/2){
            scrollX -= track.scrollWidth/2;
        }

        track.style.transform = `translateX(-${scrollX}px)`;
        updateCenter();

        if(moved < step){
            requestAnimationFrame(move);
        }else{
            // snap chính xác luôn
            scrollX = Math.round(scrollX / step) * step;
            track.style.transform = `translateX(-${scrollX}px)`;

            isMoving = false;
            setTimeout(focusNext, delay);
        }
    }

    requestAnimationFrame(move);
}

function updateCenter(){
    const boxes = document.querySelectorAll(".award-box");

    const wrapperRect = wrapper.getBoundingClientRect();
    const centerScreen = wrapperRect.left + wrapperRect.width/2;

    let distances = [];

    boxes.forEach(box=>{
        const rect = box.getBoundingClientRect();
        const boxCenter = rect.left + rect.width/2;
        const distance = Math.abs(centerScreen - boxCenter);

        distances.push({box, distance});
    });

    distances.sort((a,b)=>a.distance-b.distance);

    boxes.forEach(box=>{
        box.classList.remove("center");
        box.classList.remove("near");
    });

    if(distances[0]) distances[0].box.classList.add("center");
    if(distances[1]) distances[1].box.classList.add("near");
    if(distances[2]) distances[2].box.classList.add("near");
}

// delay đầu tiên
setTimeout(focusNext, delay);