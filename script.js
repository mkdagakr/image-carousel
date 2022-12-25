const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs img');
const prevBtn = document.getElementById('pre');
const nextBtn = document.getElementById('next');

let idx = 0;

let interval = setInterval(run, 2000);

function run(){
    idx++;
    changeImage();
}

function changeImage(){
    
    if(idx > img.length - 1){
        idx = 0;
    } else if (idx < 0){
        idx = img.length - 1;
    }
    imgs.style.transform = `translateX(${idx * -750}px)`;
}

prevBtn.addEventListener("click", () => {
    idx--;
    changeImage();
    resetInterval();
});

nextBtn.addEventListener("click", () => {
    idx++;
    changeImage();
    resetInterval();
});

function resetInterval(){
    clearInterval(interval);
    interval = setInterval(run, 2000);
}