// script.js

// 驗證是否已登入
const username = localStorage.getItem("loggedInUser");

if (username) {
  document.getElementById("username").textContent = username;
} else {
  // 如果沒登入帳號，導回登入頁面
  window.location.href = "index.html";
}

// 登出功能
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}

// 進度條功能
function move() {
  let elem = document.getElementById("myBar");
  let percentText = document.getElementById("percent");
  let width = 1; // 初始寬度
  let id = setInterval(frame, 15); // 每15毫秒執行一次

  function frame() {
    if (width >= 100) {
      clearInterval(id); // 清除計時器
      window.location.href = 'dinosaurs.html'; // 導航到另一個頁面
    } else {
      width++; // 增加寬度
      elem.style.width = width + '%'; // 更新進度條寬度
      percentText.innerHTML = width + '%'; // 更新百分比數字
    }
  }
}
