window.addEventListener('DOMContentLoaded', () => {
    const timeDisplay = document.getElementById('time');
    const azimuthDisplay = document.getElementById('azimuth');
    const permissionButton = document.getElementById('permission');

    let watchID;
    

    function showTimeForDirection(azimuth) {
        let time;
        if(azimuth >= 0 && azimuth < 15){
            time='24';
        }else if(azimuth >= 15 && azimuth < 30){
            time='23';
        }else if(azimuth >= 30 && azimuth < 45){
            time='22';
        }else if(azimuth >= 45 && azimuth < 60){
            time='21';
        }else if(azimuth >= 60 && azimuth < 75){
            time='20';
        }else if(azimuth >= 75 && azimuth < 90){
            time='19';
        }else if(azimuth >= 90 && azimuth < 105){
            time='23';
        }else if(azimuth >= 105 && azimuth < 120){
            time='22';
        }else if(azimuth >= 120 && azimuth < 135){
            time='21';
        }else if(azimuth >= 135 && azimuth < 150){
            time='20';
        }else if(azimuth >= 150 && azimuth < 165){
            time='19';
        }else if(azimuth >= 165 && azimuth < 180){
            time='21';
        }else if(azimuth >= 180 && azimuth < 195){
            time='20';
        }else if(azimuth >= 195 && azimuth < 210){
            time='19';
        }else if(azimuth >= 210 && azimuth < 225){
            time='23';
        }else if(azimuth >= 225 && azimuth < 240){
            time='22';
        }else if(azimuth >= 240 && azimuth < 255){
            time='21';
        }else if(azimuth >= 255 && azimuth < 270){
            time='20';
        }else if(azimuth >= 270 && azimuth < 285){
            time='19';
        }else if(azimuth >= 285 && azimuth < 300){
            time='22';
        }else if(azimuth >= 300 && azimuth < 315){
            time='21';
        }else if(azimuth >= 315 && azimuth < 330){
            time='20';
        }else if(azimuth >= 330 && azimuth < 345){
            time='19';
        }else if(azimuth >= 345 && azimuth < 360){
            time='22';
        }else{
            time='時間を特定できません';
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
