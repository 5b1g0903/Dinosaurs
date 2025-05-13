function toggleForm() {
  document.getElementById("loginForm").classList.toggle("active");
  document.getElementById("registerForm").classList.toggle("active");
}

// 登入功能
function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = localStorage.getItem("registeredUsername");
  const storedPass = localStorage.getItem("registeredPassword");

  if (username === storedUser && password === storedPass) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "start.html";
  } else {
    alert("帳號或密碼錯誤，或尚未註冊。");
  }
}

// 註冊功能
function register() {
  const username = document.getElementById("registerUsername").value;
  const password = document.getElementById("registerPassword").value;

  // 檢查是否已註冊
  if (localStorage.getItem("registeredUsername")) {
    alert("您已經註冊過了，請直接登入。");
    return;
  }

  // 儲存帳號密碼
  localStorage.setItem("registeredUsername", username);
  localStorage.setItem("registeredPassword", password);

  // 顯示註冊成功訊息
  alert("註冊成功！請使用剛剛的帳號登入。");

  // 清空欄位
  document.getElementById("registerUsername").value = "";
  document.getElementById("registerPassword").value = "";

  // 切換回登入頁面
  toggleForm();
}
