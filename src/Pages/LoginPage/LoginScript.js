export function addEventListeners() {
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const loginpage = document.querySelector(".loginpage");

  sign_in_btn.addEventListener('click', () => {
    loginpage.classList.remove("sign-up-mode");
  });

  sign_up_btn.addEventListener('click', () => {
    loginpage.classList.add("sign-up-mode");
  });
}
