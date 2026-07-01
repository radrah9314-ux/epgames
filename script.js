const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-register");
const registerLink = document.querySelector(".login-link");
const btnPopup = document.querySelector(".btnLogin-popup");

registerLink.addEventListener("click", ()=> {
    wrapper.classList.add("active");
});

loginLink.addEventListener("click", ()=> {
    wrapper.classList.remove("active");
});

registerLink.addEventListener("click", ()=> {
    wrapper.classList.add('active');
});

btnPopup.addEventListener("click", ()=> {
    wrapper.classList.add("active");
});
