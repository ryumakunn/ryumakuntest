// script.js

let set = 0;
let defo = 0;

document.getElementById('setNorth').addEventListener('click', () => {
    alert('北を設定しました');
});

window.addEventListener('deviceorientation', (event) => {
    const alpha = event.alpha; // Z軸 (0から360度)

    document.getElementById('orientation').innerText =
        `Alpha (Z軸): ${alpha.toFixed(2)}°\n` ;
});
