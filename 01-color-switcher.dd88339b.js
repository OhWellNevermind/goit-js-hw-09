!function(){var t,n={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")};function e(){n.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}function o(t){n.startBtn.disabled=t,n.stopBtn.disabled=!t}n.stopBtn.disabled=!0,n.startBtn.addEventListener("click",(function(){e(),t=setInterval(e,1e3),o(!0)})),n.stopBtn.addEventListener("click",(function(){clearInterval(t),o(!1)}))}();
//# sourceMappingURL=01-color-switcher.dd88339b.js.map
