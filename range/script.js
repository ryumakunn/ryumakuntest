window.addEventListener('DOMContentLoaded', () => {
    const timeDisplay = document.getElementById('time');
    const azimuthDisplay = document.getElementById('azimuth');
    const permissionButton = document.getElementById('permission');

    let watchID;

    function showTimeForDirection(azimuth) {
        let time;
        if (azimuth >= 160 && azimuth < 190) {
            time = '正午';
        } else if (azimuth >= 90 && azimuth < 160) {
            time = '午前';
        } else if (azimuth >= 190 && azimuth < 270) {
            time = '午後';
        } else {
            time = '時間を特定できませ';
        }
        timeDisplay.textContent = time;
        azimuthDisplay.textContent = `方角: ${azimuth.toFixed(2)} 度`;
    }

    function handleOrientation(event) {
        const alpha = event.alpha;
        if (alpha !== null) {
            const azimuth = alpha;
            showTimeForDirection(azimuth);
        }
    }

    function startWatching() {
        if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
            DeviceOrientationEvent.requestPermission()
                .then(permissionState => {
                    if (permissionState === 'granted') {
                        watchID = window.addEventListener('deviceorientation', handleOrientation);
                    } else {
                        permissionButton.style.display = 'block';
                    }
                })
                .catch(console.error);
        } else {
            watchID = window.addEventListener('deviceorientation', handleOrientation);
        }
    }

    permissionButton.addEventListener('click', () => {
        startWatching();
        permissionButton.style.display = 'none';
    });

    startWatching();
});
