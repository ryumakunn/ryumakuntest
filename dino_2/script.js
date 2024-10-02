const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
let isInvincible = false; // 無敵状態のフラグ

// スペースキーを押したら無敵モードに
document.addEventListener('keydown', function (event) {
    if (event.key === ' ') {
        if (!isInvincible) {
            becomeInvincible();
        }
    }
});

// 無敵モードの処理
function becomeInvincible() {
    isInvincible = true;
    dino.style.backgroundColor = 'blue'; // 無敵モード時の色変更
    setTimeout(() => {
        isInvincible = false;
        dino.style.backgroundColor = 'green'; // 無敵モード解除後に元の色に戻す
    }, 100); // 1秒間無敵
}

// 障害物との衝突を検知
let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("right"));

    // 無敵状態でない場合のみ衝突判定を行う
    if (!isInvincible && cactusLeft < 70 && cactusLeft > 50 && dinoTop <= 50) {
        alert("Game Over");
    }
}, 10);
