// script.js

// 太陽が特定の角度にある時間を取得する関数
function getApproximateTimeFromAlpha(alpha) {
    // 画像に基づき、太陽の位置と時間の関係を調整
    // 南 (180度) が正午、東 (90度) が午前6時、西 (270度) が午後6時とする

    // 角度に応じた時間を計算する
    let hours = (alpha - 90) / 15; // 15度が1時間に相当

    // 負の時間を補正
    if (hours < 0) {
        hours += 24;
    }

    // 現在時刻を基準とせず、角度から直接計算された時刻を使用
    let displayHours = Math.floor(hours) % 24;
    let displayMinutes = Math.round((hours % 1) * 60 / 10) * 10; // 10分刻みに丸める

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
