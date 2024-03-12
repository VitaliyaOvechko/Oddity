const changeLogoBtn = document.querySelector("#change-logo");
const logo = document.querySelector(".logo");

changeLogoBtn.addEventListener("click", onLogoChange);

function onLogoChange() {
  logo.innerHTML = `
        <span style="color: #4285f4">O</span>
        <span style="color: #ea4335">d</span>
        <span style="color: #fbbc05">d</span>
        <span style="color: #4285f4">i</span>
        <span style="color: #34a853">t</span>
        <span style="color: #ea4335">y</span>
    `;
}
