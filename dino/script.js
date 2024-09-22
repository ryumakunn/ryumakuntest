const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
let isJumping = false;
let gravity = 0.9;
let position = 0;

// キー押下でジャンプ処理を実行
document.addEventListener('keydown', function (event) {
    if (event.key === ' ') {
        if (!isJumping) {
            jump();
        }
    }
});

function jump() {
    let count = 0;
    let upInterval = setInterval(() => {
        if (count === 15) {
            clearInterval(upInterval);

            // 落下する処理
            let downInterval = setInterval(() => {
                if (count === 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                }
                position -= 5;
                count--;
                dino.style.bottom = position + 'px';
            }, 20);
        }

        // 上昇する処理
        isJumping = true;
        position += 5;
        count++;
        dino.style.bottom = position + 'px';
    }, 20);
}

// 障害物との衝突を検知
let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("right"));

    // 衝突判定
    if (cactusLeft < 70 && cactusLeft > 50 && dinoTop <= 50) {
        alert("Game Over");
    }
}, 10);
