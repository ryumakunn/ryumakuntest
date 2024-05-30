// script.js

let set = 0;

document.getElementById('setNorth').addEventListener('click', () => {
    alert('北を設定しました');
    window.addEventListener('deviceorientation', (event) => {
        const alpha = event.alpha; // Z軸 (0から360度)
        console.log((set=alpha));
    });
});

window.addEventListener('deviceorientation', (event) => {
    const alpha = event.alpha; // Z軸 (0から360度)
    let colalpha
    console.log((colalpha=alpha-set));

    document.getElementById('orientation').innerText =
        `Alpha (Z): ${alpha.toFixed(2)}°\n` +
        `set (Z軸): ${set.toFixed(2)}°\n` ;
});
