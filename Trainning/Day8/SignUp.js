const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
function handleSignUpSubmit() {
    const username = $("#username").value;
    const password = $("#password").value;
    const confirmPassword = $("#confirm_password").value;
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    const emailRegex = /^[^@]+@[^@]+\.[^@.]+$/;
    if (!emailRegex.test(username)) {
        $(".username-notify").innerText = "Email không đúng định dạng";
        return;
    }
    if (localStorage.getItem(username)) {
        $(".username-notify").innerText = "Đã tồn tại username";
        return;
    } else {
        $(".username-notify").innerText = "";
    }

    if (!passwordRegex.test(password)) {
        $(".password-notify").innerText = "đặt mật khẩu ngu quá!";
        return;
    }
    if (!(password === confirmPassword)) {
        $(".confirm_password-notify").innerText =
            "Confirm password không trùng";
        return;
    } else {
        $(".confirm_password-notify").innerText = "";
    }

    //localStorage.setItem(username, password);

    alert("Đăng kí thành công ");
}
$("#signup-form").addEventListener("submit", (e) => {
    e.preventDefault();
    handleSignUpSubmit();
});
