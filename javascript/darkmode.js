// For dark mode setting on the project's page
const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeRed = document.getElementById('toggle-red');
const modeStatus = document.querySelector('.mode-status');

function toggleMode() {
  body.classList.toggle('dark-mode');
  modeRed.classList.toggle('redbg');
  const modeMessage = body.classList.contains('dark-mode') ? 'Dark Mode' : "Light Mode";
  modeStatus.innerText = "...of nothing!!! Current mode: " + modeMessage;
}
modeToggle.addEventListener('click', toggleMode);