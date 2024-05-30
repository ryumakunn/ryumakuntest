window.addEventListener('DOMContentLoaded', () => {
    const timeDisplay = document.getElementById('time');
    const azimuthDisplay = document.getElementById('azimuth');
    const permissionButton = document.getElementById('permission');

    let watchID;
    

    function showTimeForDirection(azimuth) {
        let time;
          if (azimuth === 180) {
            time = 12; // 180度を正午 (12時) に設定
        } else if (azimuth > 165 && azimuth < 180) {
            time = 12 + (180 - azimuth) / 15; // 165度を13時、180度を12時に設定
        } else if (azimuth > 150 && azimuth <= 165) {
            time = 14 - (165 - azimuth) / 15; // 150度を14時、165度を13時に設定
        } else {
        // その他の一般的な変換
        // 180度の時刻を12時とし、それを基準に360度全体を24時間にスケーリング
        const adjustedAzimuth = (azimuth + 180) % 360; // 180度を基準に調整
        time = (adjustedAzimuth / 360) * 24;
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
