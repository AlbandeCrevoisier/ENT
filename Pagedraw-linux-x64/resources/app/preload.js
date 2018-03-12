const {ipcRenderer} = require("electron");

function init() {
  document.addEventListener('DOMContentLoaded', function() {
    let inputs = window.document.querySelectorAll('div > a[href*="/pages/"]');
    inputs.forEach((input) => input.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      ipcRenderer.send('open', input.getAttribute("href"))}
    ));
  });
}

init();
