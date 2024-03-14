const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
function handleLoginSubmit() {
    const username = $("#username").value;
    const password = $("#password").value;
    if (!localStorage.getItem(username)) {
        $(".username-notify").innerText = "Không tồn tại username";
        return;
    }
    if (localStorage.getItem(username) === password) {
        window.location.href = "main.html";
    } else {
        $(".password-notify").innerText = "Nhầm pass";
        return;
    }
}
$("#login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    handleLoginSubmit();
});
