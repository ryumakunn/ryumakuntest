const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
let isInvincible = false; // 無敵状態のフラグ
let isGameStarted = false; // ゲームがスタートしているかどうかのフラグ
let startTime = 0; // ゲーム開始時間
let timerInterval; // タイマー用の変数

// 初期状態でタイマーを表示
const timerDisplay = document.createElement('div');
timerDisplay.id = 'timer';
timerDisplay.style.position = 'absolute';
timerDisplay.style.top = '10px';
timerDisplay.style.left = '10px';
timerDisplay.style.fontSize = '20px';
timerDisplay.textContent = `Time: 0 ms`; // 初期状態で0msを表示
document.body.appendChild(timerDisplay);

// スペースキーを押したらゲームスタート＆無敵モード処理
document.addEventListener('keydown', function (event) {
    if (event.key === ' ') {
        if (!isGameStarted) {
            startGame();
        } else if (!isInvincible) {
            becomeInvincible();
        }
    }
});

// ゲームをスタートする処理
function startGame() {
    isGameStarted = true;
    startTime = Date.now(); // スタート時間を記録
    cactus.style.animationPlayState = 'running'; // 障害物の動きを開始
    startTimer(); // タイマーを開始
}

// 無敵モードの処理
function becomeInvincible() {
    isInvincible = true;
    dino.style.backgroundColor = 'blue'; // 無敵モード時の色変更
    setTimeout(() => {
        isInvincible = false;
        dino.style.backgroundColor = 'green'; // 無敵モード解除後に元の色に戻す
    }, 1000); // 1秒間無敵
}

// タイマーをスタートする処理
function startTimer() {
    timerInterval = setInterval(() => {
        const elapsedTime = Date.now() - startTime; // 経過時間(ms)を計算
        timerDisplay.textContent = `Time: ${elapsedTime} ms`; // タイマーを更新
    }, 10);
}

// 障害物との衝突を検知
let isAlive = setInterval(function () {
    if (isGameStarted) {
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("right"));

        // 無敵状態でない場合のみ衝突判定を行う
        if (!isInvincible && cactusLeft < 70 && cactusLeft > 50 && dinoTop <= 50) {
            gameOver();
        }
    }
}, 10);

// ゲームオーバー時の処理
function gameOver() {
    alert("Game Over");
    const elapsedTime = Date.now() - startTime; // 最終的な経過時間
    alert(`You survived for ${elapsedTime} ms!`);
    clearInterval(timerInterval); // タイマーを停止
    resetGame();
}

// ゲームをリセットする処理
function resetGame() {
    isGameStarted = false;
    dino.style.backgroundColor = 'green'; // 恐竜の色をリセット
    cactus.style.animationPlayState = 'paused'; // 障害物の動きを停止
    timerDisplay.textContent = `Time: 0 ms`; // タイマーをリセットして0に戻す
}
