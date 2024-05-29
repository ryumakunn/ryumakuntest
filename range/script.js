// script.js
window.addEventListener('deviceorientation', (event) => {
    const alpha = event.alpha; // Z軸 (0から360度)
    const beta = event.beta;   // X軸 (-180から180度)
    const gamma = event.gamma; // Y軸 (-90から90度)

    document.getElementById('orientation').innerText =
        `Alpha (Z軸): ${alpha.toFixed(2)}°\n` +
        `Beta (X軸): ${beta.toFixed(2)}°\n` +
        `Gamma (Y軸): ${gamma.toFixed(2)}°`;
});
