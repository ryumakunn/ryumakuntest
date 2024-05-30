window.addEventListener('DOMContentLoaded', () => {
    const timeDisplay = document.getElementById('time');
    const minDisplay = document.getElementById('min');
    const azimuthDisplay = document.getElementById('azimuth');
    const permissionButton = document.getElementById('permission');

    let watchID;
    

    function showTimeForDirection(azimuth) {
        let time;
        if(azimuth >= 0 && azimuth < 15){
            time='0';
            if(azimuth>=0 && azimuth<2.5){
                min='0';
            }else if(azimuth>=2.5 && azimuth >5){
                min='10';
            }else if (azimuth>=5 && azimuth >7.5){
                min='20';
            }else if(azimuth>=7.5 && azimuth >10){
                min='30';
            }else if(azimuth>=10 && azimuth >12.5){
                min='40';
            }else{
                min='50';
            }
        }else if(azimuth >= 15 && azimuth < 30){
            time='23';
            if(azimuth>=15 && azimuth<17.5){
                min='0';
            }else if(azimuth>=17.5 && azimuth >20){
                min='10';
            }else if (azimuth>=20 && azimuth >22.5){
                min='20';
            }else if(azimuth>=22.5 && azimuth >25){
                min='30';
            }else if(azimuth>=25 && azimuth >27.5){
                min='40';
            }else{
                min='50';
            }
        }else if(azimuth >= 30 && azimuth < 45){
            time='22';
            if(azimuth>=30 && azimuth<32.5){
                min='0';
            }else if(azimuth>=32.5 && azimuth >35){
                min='10';
            }else if (azimuth>=35 && azimuth >37.5){
                min='20';
            }else if(azimuth>=37.5 && azimuth >40){
                min='30';
            }else if(azimuth>=40 && azimuth >42.5){
                min='40';
            }else{
                min='50';
            }
        }else if(azimuth >= 45 && azimuth < 60){
            time='21';
            if(azimuth>=45 && azimuth<47.5){
                min='0';
            }else if(azimuth>=47.5 && azimuth >50){
                min='10';
            }else if (azimuth>=50 && azimuth >52.5){
                min='20';
            }else if(azimuth>=52.5 && azimuth >55){
                min='30';
            }else if(azimuth>=55 && azimuth >57.5){
                min='40';
            }else{
                min='50';
            }
        }else if(azimuth >= 60 && azimuth < 75){
            time='20';
            if(azimuth>=60 && azimuth<62.5){
                min='0';
            }else if(azimuth>=62.5 && azimuth >65){
                min='10';
            }else if (azimuth>=65 && azimuth >67.5){
                min='20';
            }else if(azimuth>=67.5 && azimuth >70){
                min='30';
            }else if(azimuth>=70 && azimuth >72.5){
                min='40';
            }else{
                min='50';
            }
        }else if(azimuth >= 75 && azimuth < 90){
            time='19';
            if(azimuth>=75 && azimuth<77.5){
                min='0';
            }else if(azimuth>=77.5 && azimuth >80){
                min='10';
            }else if (azimuth>=80 && azimuth >82.5){
                min='20';
            }else if(azimuth>=82.5 && azimuth >85){
                min='30';
            }else if(azimuth>=85 && azimuth >87.5){
                min='40';
            }else{
                min='50';
            }
        }else if(azimuth >= 90 && azimuth < 105){
            time='18';
            if(azimuth>=90 && azimuth<92.5){
                min='0';
            }else if(azimuth>=92.5 && azimuth >95){
                min='10';
            }else if (azimuth>=95 && azimuth >97.5){
                min='20';
            }else if(azimuth>=97.5 && azimuth >100){
                min='30';
            }else if(azimuth>=100 && azimuth >102.5){
                min='40';
            }else{
                min='50';
            }
        }else if(azimuth >= 105 && azimuth < 120){
            time='17';
            if(azimuth>=105 && azimuth<107.5){
                min='0';
            }else if(azimuth>=107.5 && azimuth >110){
                min='10';
            }else if (azimuth>=110 && azimuth >112.5){
                min='20';
            }else if(azimuth>=112.5 && azimuth >115){
                min='30';
            }else if(azimuth>=115 && azimuth >117.5){
                min='40';
            }else{
                min='50';
            }
        }else if(azimuth >= 120 && azimuth < 135){
            time='16';
            if(azimuth>=120 && azimuth<122.5){
                min='0';
            }else if(azimuth>=122.5 && azimuth >125){
                min='10';
            }else if (azimuth>=125 && azimuth >127.5){
                min='20';
            }else if(azimuth>=127.5 && azimuth >130){
                min='30';
            }else if(azimuth>=130 && azimuth >132.5){
                min='40';
            }else{
                min='50';
            }
        }else if(azimuth >= 135 && azimuth < 150){
            time='15';
            if(azimuth>=135 && azimuth<137.5){
                min='0';
            }else if(azimuth>=137.5 && azimuth >140){
                min='10';
            }else if (azimuth>=140 && azimuth >142.5){
                min='20';
            }else if(azimuth>=142.5 && azimuth >145){
                min='30';
            }else if(azimuth>=145 && azimuth >147.5){
                min='40';
            }else{
                min='50';
            }
        }else if(azimuth >= 150 && azimuth < 165){
            time='14';
            if(azimuth>=150 && azimuth<152.5){
                min='0';
            }else if(azimuth>=152.5 && azimuth >155){
                min='10';
            }else if (azimuth>=155 && azimuth >157.5){
                min='20';
            }else if(azimuth>=157.5 && azimuth >160){
                min='30';
            }else if(azimuth>=160 && azimuth >162.5){
                min='40';
            }else{
                min='50';
            }
        }else if(azimuth >= 165 && azimuth < 180){
            time='13';
            if(azimuth>=165 && azimuth<152.5){
                min='0';
            }else if(azimuth>=167.5 && azimuth >170){
                min='10';
            }else if (azimuth>=170 && azimuth >172.5){
                min='20';
            }else if(azimuth>=172.5 && azimuth >175){
                min='30';
            }else if(azimuth>=175 && azimuth >177.5){
                min='40';
            }else{
                min='50';
            }
        }else if(azimuth >= 180 && azimuth < 195){
            time='12';
            if(azimuth>=180 && azimuth<182.5){
                min='0';
            }else if(azimuth>=182.5 && azimuth >185){
                min='10';
            }else if (azimuth>=185 && azimuth >187.5){
                min='20';
            }else if(azimuth>=187.5 && azimuth >190){
                min='30';
            }else if(azimuth>=190 && azimuth >192.5){
                min='40';
            }else{
                min='50';
            }
        }else if(azimuth >= 195 && azimuth < 210){
            time='11';
            if(azimuth>=195 && azimuth<197.5){
                min='0';
            }else if(azimuth>=197.5 && azimuth >200){
                min='10';
            }else if (azimuth>=200 && azimuth >202.5){
                min='20';
            }else if(azimuth>=202.5 && azimuth >205){
                min='30';
            }else if(azimuth>=205 && azimuth >207.5){
                min='40';
            }else{
                min='50';
            }
        }else if(azimuth >= 210 && azimuth < 225){
            time='10';
            if(azimuth>=210 && azimuth<212.5){
                min='0';
            }else if(azimuth>=212.5 && azimuth >215){
                min='10';
            }else if (azimuth>=215 && azimuth >217.5){
                min='20';
            }else if(azimuth>=217.5 && azimuth >220){
                min='30';
            }else if(azimuth>=220 && azimuth >222.5){
                min='40';
            }else{
                min='50';
            }
        }else if(azimuth >= 225 && azimuth < 240){
            time='9';
            if(azimuth>=225 && azimuth<227.5){
                min='0';
            }else if(azimuth>=227.5 && azimuth >230){
                min='10';
            }else if (azimuth>=230 && azimuth >232.5){
                min='20';
            }else if(azimuth>=232.5 && azimuth >235){
                min='30';
            }else if(azimuth>=235 && azimuth >237.5){
                min='40';
            }else{
                min='50';
            }
        }else if(azimuth >= 240 && azimuth < 255){
            time='8';
            if(azimuth>=240 && azimuth<242.5){
                min='0';
            }else if(azimuth>=242.5 && azimuth >245){
                min='10';
            }else if (azimuth>=245 && azimuth >247.5){
                min='20';
            }else if(azimuth>=247.5 && azimuth >250){
                min='30';
            }else if(azimuth>=250 && azimuth >252.5){
                min='40';
            }else{
                min='50';
            }
        }else if(azimuth >= 255 && azimuth < 270){
            time='7';
            if(azimuth>=255 && azimuth<257.5){
                min='0';
            }else if(azimuth>=257.5 && azimuth >260){
                min='10';
            }else if (azimuth>=260 && azimuth >262.5){
                min='20';
            }else if(azimuth>=262.5 && azimuth >265){
                min='30';
            }else if(azimuth>=265 && azimuth >267.5){
                min='40';
            }else{
                min='50';
            }
        }else if(azimuth >= 270 && azimuth < 285){
            time='6';
            if(azimuth>=270 && azimuth<272.5){
                min='0';
            }else if(azimuth>=272.5 && azimuth >275){
                min='10';
            }else if (azimuth>=275 && azimuth >277.5){
                min='20';
            }else if(azimuth>=277.5 && azimuth >280){
                min='30';
            }else if(azimuth>=280 && azimuth >282.5){
                min='40';
            }else{
                min='50';
            }
        }else if(azimuth >= 285 && azimuth < 300){
            time='5';
            if(azimuth>=285 && azimuth<287.5){
                min='0';
            }else if(azimuth>=287.5 && azimuth >290){
                min='10';
            }else if (azimuth>=290 && azimuth >292.5){
                min='20';
            }else if(azimuth>=292.5 && azimuth >295){
                min='30';
            }else if(azimuth>=295 && azimuth >297.5){
                min='40';
            }else{
                min='50';
            }
        }else if(azimuth >= 300 && azimuth < 315){
            time='4';
            if(azimuth>=300 && azimuth<302.5){
                min='0';
            }else if(azimuth>=302.5 && azimuth >305){
                min='10';
            }else if (azimuth>=305 && azimuth >307.5){
                min='20';
            }else if(azimuth>=307.5 && azimuth >310){
                min='30';
            }else if(azimuth>=310 && azimuth >312.5){
                min='40';
            }else{
                min='50';
            }
        }else if(azimuth >= 315 && azimuth < 330){
            time='3';
            if(azimuth>=315 && azimuth<317.5){
                min='0';
            }else if(azimuth>=317.5 && azimuth >320){
                min='10';
            }else if (azimuth>=320 && azimuth >322.5){
                min='20';
            }else if(azimuth>=322.5 && azimuth >325){
                min='30';
            }else if(azimuth>=325 && azimuth >327.5){
                min='40';
            }else{
                min='50';
            }
        }else if(azimuth >= 330 && azimuth < 345){
            time='2';
            if(azimuth>=330 && azimuth<332.5){
                min='0';
            }else if(azimuth>=332.5 && azimuth >335){
                min='10';
            }else if (azimuth>=335 && azimuth >337.5){
                min='20';
            }else if(azimuth>=337.5 && azimuth >340){
                min='30';
            }else if(azimuth>=340 && azimuth >342.5){
                min='40';
            }else{
                min='50';
            }
            
        }else if(azimuth >= 345 && azimuth < 360){
            time='1';
            if(azimuth>=345 && azimuth<17.5){
                min='0';
            }else if(azimuth>=347.5 && azimuth >350){
                min='10';
            }else if (azimuth>=350 && azimuth >352.5){
                min='20';
            }else if(azimuth>=352.5 && azimuth >355){
                min='30';
            }else if(azimuth>=355 && azimuth >357.5){
                min='40';
            }else{
                min='50';
            }
        }else{
            time='時間を特定できません';
        }
       
        timeDisplay.textContent = time;
        minDisplay.textContent = min;
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
