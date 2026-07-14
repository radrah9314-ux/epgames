const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".Register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelectorAll(".icon-close");
const loginForm = document.querySelector(".form-box.login form");
const loginButton = document.querySelector(".btnLogin-popup");
const profileMenu = document.querySelector(".profile-menu");
const profileButton = document.querySelector(".btn-profile");
const profileDropdown = document.querySelector(".profile-dropdown");
const logout = document.querySelector("#logout");


registerLink.addEventListener("click", ()=> {
    wrapper.classList.add("active");
});

loginLink.addEventListener("click", ()=> {
    wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", ()=> {
    wrapper.classList.add("active-popup");
});

iconClose.forEach(icon=> {
    icon.addEventListener("click", ()=> {
        wrapper.classList.remove("active-popup");
        wrapper.classList.remove("active");
    });
});

loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page refresh
wrapper.classList.remove("active-popup");
    wrapper.classList.remove("active");

    // Hide Login button
    loginButton.style.display = "none";

    // Show Profile button
    profileMenu.style.display = "block";
});

profileButton.addEventListener("click", function () {
    if (profileDropdown.style.display === "block") {
        profileDropdown.style.display = "none";
    } else {
        profileDropdown.style.display = "block";
    }
});

logout.addEventListener("click", function (e) {
    e.preventDefault();

    profileDropdown.style.display = "none";
    profileMenu.style.display = "none";
    loginButton.style.display = "inline-block";
});

function handleCredentialResponse(response) {
    console.log(response);

    wrapper.classList.remove("active-popup");

    loginButton.style.display = "none";
    profileMenu.style.display = "block";
}
