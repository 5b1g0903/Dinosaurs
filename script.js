function toggleForm() {
    document.getElementById("loginForm").classList.toggle("active");
    document.getElementById("registerForm").classList.toggle("active");
  }
  
  function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
  
    // 儲存帳號到 localStorage
    localStorage.setItem("loggedInUser", username);
  
    // 跳轉到 welcome.html
    window.location.href = "start.html";
  }
  
  function register() {
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;
  
    alert("註冊成功！請返回登入頁面登入。\n帳號：" + username);
    toggleForm();
  }
  