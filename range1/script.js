// script.js

let defo = 0;

document.getElementById('setNorth').addEventListener('click', () => {
    alert('北を設定しました');
    const set = event.alpha;
});

window.addEventListener('deviceorientation', (event) => {
    const lpha = event.alpha; // Z軸 (0から360度)
    const alpha = lpha-set;

    document.getElementById('orientation').innerText =
        `Alpha (Z軸): ${alpha.toFixed(2)}°\n` ;
});
