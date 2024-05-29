// script.js

// 太陽が特定の角度にある時間を取得する関数
function getApproximateTimeFromAlpha(alpha) {
    // αが0度から360度までの範囲で、0度を北と仮定
    // 太陽が正南にあるとき、つまり180度の時を12:00と仮定
    // 1度ごとに約4分の時間差があると計算（360度/24時間=15度/時間, 1度=4分） 
    
    // 太陽が南にある時刻（12:00）からの時間差を計算
    const minutesFromNoon = (alpha - 180) * 4;

    // 現在の時間を基準にする（表示するため）
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // 基準時刻に計算された時間差を加算
    const totalMinutes = (hours * 60 + minutes) + minutesFromNoon;

    // 日時計の時間を計算
    let displayHours = Math.floor(totalMinutes / 60) % 24;
    let displayMinutes = Math.round(totalMinutes % 60 / 10) * 10; // 10分刻みに丸める

    // 時間と分が60または0を越えた場合の調整
    if (displayMinutes >= 60) {
        displayMinutes -= 60;
        displayHours += 1;
    }
    if (displayHours >= 24) {
        displayHours -= 24;
    }

    // 2桁表示を確保
    displayHours = displayHours.toString().padStart(2, '0');
    displayMinutes = displayMinutes.toString().padStart(2, '0');

    return `${displayHours}:${displayMinutes}`;
}

// 角度検知のイベントリスナーを設定する関数
function setOrientationListener() {
    window.addEventListener('deviceorientation', (event) => {
        const alpha = event.alpha; // Z軸 (0から360度)

        // αの値に基づいて時間を計算
        const time = getApproximateTimeFromAlpha(alpha);

        // 計算した時間を表示
        document.getElementById('time').innerText = `おおよその時間: ${time}`;
    });
}

// iOS向けの許可リクエスト処理
const permissionButton = document.getElementById('permission');

if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
    // iOS 13+の場合、許可ボタンを表示
    permissionButton.style.display = 'block';
    permissionButton.addEventListener('click', () => {
        DeviceOrientationEvent.requestPermission()
            .then(response => {
                if (response === 'granted') {
                    setOrientationListener();
                    permissionButton.style.display = 'none';
                }
            })
            .catch(console.error);
    });
} else {
    // 他のブラウザの場合、直接イベントリスナーを設定
    setOrientationListener();
}
