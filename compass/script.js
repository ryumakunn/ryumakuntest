let initialNorth = null;

// "北を設定"ボタンをクリックした時に初期方位を設定
document.getElementById('setNorth').addEventListener('click', () => {
    initialNorth = currentHeading;
    alert('北を設定しました');
});

// デバイスの方位センサーのデータを取得
window.addEventListener('deviceorientation', (event) => {
    if (event.absolute) {
        // 方位データが取得できたらcurrentHeadingに代入
        let currentHeading = event.alpha;

        if (initialNorth !== null) {
            // 初期方位が設定されていれば、その変化を計算
            let angleChange = (currentHeading - initialNorth + 360) % 360;
            // 180度を超えた場合、反対方向に回転する
            if (angleChange > 180) {
                angleChange -= 360;
            }
            // 角度変化を表示
            document.getElementById('compass').textContent = `${angleChange.toFixed(2)}°`;
        } else {
            // 初期方位が設定されていない場合はそのままの角度を表示
            document.getElementById('compass').textContent = `${currentHeading.toFixed(2)}°`;
        }
    } else {
        alert('方位データがサポートされていません');
    }
});
