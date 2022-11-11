let left = document.querySelector(".left");
let right = document.querySelector(".right");
let img = document.getElementById("img");
let i = 1;


right.addEventListener("click", function () {

    i++;
    if (i > 6) {
        i = 1;
    }
    img.src = `img/${i}.png`;
})

left.addEventListener("click", () => {
    i--;
    if (i < 1) {
        i = 6;
    }
    img.src = `img/${i}.png`;
})