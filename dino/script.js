const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const timerDisplay = document.getElementById('timer'); // タイマー表示要素を取得
let isInvincible = false; // 無敵状態のフラグ
let isGameStarted = false; // ゲームがスタートしているかどうかのフラグ
let startTime = 0; // ゲーム開始時間
let timerInterval; // タイマー用の変数




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
    createCactus();//オブジェクト生成
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
        function createCactus() {
            const cactus = document.createElement('div');
            cactus.classList.add('cactus');
            cactus.style.position = 'absolute';
            cactus.style.bottom = '0';
            cactus.style.right = '0';
            cactus.style.width = '20px';
            cactus.style.height = '50px';
            cactus.style.backgroundColor = 'red';
            cactus.style.animation = 'moveCactus 3s linear infinite';
            
            document.getElementById('game').appendChild(cactus);
    
            // ランダムな間隔で次のサボテンを生成
            const randomInterval = Math.random() * 2000 + 1000; // 1秒から3秒の間隔
            if (isGameStarted){
                    setTimeout(createCactus, randomInterval);
            }
        }

// タイマーをスタートする処理
function startTimer() {
    timerInterval = setInterval(() => {
        const elapsedTime = Date.now() - startTime; // 経過時間(ms)を計算
        timerDisplay.textContent = `Time: ${elapsedTime} ms`; // タイマーを更新
    }, 1000);
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
}, 1000);

// ゲームオーバー時の処理
function gameOver() {
    alert("Game Over");
    const elapsedTime = Date.now() - startTime; // 最終的な経過時間
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
