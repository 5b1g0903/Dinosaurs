const character = document.getElementById('character');
const obstacle = document.getElementById('obstacle');
const message = document.getElementById('message');
const scoreDisplay = document.getElementById('score'); // 分數顯示的元素

let currentPosition = window.innerWidth / 2 - 75; // 當前位置
let isJumping = false; // 跳躍狀態
let isGameOver = false; // 遊戲結束狀態
const step = 10; // 每次移動的步伐
let score = 0; // 初始分數

// 開始計算分數
setInterval(increaseScore, 100); // 每100毫秒增加一次分數

document.addEventListener('keydown', function(event) {
    if (isGameOver) return; // 遊戲結束時不處理鍵盤事件

    const maxWidth = window.innerWidth - 150; // 最大寬度（考慮角色寬度）

    switch(event.key) {
        case 'ArrowRight':
            if (currentPosition < maxWidth) {
                currentPosition += step; // 向右移動
                character.style.left = currentPosition + 'px';
                character.style.transform = 'scaleX(-1)'; // 面向右邊
            }
            break;
        case 'ArrowLeft':
            if (currentPosition > 0) {
                currentPosition -= step; // 向左移動
                character.style.left = currentPosition + 'px';
                character.style.transform = 'scaleX(1)'; // 面向左邊
            }
            break;    
        case 'ArrowUp':
            if (!isJumping) {
                jump(300); // 普通跳躍高度
            }
            break;
    }
});

function jump() {
    isJumping = true;
    character.classList.add('jump');

    setTimeout(() => {
        isJumping = false;
        character.classList.remove('jump');
    }, 500); // 跳躍時間
}

// 增加分數
function increaseScore() {
    if (!isGameOver) {
        score += 10; // 每次增加10分
        scoreDisplay.textContent = `分數: ${score}`; // 更新分數顯示
        checkScore(); // 檢查分數
    }
}

// 檢查分數是否達到5000
function checkScore() {
    if (score >= 500) {
        setTimeout(() => {
            window.location.href = 'chose.html'; // 轉換到另一個頁面
        }, 1500); // 延遲 1500 毫秒後轉換頁面
    }
}

// 碰撞檢測
function detectCollision() {
    const characterRect = character.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    // 檢查是否與第一個障礙物碰撞
    if (
        characterRect.left < obstacleRect.right &&
        characterRect.right > obstacleRect.left &&
        characterRect.bottom > obstacleRect.top
    ) {
        if (!isJumping) { // 如果角色不是在跳躍
            character.classList.add('fall'); // 角色倒地
            message.style.display = 'block'; // 顯示消息
            isGameOver = true; // 設置遊戲結束狀態
            setTimeout(() => {
                window.location.href = 'start.html'; // 轉換到另一個頁面
            }, 1500); // 延遲 1500 毫秒後轉換頁面
        }
    }
}

// 每次動畫幀檢查碰撞
setInterval(detectCollision, 10);