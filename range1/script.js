// script.js

let defo = 0;

document.getElementById('setNorth').addEventListener('click', () => {
    alert('北設定しました');
    console.log((set=alpha));
});

window.addEventListener('deviceorientation', (event) => {
    const alpha = event.alpha; // Z軸 (0から360度)
    console.log((alpha=alpha-set));

    document.getElementById('orientation').innerText =
        `Alpha (Z軸): ${alpha.toFixed(2)}°\n` ;
});
